import 'package:flutter/material.dart';
import 'package:google_mobile_ads/google_mobile_ads.dart';

class AdService {
  static final AdService instance = AdService._internal();
  AdService._internal();

  // Official Production Google AdMob Unit IDs
  static const String bannerUnitId = 'ca-app-pub-5947565211927754/4565552616';
  static const String interstitialUnitId = 'ca-app-pub-5947565211927754/5893147977';
  static const String rewardedUnitId = 'ca-app-pub-5947565211927754/6967837750';
  static const String rewardedInterstitialUnitId = 'ca-app-pub-5947565211927754/3747294963';
  static const String appOpenUnitId = 'ca-app-pub-5947565211927754/4753305205';

  InterstitialAd? _interstitialAd;
  bool _isInterstitialLoading = false;

  RewardedAd? _rewardedAd;
  bool _isRewardedLoading = false;

  RewardedInterstitialAd? _rewardedInterstitialAd;
  bool _isRewardedInterstitialLoading = false;

  AppOpenAd? _appOpenAd;
  bool _isAppOpenLoading = false;

  int _completedLessonCount = 0;

  Future<void> initialize() async {
    try {
      await MobileAds.instance.initialize();
      loadAppOpenAd();
      loadInterstitialAd();
      loadRewardedAd();
      loadRewardedInterstitialAd();
    } catch (e) {
      debugPrint("Google Mobile Ads initialization failed: $e");
    }
  }

  // ==================== LESSON PROGRESSION INTERSTITIAL TRIGGER ====================
  /// Called when a lesson is solved/finished. Shows full screen interstitial ad every 2 lessons.
  void onLessonCompleted({VoidCallback? onContinue}) {
    _completedLessonCount++;
    if (_completedLessonCount % 2 == 0) {
      debugPrint("AdService: 2 lessons reached ($_completedLessonCount). Showing Interstitial Ad.");
      showInterstitialAd(onAdClosed: onContinue);
    } else {
      debugPrint("AdService: Lesson $_completedLessonCount completed. Next ad in 1 lesson.");
      if (onContinue != null) onContinue();
    }
  }

  // ==================== APP OPEN AD ====================
  void loadAppOpenAd() {
    if (_isAppOpenLoading || _appOpenAd != null) return;
    _isAppOpenLoading = true;

    AppOpenAd.load(
      adUnitId: appOpenUnitId,
      request: const AdRequest(),
      adLoadCallback: AppOpenAdLoadCallback(
        onAdLoaded: (ad) {
          debugPrint("AdService: App Open Ad loaded successfully.");
          _appOpenAd = ad;
          _isAppOpenLoading = false;
        },
        onAdFailedToLoad: (error) {
          debugPrint("AdService: App Open Ad failed to load: $error");
          _appOpenAd = null;
          _isAppOpenLoading = false;
        },
      ),
    );
  }

  void showAppOpenAdIfAvailable({VoidCallback? onAdClosed}) {
    if (_appOpenAd != null) {
      _appOpenAd!.fullScreenContentCallback = FullScreenContentCallback(
        onAdDismissedFullScreenContent: (ad) {
          ad.dispose();
          _appOpenAd = null;
          loadAppOpenAd(); // Preload next
          if (onAdClosed != null) onAdClosed();
        },
        onAdFailedToShowFullScreenContent: (ad, error) {
          debugPrint("AdService: Failed to show App Open ad: $error");
          ad.dispose();
          _appOpenAd = null;
          loadAppOpenAd();
          if (onAdClosed != null) onAdClosed();
        },
      );
      _appOpenAd!.show();
    } else {
      loadAppOpenAd();
      if (onAdClosed != null) onAdClosed();
    }
  }

  // ==================== INTERSTITIAL AD ====================
  void loadInterstitialAd() {
    if (_isInterstitialLoading || _interstitialAd != null) return;
    _isInterstitialLoading = true;

    InterstitialAd.load(
      adUnitId: interstitialUnitId,
      request: const AdRequest(),
      adLoadCallback: InterstitialAdLoadCallback(
        onAdLoaded: (ad) {
          debugPrint("AdService: Interstitial Ad loaded successfully.");
          _interstitialAd = ad;
          _isInterstitialLoading = false;
        },
        onAdFailedToLoad: (error) {
          debugPrint("AdService: Interstitial Ad failed to load: $error");
          _interstitialAd = null;
          _isInterstitialLoading = false;
        },
      ),
    );
  }

  void showInterstitialAd({VoidCallback? onAdClosed}) {
    if (_interstitialAd != null) {
      _interstitialAd!.fullScreenContentCallback = FullScreenContentCallback(
        onAdDismissedFullScreenContent: (ad) {
          ad.dispose();
          _interstitialAd = null;
          loadInterstitialAd(); // Preload next
          if (onAdClosed != null) onAdClosed();
        },
        onAdFailedToShowFullScreenContent: (ad, error) {
          debugPrint("AdService: Failed to show interstitial: $error");
          ad.dispose();
          _interstitialAd = null;
          loadInterstitialAd();
          if (onAdClosed != null) onAdClosed();
        },
      );
      _interstitialAd!.show();
    } else {
      loadInterstitialAd();
      if (onAdClosed != null) onAdClosed();
    }
  }

