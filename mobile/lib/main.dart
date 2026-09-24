import 'package:flutter/material.dart';
import 'package:nextsem_mobile/services/ad_service.dart';
import 'package:nextsem_mobile/screens/login_screen.dart';
import 'package:nextsem_mobile/screens/course_screen.dart';
import 'package:nextsem_mobile/state.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  
  // Initialize Google Mobile Ads SDK & preload all units
  await AdService.instance.initialize();

  final state = GamificationState();
  // Wait a short moment to load preferences
  await state.loadFromPrefs();

  runApp(MyApp(state: state));
}

class MyApp extends StatefulWidget {
  final GamificationState state;

  const MyApp({super.key, required this.state});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> with WidgetsBindingObserver {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    // Show App Open Ad after UI is initialized
    WidgetsBinding.instance.addPostFrameCallback((_) {
      AdService.instance.showAppOpenAdIfAvailable();
    });
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) {
      AdService.instance.showAppOpenAdIfAvailable();
    }
  }

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
          primary: Color(0xFF39FF14), // Glowing neon green
          surface: Color(0xFF0C1328),
        ),
      ),
      home: widget.state.isAuthenticated
          ? CourseScreen(state: widget.state)
          : LoginScreen(state: widget.state),
    );
  }
}
