# Add project specific ProGuard rules here.

# ---- Capacitor Core ----
-keep class com.getcapacitor.** { *; }
-keep interface com.getcapacitor.** { *; }
-keep @com.getcapacitor.annotation.CapacitorPlugin class * { *; }

# ---- WebView JavaScript Interface ----
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

# ---- Google Auth Plugin ----
-keep class com.codetrixstudio.** { *; }

# AndroidX / AppCompat will be optimized and shrunk automatically.

# ---- Keep source file names for crash reports ----
-keepattributes SourceFile,LineNumberTable
