// ✅ Q1.
// When you developed two React Native apps from scratch, what folder structure and architecture (e.g., MVC, MVVM, clean architecture) did you follow?

// Answer: When developing apps from scratch, I followed a modular folder structure and a Clean Architecture approach:

// Folder Structure:
// /src
//   /components
//   /screens
//   /services
//   /navigations
//   /redux (or context/state management)
//   /utils
//   /assets (images, fonts)
// Architecture Style:

// UI Layer (Screens + Components)

// Domain Layer (Business Logic, Services, API Calls)

// Data Layer (LocalStorage, Network APIs)

// 🔹This structure made the app scalable, easy to maintain, and allowed faster onboarding of new developers.

// ✅ Q2.
// How do you handle navigation when building apps from scratch? Which library do you prefer, and why (e.g., react-navigation, react-native-navigation) ?

// Answer: I prefer using react-navigation for handling navigation in React Native apps.
// Reasons:

// It is community-driven, well-documented, and easy to integrate.

// It supports stack, tab, drawer, and modal navigations out-of-the-box.

// It provides deep linking and dynamic routing support.

// Easier to customize headers, transitions, and gestures compared to native navigation libraries.

// 🔹For complex apps, I also combine StackNavigator + BottomTabNavigator for better UX.

// ✅ Q3.
// What challenges did you face when using WebView inside React Native, and how did you handle things like file uploads or deep linking within WebView?

// Answer: Challenges I faced with WebView:

// File Uploads: On Android, older versions had issues supporting file input fields.
// ➔ Solution: I used react-native-webview latest version and configured androidHardwareAccelerationDisabled={false} and used native modules if needed.

// Deep Linking Inside WebView: External links sometimes needed to open outside of the app.
// ➔ Solution: Handled URL change events with onNavigationStateChange and opened external links using Linking.openURL.

// Performance Issues: WebView can be heavy.
// ➔ Solution: I minimized unnecessary rerenders by memoizing the WebView and optimizing injected JS if needed.

// 🔹Result: Smooth WebView experience across both Android and iOS.

// ✅ Q4.
// Can you explain a situation where you resolved a critical production bug that was affecting both Android and iOS users?

// Answer: In one project, after a new release, users started reporting random app crashes when opening the app after a push notification.

// I investigated using Firebase Crashlytics and found that it was due to an unhandled null value from the notification payload.

// On both platforms, if the notification data was incomplete, it led to a crash in the navigation flow.

// Solution: I implemented stricter validation and fallback values when handling notification payloads.

// 🔹Impact:
// This fix reduced the crash-free sessions metric from 93% to 99.5%, significantly improving app stability and user trust.

// =======================

// ✅ Q5.
// What practices do you follow to reduce crash rates and improve app stability in production?

// Answer:
// To improve app stability:

// I use TypeScript or PropTypes for strong type checking.

// Validate API responses and third-party SDK data properly.

// Use try-catch blocks especially around asynchronous operations (like network calls, storage).

// Add error boundaries in React components to catch unexpected rendering issues.

// Monitor production crashes actively using Firebase Crashlytics or Sentry and fix top issues in every sprint.

// 🔹This proactive approach significantly reduces crash rates after releases.

// ✅ Q6.
// Which tools do you use to track and debug issues after release (e.g., Firebase Crashlytics, Sentry)?

// Answer:
// I primarily use:

// Firebase Crashlytics for tracking runtime crashes, non-fatal errors, and trends.

// Sentry if I need deeper logging like breadcrumbs, Redux state history, and user session replay.

// Google Play Console & App Store Connect crash reports for platform-specific issues.

// 🔹Crash analytics help prioritize and fix real-world issues faster.

// ✅ Q7.
// How did you integrate and configure Firebase Cloud Messaging (FCM) for both Android and iOS platforms?

// Answer:
// Steps I followed:

// Set up Firebase Project and added both Android and iOS apps.

// Installed @react-native-firebase/messaging library.

// Configured Android AndroidManifest.xml for permissions and services.

// Configured iOS by enabling Push Notifications and Background Modes in Xcode.

// Handled foreground, background, and quit state notifications using FCM listeners.

// For iOS, handled APNs tokens linking with FCM internally.

// 🔹This ensured smooth push notification delivery across both platforms.

// ✅ Q8.
// How do you handle notifications differently when the app is in the foreground vs background vs killed state?

// Answer:

// Foreground: Show an in-app alert or banner manually because FCM does not show system notifications when the app is open.

// Background: Let the OS handle showing system notifications automatically.

// Killed State: Use setBackgroundMessageHandler in Firebase Messaging to process data-only messages and deep-link the user properly after app open.

// 🔹This creates a consistent and seamless user experience across all states.

// ✅ Q9.
// How would you test push notifications before releasing a new app update?

// Answer:

// I use Firebase Console to send test push notifications to specific device tokens.

// Validate:

// Notifications when app is open, minimized, or closed.

// Deep linking functionality from notifications.

// For iOS, also test with production APNs certificates on TestFlight builds.

// For Android, test on different Android API levels (especially 8+ with background restrictions).

// 🔹This helps avoid surprises after going live.


// =================
// ✅ Q10.
// How did you configure and integrate Facebook SDK, Google APIs, and Instagram APIs into your React Native app?

// Answer:
// For social SDK integration:

// Used libraries like react-native-fbsdk-next for Facebook, expo-auth-session or react-native-google-signin for Google.

// For Instagram, used OAuth 2.0 flow manually via WebView or direct API call.

