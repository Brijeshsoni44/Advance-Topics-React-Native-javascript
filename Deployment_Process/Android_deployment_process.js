// 📱 React Native Android App Deployment Process (Step-by-Step)
// Deploying a React Native Android App involves building the app, signing the APK/AAB, and publishing it on the Google Play Store. Below is a detailed step-by-step process along with common interview questions you may face.

// 🔹 Prerequisites for Android Deployment
// Before deploying an Android app, ensure that you have:

// ✅ Android Studio installed (latest version).
// ✅ Java JDK and Android SDK set up.
// ✅ Google Play Developer Account (to publish the app).
// ✅ A physical Android device or emulator for testing.
// ✅ The latest React Native CLI and dependencies installed.

// 🚀 Step-by-Step Android Deployment Process
// 🔹 Step 1: Prepare the React Native Project
// Update Dependencies
// Run the following commands to install/update project dependencies:
// npm install       # or yarn install
// cd android && ./gradlew clean && cd ..
// Configure AndroidManifest.xml
// Go to android/app/src/main/AndroidManifest.xml and ensure it contains the required permissions (e.g., Internet, Camera).
// Add the correct package name (com.company.myapp).
// 🔹 Step 2: Configure Signing & Keystore
// Generate a Keystore File (for signing the app)
// Open a terminal and run:
// keytool -genkeypair -v -keystore my-release-key.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias my-key-alias
// This will generate a keystore file (my-release-key.keystore).
// Move the Keystore File
// Move my-release-key.keystore to:
// android/app/
// Configure gradle.properties
// Add the following lines to android/gradle.properties:

// properties

// MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
// MYAPP_RELEASE_KEY_ALIAS=my-key-alias
// MYAPP_RELEASE_STORE_PASSWORD=your-keystore-password
// MYAPP_RELEASE_KEY_PASSWORD=your-key-password
// Update android/app/build.gradle
// Inside signingConfigs, add:

// gradle

// signingConfigs {
//     release {
//         storeFile file(MYAPP_RELEASE_STORE_FILE)
//         storePassword MYAPP_RELEASE_STORE_PASSWORD
//         keyAlias MYAPP_RELEASE_KEY_ALIAS
//         keyPassword MYAPP_RELEASE_KEY_PASSWORD
//     }
// }

// buildTypes {
//     release {
//         signingConfig signingConfigs.release
//     }
// }
// 🔹 Step 3: Build the Release APK/AAB
// Generate a Release Build

// cd android
// ./gradlew assembleRelease    # To generate an APK
// ./gradlew bundleRelease      # To generate an AAB (recommended for Play Store)
// Find the APK/AAB File

// APK will be generated in:

// android/app/build/outputs/apk/release/app-release.apk
// AAB will be in:
// android/app/build/outputs/bundle/release/app-release.aab
// 🔹 Step 4: Upload to Google Play Store
// Go to Google Play Console (https://play.google.com/console)
// Create a New App
// Click "Create app" → Enter app name, package name, category, and language.
// Upload the AAB File
// Navigate to Production > Create Release.
// Upload the app-release.aab file.
// Complete App Information
// Add screenshots, app description, and privacy policy.
// Submit for Review
// Click "Submit for Review" and wait for approval (usually 24-48 hours).
// 📌 Interview Questions & Answers on Android Deployment
// 1️⃣ Question: What are the key steps to deploy a React Native app to Android?
// Answer:
// "The deployment process includes:
// 1️⃣ Updating dependencies and setting up the project (AndroidManifest.xml).
// 2️⃣ Creating a keystore file for signing the app.
// 3️⃣ Configuring Gradle properties for release signing.
// 4️⃣ Building the release APK or AAB (./gradlew assembleRelease or ./gradlew bundleRelease).
// 5️⃣ Uploading the AAB file to the Google Play Store and submitting the app for review."

// 2️⃣ Question: What is the difference between APK and AAB?
// Answer:
// "An APK (Android Package) is a complete app package, whereas an AAB (Android App Bundle) is an optimized package that contains different APKs for different device configurations.
// Google Play prefers AAB because it reduces app size by delivering only the necessary resources for a user's device. APK is used for direct installations, while AAB is used for Play Store distribution."

// 3️⃣ Question: Why do we need a keystore file, and how do you generate it?
// Answer:
// *"A keystore file is required for code signing, which ensures app integrity and security. It is necessary to generate a release build before uploading to the Play Store.
// To generate a keystore file, use:

// sh
// Copy
// Edit
// keytool -genkeypair -v -keystore my-release-key.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias my-key-alias
// This file is then used in gradle.properties to sign the APK."*

// 4️⃣ Question: What are common issues faced in Android deployment, and how do you fix them?
// Answer:
// ✅ Build failed due to missing dependencies → Run ./gradlew clean and npm install.
// ✅ Error: Keystore file not found → Ensure the keystore path in gradle.properties is correct.
// ✅ Google Play Console rejects APK → Use AAB instead of APK for Play Store uploads.
// ✅ App crashes in production but not in development → Run adb logcat to debug logs.

// 5️⃣ Question: How do you optimize your React Native Android app before publishing?
// Answer:
// "To optimize the app:
// ✅ Enable Proguard in android/app/proguard-rules.pro to minify code.
// ✅ Use Hermes Engine (enableHermes: true in android/app/build.gradle) for better performance.
// ✅ Optimize images and assets to reduce app size.
// ✅ Use Flipper & Android Studio Profiler to debug memory leaks and improve speed."

// 6️⃣ Question: How do you handle different environments (development, staging, production) in Android builds?
// Answer:
// *"I use react-native-config to manage environment variables like API keys.

// Development build uses a local API (.env.development).
// Production build uses a live API (.env.production).
// Environment variables are injected via build.gradle using dotenv."*
// 📌 Conclusion
// By following these deployment steps and preparing for common interview questions, you will be well-equipped to deploy and troubleshoot Android apps in React Native. 🚀

// Would you like code snippets or help with a specific issue? 🔥



