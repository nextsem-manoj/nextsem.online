plugins {
    id("com.android.application")
    // The Flutter Gradle Plugin must be applied after the Android and Kotlin Gradle plugins.
    id("dev.flutter.flutter-gradle-plugin")
}

android {
    namespace = "online.nextsem.app"
    compileSdk = flutter.compileSdkVersion
    ndkVersion = flutter.ndkVersion

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    signingConfigs {
        create("release") {
            val customKeystore = System.getenv("KEYSTORE_PATH")
            storeFile = if (customKeystore != null && file(customKeystore).exists()) file(customKeystore) else file("nextsem-release-key.keystore")
            storePassword = System.getenv("STORE_PASSWORD") ?: "nextsem123"
            keyAlias = System.getenv("KEY_ALIAS") ?: "nextsem-alias"
            keyPassword = System.getenv("KEY_PASSWORD") ?: "nextsem123"
        }
    }

    defaultConfig {
        applicationId = "online.nextsem.app"
        minSdk = flutter.minSdkVersion
        targetSdk = flutter.targetSdkVersion
        versionCode = 36
        versionName = "3.6.0"

    }

    buildTypes {
        release {
            signingConfig = signingConfigs.getByName("release")
        }
    }
}

kotlin {
    compilerOptions {
        jvmTarget = org.jetbrains.kotlin.gradle.dsl.JvmTarget.JVM_17
    }
}

flutter {
    source = "../.."
}
