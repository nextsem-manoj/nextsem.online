import 'dart:collection';
import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:google_mobile_ads/google_mobile_ads.dart';
import 'package:google_sign_in/google_sign_in.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  // Initialize Google Mobile Ads SDK
  await MobileAds.instance.initialize();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Nextsem Academy',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        brightness: Brightness.dark,
        primaryColor: const Color(0xFF0C1328),
        scaffoldBackgroundColor: const Color(0xFF070B19),
        colorScheme: const ColorScheme.dark(
          primary: Color(0xFF39FF14),
          surface: Color(0xFF0C1328),
        ),
      ),
      home: const WebViewScreen(),
    );
  }
}

class WebViewScreen extends StatefulWidget {
  const WebViewScreen({super.key});

  @override
  State<WebViewScreen> createState() => _WebViewScreenState();
}

class _WebViewScreenState extends State<WebViewScreen> {
  InAppWebViewController? _webViewController;
  PullToRefreshController? _pullToRefreshController;
  double _progress = 0.0;
  bool _isLoading = true;

  // Google Sign-In instance
  final GoogleSignIn _googleSignIn = GoogleSignIn(
    clientId: '983453487133-2ffe4796abuhkbidvtc7mo8n8kvo82ir.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
  );

  // AdMob states
  BannerAd? _bannerAd;
  bool _isBannerLoaded = false;
  String _bannerPosition = 'top'; // 'top' or 'bottom'

  InterstitialAd? _interstitialAd;
  bool _isInterstitialReady = false;

  RewardedAd? _rewardedAd;
  bool _isRewardedReady = false;

  @override
  void initState() {
    super.initState();
    _pullToRefreshController = PullToRefreshController(
      settings: PullToRefreshSettings(
        color: const Color(0xFF39FF14),
      ),
      onRefresh: () async {
        _webViewController?.reload();
      },
    );
  }

  @override
  void dispose() {
    _bannerAd?.dispose();
    _interstitialAd?.dispose();
    _rewardedAd?.dispose();
    super.dispose();
  }

  // --- AdMob Helpers ---

  void _loadBannerAd(String adUnitId) {
    _bannerAd?.dispose();
    _bannerAd = BannerAd(
      adUnitId: adUnitId,
      size: AdSize.banner,
      request: const AdRequest(),
      listener: BannerAdListener(
        onAdLoaded: (ad) {
          setState(() {
            _isBannerLoaded = true;
          });
        },
        onAdFailedToLoad: (ad, error) {
          debugPrint('BannerAd failed to load: $error');
          ad.dispose();
          setState(() {
            _isBannerLoaded = false;
          });
        },
      ),
    )..load();
  }

  void _hideBannerAd() {
    if (_isBannerLoaded) {
      setState(() {
        _isBannerLoaded = false;
      });
      _bannerAd?.dispose();
      _bannerAd = null;
    }
  }

  void _loadInterstitialAd(String adUnitId) {
    InterstitialAd.load(
      adUnitId: adUnitId,
      request: const AdRequest(),
      adLoadCallback: InterstitialAdLoadCallback(
        onAdLoaded: (ad) {
          _interstitialAd = ad;
          _isInterstitialReady = true;
        },
        onAdFailedToLoad: (error) {
          debugPrint('InterstitialAd failed to load: $error');
          _isInterstitialReady = false;
        },
      ),
    );
  }

  void _showInterstitialAd() {
    if (_isInterstitialReady && _interstitialAd != null) {
      _interstitialAd!.fullScreenContentCallback = FullScreenContentCallback(
        onAdDismissedFullScreenContent: (ad) {
          ad.dispose();
          _isInterstitialReady = false;
        },
        onAdFailedToShowFullScreenContent: (ad, error) {
          ad.dispose();
          _isInterstitialReady = false;
        },
      );
      _interstitialAd!.show();
    }
  }

  void _loadRewardedAd(String adUnitId) {
    RewardedAd.load(
      adUnitId: adUnitId,
      request: const AdRequest(),
      rewardedAdLoadCallback: RewardedAdLoadCallback(
        onAdLoaded: (ad) {
          _rewardedAd = ad;
          _isRewardedReady = true;
        },
        onAdFailedToLoad: (error) {
          debugPrint('RewardedAd failed to load: $error');
          _isRewardedReady = false;
        },
      ),
    );
  }