  // ==================== REWARDED INTERSTITIAL AD ====================
  void loadRewardedInterstitialAd() {
    if (_isRewardedInterstitialLoading || _rewardedInterstitialAd != null) return;
    _isRewardedInterstitialLoading = true;

    RewardedInterstitialAd.load(
      adUnitId: rewardedInterstitialUnitId,
      request: const AdRequest(),
      rewardedInterstitialAdLoadCallback: RewardedInterstitialAdLoadCallback(
        onAdLoaded: (ad) {
          debugPrint("AdService: Rewarded Interstitial Ad loaded successfully.");
          _rewardedInterstitialAd = ad;
          _isRewardedInterstitialLoading = false;
        },
        onAdFailedToLoad: (error) {
          debugPrint("AdService: Rewarded Interstitial Ad failed to load: $error");
          _rewardedInterstitialAd = null;
          _isRewardedInterstitialLoading = false;
        },
      ),
    );
  }

  void showRewardedInterstitialAd({
    required VoidCallback onUserEarnedReward,
    VoidCallback? onAdClosed,
  }) {
    if (_rewardedInterstitialAd != null) {
      _rewardedInterstitialAd!.fullScreenContentCallback = FullScreenContentCallback(
        onAdDismissedFullScreenContent: (ad) {
          ad.dispose();
          _rewardedInterstitialAd = null;
          loadRewardedInterstitialAd();
          if (onAdClosed != null) onAdClosed();
        },
        onAdFailedToShowFullScreenContent: (ad, error) {
          debugPrint("AdService: Failed to show rewarded interstitial ad: $error");
          ad.dispose();
          _rewardedInterstitialAd = null;
          loadRewardedInterstitialAd();
          if (onAdClosed != null) onAdClosed();
        },
      );

      _rewardedInterstitialAd!.show(
        onUserEarnedReward: (AdWithoutView ad, RewardItem reward) {
          debugPrint("AdService: User earned reward (Interstitial): ${reward.amount} ${reward.type}");
          onUserEarnedReward();
        },
      );
    } else {
      loadRewardedInterstitialAd();
      if (onAdClosed != null) onAdClosed();
    }
  }

  // ==================== REWARDED AD ====================
  void loadRewardedAd() {
    if (_isRewardedLoading || _rewardedAd != null) return;
    _isRewardedLoading = true;

    RewardedAd.load(
      adUnitId: rewardedUnitId,
      request: const AdRequest(),
      rewardedAdLoadCallback: RewardedAdLoadCallback(
        onAdLoaded: (ad) {
          debugPrint("AdService: Rewarded Ad loaded successfully.");
          _rewardedAd = ad;
          _isRewardedLoading = false;
        },
        onAdFailedToLoad: (error) {
          debugPrint("AdService: Rewarded Ad failed to load: $error");
          _rewardedAd = null;
          _isRewardedLoading = false;
        },
      ),
    );
  }

  void showRewardedAd({
    required VoidCallback onUserEarnedReward,
    VoidCallback? onAdFailed,
  }) {
    if (_rewardedAd != null) {
      _rewardedAd!.fullScreenContentCallback = FullScreenContentCallback(
        onAdDismissedFullScreenContent: (ad) {
          ad.dispose();
          _rewardedAd = null;
          loadRewardedAd(); // Preload next
        },
        onAdFailedToShowFullScreenContent: (ad, error) {
          debugPrint("AdService: Failed to show rewarded ad: $error");
          ad.dispose();
          _rewardedAd = null;
          loadRewardedAd();
          if (onAdFailed != null) onAdFailed();
        },
      );

      _rewardedAd!.show(
        onUserEarnedReward: (AdWithoutView ad, RewardItem reward) {
          debugPrint("AdService: User earned reward: ${reward.amount} ${reward.type}");
          onUserEarnedReward();
        },
      );
    } else {
      loadRewardedAd();
      if (onAdFailed != null) onAdFailed();
    }
  }
}

/// Dynamic, responsive AdMob banner widget
class AdBannerWidget extends StatefulWidget {
  final EdgeInsetsGeometry padding;

  const AdBannerWidget({
    super.key,
    this.padding = const EdgeInsets.symmetric(vertical: 6.0),
  });

  @override
  State<AdBannerWidget> createState() => _AdBannerWidgetState();
}

class _AdBannerWidgetState extends State<AdBannerWidget> {
  BannerAd? _bannerAd;
  bool _isBannerLoaded = false;

  @override
  void initState() {
    super.initState();
    _loadBanner();
  }

  void _loadBanner() {
    _bannerAd = BannerAd(
      adUnitId: AdService.bannerUnitId,
      size: AdSize.banner,
      request: const AdRequest(),
      listener: BannerAdListener(
        onAdLoaded: (_) {
          if (mounted) {
            setState(() {
              _isBannerLoaded = true;
            });
          }
        },
        onAdFailedToLoad: (ad, error) {
          debugPrint("AdBannerWidget: Banner ad failed to load: $error");
          ad.dispose();
        },
      ),
    )..load();
  }

  @override
  void dispose() {
    _bannerAd?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (_isBannerLoaded && _bannerAd != null) {
      return Padding(
        padding: widget.padding,
        child: Center(
          child: SizedBox(
            width: _bannerAd!.size.width.toDouble(),
            height: _bannerAd!.size.height.toDouble(),
            child: AdWidget(ad: _bannerAd!),
          ),
        ),
      );
    }
    return const SizedBox.shrink();
  }
}