// Configured native Android (strings.xml, AndroidManifest.xml) and iOS (Info.plist, URL schemes) settings.

// Handled authentication token securely and integrated with app backend if needed for login/registration.

// 🔹This provided seamless social login and improved user acquisition.

// ✅ Q11.
// What challenges did you face while integrating social media authentication? How did you overcome them?

// Answer:
// Challenges faced:

// iOS App Transport Security (ATS) issues while integrating OAuth flows.
// ➔ Solution: Added necessary exceptions in Info.plist.

// Token Expiry/Refresh: Facebook and Instagram tokens expire quickly.
// ➔ Solution: Implemented token refresh mechanisms and fallback re-login if needed.

// Different behavior on Android vs iOS:
// ➔ Solution: Used platform-specific handling where required, especially for URL schemes and intents.

// 🔹This ensured a smooth and secure social login experience on both platforms.

// ✅ Q12.
// How do you handle app versioning and feature flags when pushing frequent updates via CI/CD?

// Answer:

// Versioning:

// Use semantic versioning (major.minor.patch).

// Automate version bumps using scripts during CI builds.

// Feature Flags:

// Use remote config (e.g., Firebase Remote Config) or build-time environment flags.

// Enable or disable features without needing a full app update.

// 🔹This helps in gradual rollout, A/B testing, and safe deployments without affecting users.

// ✅ Q13.
// When developing cross-platform apps, how do you ensure UI consistency between Android and iOS?

// Answer:

// Follow platform-neutral design principles (material + human interface blend).

// Use cross-platform compatible components (e.g., TouchableOpacity, Pressable) unless native feeling is needed.

// Abstract platform-specific behavior using Platform.OS and custom hooks.

// Test designs on both platforms early to avoid last-minute surprises.

// 🔹This helps in delivering a native-like experience on both platforms while maintaining a single codebase.

// ✅ Q14.
// How do you manage state across screens in large apps? What state management approach do you use?

// Answer:
// Depending on app size:

// Small apps: Context API + useReducer pattern.

// Medium to Large apps: Redux with middleware (Redux Saga or Redux Toolkit).

// For local component state: useState, useReducer.

// I also optimize state updates carefully to avoid unnecessary re-renders and improve performance.

// 🔹Choosing the right state management approach based on app complexity is key for maintainability.

// =====================
// ✅ Q15.
// How do you manage secrets (like API keys, OAuth client IDs) securely inside a React Native project?

// Answer:

// I never hardcode secrets directly into the source code.

// I use environment variables with libraries like react-native-config.

// For build-time security, I configure secrets in CI/CD pipelines (CircleCI) and inject them at build time.

// On Android, sensitive values can also be stored inside gradle.properties and accessed securely.

// On iOS, I use .xcconfig files for injecting secrets.

// Additionally, if needed, I encrypt API keys and manage critical tokens on backend servers rather than client-side apps.

// 🔹This ensures that even if the APK/IPA is decompiled, sensitive data remains protected.

// ✅ Q16.
// Explain your strategy for environment-based configuration (dev, staging, prod) in a React Native app.

// Answer:
// My strategy:

// I use libraries like react-native-config to manage environment variables.

// Define different .env files (.env.dev, .env.staging, .env.production) for API URLs, feature flags, third-party keys.

// Configure build scripts to pick the correct .env file during builds.

// In CI/CD (CircleCI), inject environment-specific variables during build jobs.

// At runtime, app automatically picks the correct configuration based on the build.

// 🔹This allows safer testing and deployment for different environments without code changes.

// ✅ Q17.
// If you were asked to migrate an old React Native app to the latest version, what would be your step-by-step approach?

// Answer:
// My approach:

// Review official React Native upgrade guides for breaking changes.

// Use react-native upgrade CLI cautiously — do a dry run first.

// Migrate dependencies (third-party libraries) — check if they are compatible with the new RN version.

// Upgrade Android Gradle Plugin and Xcode settings if needed.

// Fix native code breaking changes (if any) for both iOS and Android.

// Test thoroughly — both unit tests and manual testing.

// Use Detox or Appium for automated E2E testing if possible.

// Release a beta build to internal testers before public release.

// 🔹Migrating step-by-step helps reduce risks and minimizes downtime.

// ✅ Q18.
// Have you worked with dynamic linking or deep linking? How do you handle opening specific screens from notification clicks?

// Answer:
// Yes, I’ve implemented deep linking:

// Used React Navigation deep linking support and Dynamic Links (Firebase) when needed.

// Registered custom URL schemes (myapp://screen) and universal links for iOS.

// On notification click:

// Extract the deep link or parameters from the notification payload.

// Navigate the user to the correct screen using navigation actions (navigate, push) inside the notification handler.

// Handled app states: whether app is killed, in background, or active.

// 🔹This creates seamless navigation experiences directly from external triggers like notifications or emails.

// ✅ Q19.
// What is your understanding of React Native New Architecture (Turbo Modules, JSI, Fabric) and when should you consider migrating to it?

// Answer:
// React Native New Architecture introduces:

// JSI (JavaScript Interface): Direct C++ bridge between JS and native modules, eliminating the old serialized JSON bridge.

// Turbo Modules: Faster and lazy loading of native modules, improving startup time.

// Fabric Renderer: A new UI rendering engine, more efficient than the legacy one.

// When to migrate:

// If your app is very large, performance-critical (e.g., complex animations, high FPS needed).

// If you're developing custom native modules and need better speed.

// If you want better concurrent rendering with React 18+ (benefiting from concurrent features).

// 🔹However, migration should be planned carefully because it touches both JS and native code heavily.