  Future<bool> _showRewardedAd() async {
    if (!_isRewardedReady || _rewardedAd == null) return false;
    bool rewarded = false;
    await _rewardedAd!.show(
      onUserEarnedReward: (adWithoutView, reward) {
        rewarded = true;
      },
    );
    _isRewardedReady = false;
    _rewardedAd = null;
    return rewarded;
  }

  // --- JavaScript Channels Setup ---

  void _registerJavaScriptHandlers(InAppWebViewController controller) {
    // 1. Google Sign-In Handler
    controller.addJavaScriptHandler(
      handlerName: 'googleSignIn',
      callback: (args) async {
        try {
          await _googleSignIn.signOut();
          final GoogleSignInAccount? account = await _googleSignIn.signIn();
          if (account == null) return null;
          final GoogleSignInAuthentication auth = await account.authentication;
          return {
            'authentication': {
              'idToken': auth.idToken,
              'accessToken': auth.accessToken,
            },
            'displayName': account.displayName,
            'email': account.email,
            'photoUrl': account.photoUrl,
          };
        } catch (e) {
          debugPrint('Native Google Sign-In error: $e');
          return null;
        }
      },
    );

    // 2. Banner Ad Handler
    controller.addJavaScriptHandler(
      handlerName: 'showBannerAd',
      callback: (args) {
        if (args.isEmpty) return;
        final options = args[0] as Map;
        final adId = options['adId'] as String? ?? 'ca-app-pub-3940256099942544/6300978111';
        final pos = options['position'] as String? ?? 'top';

        setState(() {
          _bannerPosition = pos.toLowerCase().contains('bottom') ? 'bottom' : 'top';
        });
        _loadBannerAd(adId);
      },
    );

    controller.addJavaScriptHandler(
      handlerName: 'hideBannerAd',
      callback: (args) {
        _hideBannerAd();
      },
    );

    // 3. Interstitial Ad Handlers
    controller.addJavaScriptHandler(
      handlerName: 'prepareInterstitialAd',
      callback: (args) {
        final adId = args.isNotEmpty ? (args[0] as Map)['adId'] as String? : null;
        _loadInterstitialAd(adId ?? 'ca-app-pub-3940256099942544/1033173712');
      },
    );

    controller.addJavaScriptHandler(
      handlerName: 'showInterstitialAd',
      callback: (args) {
        _showInterstitialAd();
      },
    );

    // 4. Rewarded Ad Handlers
    controller.addJavaScriptHandler(
      handlerName: 'prepareRewardVideoAd',
      callback: (args) {
        final adId = args.isNotEmpty ? (args[0] as Map)['adId'] as String? : null;
        _loadRewardedAd(adId ?? 'ca-app-pub-3940256099942544/5224354917');
      },
    );

    controller.addJavaScriptHandler(
      handlerName: 'showRewardVideoAd',
      callback: (args) async {
        return await _showRewardedAd();
      },
    );
  }

  // Capacitor Mock injection script
  static const String _capacitorMockScript = '''
    (function() {
      if (window.Capacitor) return;
      
      console.log("Flutter InAppWebView: Injecting Capacitor Compatibility Layer...");
      
      window.Capacitor = {
        isNativePlatform: function() { return true; },
        getPlatform: function() { return "android"; },
        isPluginAvailable: function(name) { return true; },
        Plugins: {
          GoogleAuth: {
            initialize: function(options) {
              console.log("GoogleAuth.initialize placeholder called");
              return Promise.resolve();
            },
            signIn: function() {
              return window.flutter_inappwebview.callHandler("googleSignIn");
            },
            signOut: function() {
              return Promise.resolve();
            }
          },
          AdMob: {
            initialize: function(options) {
              console.log("AdMob.initialize placeholder called");
              return Promise.resolve();
            },
            showBanner: function(options) {
              return window.flutter_inappwebview.callHandler("showBannerAd", options);
            },
            hideBanner: function() {
              return window.flutter_inappwebview.callHandler("hideBannerAd");
            },
            prepareInterstitial: function(options) {
              return window.flutter_inappwebview.callHandler("prepareInterstitialAd", options);
            },
            showInterstitial: function() {
              return window.flutter_inappwebview.callHandler("showInterstitialAd");
            },
            prepareRewardVideoAd: function(options) {
              return window.flutter_inappwebview.callHandler("prepareRewardVideoAd", options);
            },
            showRewardVideoAd: function() {
              return window.flutter_inappwebview.callHandler("showRewardVideoAd").then(function(rewarded) {
                if (rewarded) {
                  return { type: "rewarded", amount: 1 };
                }
                return null;
              });
            }
          }
        }
      };

      // Dispatch DOMContentLoaded event to trigger Capacitor ready listeners in Next.js
      const event = new Event('DOMContentLoaded');
      document.dispatchEvent(event);
    })();
  ''';

  @override
  Widget build(BuildContext context) {
    return PopScope(
      canPop: false,
      onPopInvokedWithResult: (didPop, result) async {
        if (didPop) return;
        final NavigatorState navigator = Navigator.of(context);
        if (_webViewController != null && await _webViewController!.canGoBack()) {
          _webViewController!.goBack();
        } else {
          // ignore: use_build_context_synchronously
          final bool shouldExit = await showDialog<bool>(
            // ignore: use_build_context_synchronously
            context: context,
            builder: (context) => AlertDialog(
              title: const Text('Exit App?'),
              content: const Text('Are you sure you want to close Nextsem Academy?'),
              actions: [
                TextButton(
                  onPressed: () => Navigator.of(context).pop(false),
                  child: const Text('Cancel'),
                ),
                TextButton(
                  onPressed: () => Navigator.of(context).pop(true),
                  child: const Text('Exit', style: TextStyle(color: Colors.red)),
                ),
              ],
            ),
          ) ?? false;
          
          if (shouldExit) {
            navigator.pop();
          }
        }
      },
      child: Scaffold(
        body: SafeArea(
          child: Column(
            children: [
              if (_isBannerLoaded && _bannerAd != null && _bannerPosition == 'top')
                Container(
                  alignment: Alignment.center,
                  width: _bannerAd!.size.width.toDouble(),
                  height: _bannerAd!.size.height.toDouble(),
                  child: AdWidget(ad: _bannerAd!),
                ),
              Expanded(
                child: Stack(
                  children: [
                    InAppWebView(
                      initialUrlRequest: URLRequest(
                        url: WebUri('https://nextsem-staging.web.app/'),
                      ),
                      initialUserScripts: UnmodifiableListView<UserScript>([
                        UserScript(
                          source: _capacitorMockScript,
                          injectionTime: UserScriptInjectionTime.AT_DOCUMENT_START,
                        ),
                      ]),
                      initialSettings: InAppWebViewSettings(
                        useShouldOverrideUrlLoading: true,
                        mediaPlaybackRequiresUserGesture: false,
                        javaScriptEnabled: true,
                        domStorageEnabled: true,
                        allowFileAccessFromFileURLs: true,
                        allowUniversalAccessFromFileURLs: true,
                        useHybridComposition: true,
                      ),
                      pullToRefreshController: _pullToRefreshController,
                      onWebViewCreated: (controller) {
                        _webViewController = controller;
                        _registerJavaScriptHandlers(controller);
                      },
                      onLoadStart: (controller, url) {
                        setState(() {
                          _isLoading = true;
                        });
                        controller.evaluateJavascript(source: _capacitorMockScript);
                      },
                      onLoadStop: (controller, url) async {
                        _pullToRefreshController?.endRefreshing();
                        setState(() {
                          _isLoading = false;
                        });
                        controller.evaluateJavascript(source: _capacitorMockScript);
                      },
                      onReceivedError: (controller, request, error) {
                        _pullToRefreshController?.endRefreshing();
                      },
                      onProgressChanged: (controller, progress) {
                        if (progress == 100) {
                          _pullToRefreshController?.endRefreshing();
                        }
                        setState(() {
                          _progress = progress / 100;
                          if (progress == 100) {
                            _isLoading = false;
                          }
                        });
                      },
                    ),
                    if (_isLoading)
                      Positioned(
                        top: 0,
                        left: 0,
                        right: 0,
                        child: LinearProgressIndicator(
                          value: _progress > 0 ? _progress : null,
                          color: const Color(0xFF39FF14),
                          backgroundColor: Colors.transparent,
                        ),
                      ),
                  ],
                ),
              ),
              if (_isBannerLoaded && _bannerAd != null && _bannerPosition == 'bottom')
                Container(
                  alignment: Alignment.center,
                  width: _bannerAd!.size.width.toDouble(),
                  height: _bannerAd!.size.height.toDouble(),
                  child: AdWidget(ad: _bannerAd!),
                ),
            ],
          ),
        ),
      ),
    );
  }
}
