// 🔹 Best Practices for Automatic Retries
// Use exponential backoff to prevent overwhelming the server.
// Limit retries to 3-5 attempts to avoid infinite loops.
// Retry only when necessary (e.g., network issues, 5xx, 429 errors).
// Respect the Retry-After header for rate-limited requests.
// Log errors after retries fail to provide feedback to users.
// 🔹 Summary
// Method	Pros	Cons
// Fetch API with Manual Retry	Simple, fully customizable	Requires manual implementation
// Axios with Retry Plugin	Easy to use, built-in interceptor support	Requires axios-retry dependency
// React Query	Automatic caching, background sync	Requires React Query setup
// Handle 429 Rate Limit	Prevents exceeding API limits	Works only for APIs with Retry-After
// By implementing automatic retries with exponential backoff, you can improve reliability, reduce failed requests, and enhance the user experience in your React Native applications. 🚀


// 2/2

// Lazy Loading & Code Splitting to load components only when needed.
// explain in details
// ChatGPT said:
// Lazy Loading & Code Splitting in React Native: A Detailed Guide
// 🔹 What is Lazy Loading & Code Splitting?
// Lazy Loading: A technique where components or modules are loaded only when needed instead of at the initial app startup.
// Code Splitting: The process of splitting the JavaScript bundle into smaller chunks so that only the required code is loaded.
// These techniques improve app performance by reducing initial bundle size, decreasing app startup time, and optimizing memory usage.

// 🔹 Why Use Lazy Loading & Code Splitting in React Native?
// ✅ Benefits
// Faster App Startup

// The app loads only the essential components initially.
// Lower Memory Usage

// Prevents unnecessary components from being loaded into memory.
// Reduced Bundle Size

// JavaScript bundle remains small, improving load performance.
// Better User Experience

// Users only download the required components when needed.
// 🔹 How to Implement Lazy Loading in React Native
// In React Native, lazy loading is typically done using React.lazy or dynamic imports.

// 1️⃣ Lazy Loading with React.lazy
// React provides a built-in React.lazy function to load components dynamically.

// 🔹 Syntax
// javascript
// Copy
// Edit
// const LazyComponent = React.lazy(() => import('./LazyComponent'));
// 📝 Example
// javascript
// Copy
// Edit
// import React, { Suspense } from 'react';
// import { View, Text, ActivityIndicator } from 'react-native';

// // Lazy loading the component
// const LazyComponent = React.lazy(() => import('./LazyComponent'));

// const App = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Main Component</Text>

//       {/* Suspense provides a fallback UI while LazyComponent is loading */}
//       <Suspense fallback={<ActivityIndicator size="large" color="blue" />}>
//         <LazyComponent />
//       </Suspense>
//     </View>
//   );
// };

// export default App;
// ✅ How it Works:

// React.lazy(() => import('./LazyComponent')): Loads the LazyComponent only when it is rendered.
// <Suspense>: Displays a loading indicator (ActivityIndicator) until LazyComponent is ready.
// 2️⃣ Lazy Loading Screens in React Navigation
// When using React Navigation, screens can be lazily loaded to improve performance.

// 📝 Example Using React.lazy
// javascript
// Copy
// Edit
// import React, { Suspense } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import { ActivityIndicator } from 'react-native';

// // Lazy load screens
// const HomeScreen = React.lazy(() => import('./screens/HomeScreen'));
// const ProfileScreen = React.lazy(() => import('./screens/ProfileScreen'));

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home">
//           {() => (
//             <Suspense fallback={<ActivityIndicator size="large" color="blue" />}>
//               <HomeScreen />
//             </Suspense>
//           )}
//         </Stack.Screen>
//         <Stack.Screen name="Profile">
//           {() => (
//             <Suspense fallback={<ActivityIndicator size="large" color="blue" />}>
//               <ProfileScreen />
//             </Suspense>
//           )}
//         </Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
// ✅ Benefits:

// The HomeScreen and ProfileScreen won’t load until the user navigates to them.
// <Suspense> ensures a smooth loading experience.
// 3️⃣ Lazy Loading Components with Dynamic Imports
// You can also use dynamic imports to load components conditionally.

// 📝 Example
// javascript
// Copy
// Edit
// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';

// const App = () => {
//   const [Component, setComponent] = useState(null);

//   const loadComponent = async () => {
//     const importedComponent = await import('./LazyComponent');
//     setComponent(() => importedComponent.default);
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Lazy Load Example</Text>
//       <Button title="Load Component" onPress={loadComponent} />

//       {Component ? <Component /> : <Text>Press button to load component</Text>}
//     </View>
//   );
// };

// export default App;
// ✅ How it Works:

// The component is loaded only when the button is pressed, reducing initial load time.
// 🔹 Code Splitting in React Native
// Code splitting involves breaking the JavaScript bundle into smaller chunks, which can be loaded on demand.

// How to Implement Code Splitting?
// Use React.lazy for component-based splitting.
// Split Redux reducers & actions dynamically.
// Use Metro Bundler’s RAM Bundles for splitting.
// 1️⃣ Code Splitting Using Metro Bundler (RAM Bundles)
// Metro is the default bundler in React Native, and it supports RAM Bundles, which split the JS bundle into multiple smaller pieces.

// Enable RAM Bundles in React Native
// Modify metro.config.js:

// javascript
// Copy
// Edit
// module.exports = {
//   transformer: {
//     ramBundle: true, // Enable RAM Bundles
//   },
// };
// ✅ Benefits:

// Splits the JavaScript bundle into smaller chunks.
// Improves app startup performance.
// 2️⃣ Splitting Redux Reducers Dynamically
// Redux reducers can be split and loaded dynamically.

// 📝 Example
// javascript
// Copy
// Edit
// import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//   user: require('./reducers/userReducer').default,
//   products: require('./reducers/productReducer').default,
// });

// export default rootReducer;
// ✅ How it Works:

// The reducers are loaded only when needed, reducing the initial app load.
// 🔹 When to Use Lazy Loading & Code Splitting
// Use Case	Lazy Loading	Code Splitting
// Large components/screens	✅ Yes	✅ Yes
// Reducing startup time	✅ Yes	✅ Yes
// Optimizing memory usage	✅ Yes	✅ Yes
// Loading external libraries	✅ Yes	❌ No
// Splitting Redux reducers	❌ No	✅ Yes
// 🔹 Best Practices
// ✔ Use Suspense to provide a fallback UI while components load.
// ✔ Lazy load large screens and rarely used components.
// ✔ Use Metro Bundler’s RAM Bundles for splitting JavaScript files.
// ✔ Combine lazy loading with caching for better user experience.
// ✔ Do not lazy load critical components that are needed immediately.

// 🔹 Conclusion
// ✅ Lazy Loading helps load components only when needed, reducing initial load time.
// ✅ Code Splitting breaks JavaScript files into smaller chunks, optimizing performance.
// ✅ Combining both techniques improves React Native app performance, memory usage, and user experience. 🚀

// By implementing these techniques, your app will be faster, lighter, and more efficient! 💡







// You said:
// create a native module and integrate to react native just a basic example and its a real life example create for same
// ChatGPT said:
// Creating a Native Module in React Native (New Architecture)
// Let's create a Native Module in React Native using the New Architecture (TurboModule).
// We’ll implement a Battery Level Checker as a real-life example.

// 📌 Step 1: Create a React Native Project
// If you don’t have a project, create one using:

// sh
// Copy
// Edit
// npx react-native init BatteryModuleExample --template react-native-template-typescript
// Navigate to the project:

// sh
// Copy
// Edit
// cd BatteryModuleExample
// Enable the New Architecture:

// sh
// Copy
// Edit
// npx react-native start
// Ensure fabric: true and hermes: true are enabled in android/gradle.properties.

// 📌 Step 2: Create the Native Module (Android)
// 1️⃣ Create a New Native Module in Java/Kotlin
// Navigate to android/app/src/main/java/com/batterymoduleexample and create a file BatteryModule.java:

// 📄 BatteryModule.java

// java
// Copy
// Edit
// package com.batterymoduleexample;

// import android.content.Intent;
// import android.content.IntentFilter;
// import android.os.BatteryManager;
// import android.os.Build;
// import androidx.annotation.NonNull;
// import com.facebook.react.bridge.ReactApplicationContext;
// import com.facebook.react.bridge.ReactContextBaseJavaModule;
// import com.facebook.react.bridge.ReactMethod;
// import com.facebook.react.bridge.Promise;

// public class BatteryModule extends ReactContextBaseJavaModule {

//     BatteryModule(ReactApplicationContext context) {
//         super(context);
//     }

//     @NonNull
//     @Override
//     public String getName() {
//         return "BatteryModule"; // Module name used in JavaScript
//     }

//     @ReactMethod
//     public void getBatteryLevel(Promise promise) {
//         try {
//             IntentFilter intentFilter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);
//             Intent batteryStatus = getReactApplicationContext().registerReceiver(null, intentFilter);

//             int level = 0;
//             int scale = 1;
//             if (batteryStatus != null) {
//                 level = batteryStatus.getIntExtra(BatteryManager.EXTRA_LEVEL, -1);
//                 scale = batteryStatus.getIntExtra(BatteryManager.EXTRA_SCALE, -1);
//             }

//             float batteryLevel = level * 100 / (float) scale;
//             promise.resolve(batteryLevel);
//         } catch (Exception e) {
//             promise.reject("ERROR", "Failed to get battery level");
//         }
//     }
// }
// 2️⃣ Register the Module in the Package
// Create a new file BatteryPackage.java in the same directory:

// 📄 BatteryPackage.java

// java
// Copy
// Edit
// package com.batterymoduleexample;

// import com.facebook.react.ReactPackage;
// import com.facebook.react.bridge.NativeModule;
// import com.facebook.react.bridge.ReactApplicationContext;
// import java.util.ArrayList;
// import java.util.Collections;
// import java.util.List;

// public class BatteryPackage implements ReactPackage {

//     @Override
//     public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
//         List<NativeModule> modules = new ArrayList<>();
//         modules.add(new BatteryModule(reactContext));
//         return modules;
//     }

//     @Override
//     public List<ViewManager<?, ?>> createViewManagers(ReactApplicationContext reactContext) {
//         return Collections.emptyList();
//     }
// }
// 3️⃣ Link the Module in MainApplication.java
// Open android/app/src/main/java/com/batterymoduleexample/MainApplication.java and add:

// java
// Copy
// Edit
// import com.batterymoduleexample.BatteryPackage; // Import the package

// @Override
// protected List<ReactPackage> getPackages() {
//     return Arrays.<ReactPackage>asList(
//         new MainReactPackage(),
//         new BatteryPackage() // Add the package here
//     );
// }
// 📌 Step 3: Use the Native Module in React Native
// Now, let's integrate our native module in JavaScript.

// 📄 BatteryModule.ts

// typescript
// Copy
// Edit
// import { NativeModules } from 'react-native';

// const { BatteryModule } = NativeModules;

// export const getBatteryLevel = async (): Promise<number> => {
//   try {
//     const level = await BatteryModule.getBatteryLevel();
//     return level;
//   } catch (error) {
//     console.error("Battery Level Error:", error);
//     return -1;
//   }
// };
// 📄 App.tsx

// tsx
// Copy
// Edit
// import React, { useState } from "react";
// import { View, Text, Button } from "react-native";
// import { getBatteryLevel } from "./BatteryModule";

// const App = () => {
//   const [batteryLevel, setBatteryLevel] = useState<number | null>(null);

//   const fetchBatteryLevel = async () => {
//     const level = await getBatteryLevel();
//     setBatteryLevel(level);
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text style={{ fontSize: 20 }}>Battery Level: {batteryLevel ?? "Unknown"}%</Text>
//       <Button title="Check Battery Level" onPress={fetchBatteryLevel} />
//     </View>
//   );
// };

// export default App;
// 📌 Step 4: Build & Run the Project
// Run the following command to rebuild the project:

// sh
// Copy
// Edit
// cd android && ./gradlew clean && cd ..
// npx react-native run-android
// ✅ Now, when you press the button, it fetches the battery level from the native module! 🎉

// 📌 Summary
// Step	Description
// Step 1	Create a React Native project
// Step 2	Write the native module in Java (BatteryModule)
// Step 3	Register the module in MainApplication.java
// Step 4	Use the module in React Native with NativeModules
// Step 5	Build and run the project
// This is a real-life example of a Native Module to fetch battery level in React Native using Java. 🚀 Let me know if you need an iOS version too! 📱







// You said:
// provide me file and folder structyure and interview question related to this what kind of question they will ask
// ChatGPT said:
// 📂 File & Folder Structure for Native Module (Battery Level Example)
// Your project structure should look like this:

// pgsql
// Copy
// Edit
// BatteryModuleExample/
// │── android/
// │   ├── app/src/main/java/com/batterymoduleexample/
// │   │   ├── BatteryModule.java  # Native Module
// │   │   ├── BatteryPackage.java # Registering the Module
// │   │   ├── MainApplication.java # Linking the Module
// │   ├── build.gradle
// │   ├── settings.gradle
// │── ios/  # (If you want to create an iOS native module, it goes here)
// │── node_modules/
// │── src/
// │   ├── BatteryModule.ts # React Native Wrapper
// │   ├── App.tsx          # Main React Native App
// │── index.js
// │── package.json
// │── metro.config.js
// │── babel.config.js
// │── tsconfig.json
// │── README.md
// 🔥 Interview Questions Related to Native Modules
// If you're preparing for an interview, here are some potential questions and answers:

// 📌 1. What is a Native Module in React Native?
// 👉 Answer:
// A Native Module is a bridge between React Native's JavaScript code and native platform APIs (Android/iOS). It allows us to use native functionalities (like battery level, camera, Bluetooth, etc.) inside a React Native app.

// 📌 2. Why do we need Native Modules in React Native?
// 👉 Answer:
// React Native doesn’t provide access to all device features by default. Native Modules allow us to:

// Use platform-specific features (e.g., Battery Status, Background Services).
// Improve performance by running native code instead of JavaScript.
// Integrate third-party SDKs that don’t have a React Native wrapper.
// 📌 3. How do you create a Native Module in React Native?
// 👉 Answer:

// Create a Java/Kotlin class that extends ReactContextBaseJavaModule.
// Implement a method and annotate it with @ReactMethod.
// Register the module in a ReactPackage class.
// Add the package to MainApplication.java.
// Use NativeModules in JavaScript to call the native function.
// 📌 4. What is ReactMethod annotation in Native Modules?
// 👉 Answer:

// The @ReactMethod annotation exposes Java/Kotlin functions to React Native's JavaScript code.
// It allows JavaScript to call native methods like getBatteryLevel(), showToast(), etc.
// 📌 5. How does React Native interact with Native Modules?
// 👉 Answer:
// React Native interacts with Native Modules using the Bridge.
// Steps:

// JavaScript calls the Native Module using NativeModules.BatteryModule.getBatteryLevel().
// React Native sends the request to the native side (Java/Kotlin).
// The native function executes and returns a response to JavaScript via Promise.resolve().
// The JavaScript code receives the result and updates the UI.
// 📌 6. How do you handle asynchronous calls in Native Modules?
// 👉 Answer:

// Use Promise in Java/Kotlin to return async results.
// Example in Java:
// java
// Copy
// Edit
// @ReactMethod
// public void getBatteryLevel(Promise promise) {
//     try {
//         int level = 50; // Get battery level from system
//         promise.resolve(level);
//     } catch (Exception e) {
//         promise.reject("ERROR", "Failed to get battery level");
//     }
// }
// JavaScript waits for the Promise to resolve:
// typescript
// Copy
// Edit
// const level = await BatteryModule.getBatteryLevel();
// 📌 7. What is the difference between Native Modules and TurboModules?
// 👉 Answer:

// Feature	Native Modules (Legacy)	TurboModules (New)
// Performance	Slower due to Bridge	Faster (No Bridge)
// Synchronous Calls	No	Yes
// Async Execution	Uses Promise	Uses JSI (JavaScript Interface)
// Memory Usage	More	Less
// 🚀 TurboModules is the new way to write Native Modules using JSI (JavaScript Interface) for better performance.

// 📌 8. How do you test a Native Module?
// 👉 Answer:

// Unit Testing: Use Jest in JavaScript to mock NativeModules.
// typescript
// Copy
// Edit
// import { NativeModules } from 'react-native';

// NativeModules.BatteryModule = {
//   getBatteryLevel: jest.fn(() => Promise.resolve(75)),
// };

// test('fetches battery level', async () => {
//   const level = await NativeModules.BatteryModule.getBatteryLevel();
//   expect(level).toBe(75);
// });
// Manual Testing: Run npx react-native run-android and use a Button to check the battery level.
// 📌 9. How do you handle errors in Native Modules?
// 👉 Answer:

// Use promise.reject() for error handling in Java:
// java
// Copy
// Edit
// promise.reject("ERROR_CODE", "Error message");
// Catch errors in JavaScript:
// typescript
// Copy
// Edit
// try {
//   const level = await BatteryModule.getBatteryLevel();
// } catch (error) {
//   console.error(error);
// }
// 📌 10. How can you optimize Native Modules for performance?
// 👉 Answer:

// Use TurboModules & JSI instead of the old bridge.
// Reduce unnecessary native calls (cache values when possible).
// Use Background Threads for expensive operations.
// Return data efficiently (avoid large object transfers).
// 🎯 Final Thoughts
// If you're applying for a Senior React Native Developer role, make sure you: ✅ Understand how Native Modules work.
// ✅ Can write a Native Module from scratch.
// ✅ Know how to handle async calls & errors.
// ✅ Are familiar with TurboModules & JSI (for future-proofing).

// 🚀 This should give you the confidence to ace your interview!
// Do you need help with the iOS Native Module implementation? 📱🔥







// You said:
// create a both for android and ios
// ChatGPT said:
// I'll create both Android and iOS Native Modules for checking the battery level in React Native using the New Architecture (TurboModules).

// 📂 Project Structure
// pgsql
// Copy
// Edit
// BatteryModuleExample/
// │── android/
// │   ├── app/src/main/java/com/batterymoduleexample/
// │   │   ├── BatteryModule.java  # Android Native Module
// │   │   ├── BatteryPackage.java # Registering the Module
// │   │   ├── MainApplication.java # Linking the Module
// │── ios/
// │   ├── BatteryModule.m  # iOS Native Module (Objective-C)
// │   ├── BatteryModule.h  # iOS Header File
// │   ├── BatteryModule.mm # iOS Implementation (if using Swift)
// │   ├── BatteryModulePackage.swift # Swift Package File
// │── src/
// │   ├── BatteryModule.ts # React Native Wrapper
// │   ├── App.tsx          # Main React Native App
// │── index.js
// │── package.json
// │── tsconfig.json
// │── README.md
// 📌 Step 1: Create Native Module for Android
// 📄 android/app/src/main/java/com/batterymoduleexample/BatteryModule.java

// java
// Copy
// Edit
// package com.batterymoduleexample;

// import android.content.Intent;
// import android.content.IntentFilter;
// import android.os.BatteryManager;
// import androidx.annotation.NonNull;
// import com.facebook.react.bridge.ReactApplicationContext;
// import com.facebook.react.bridge.ReactContextBaseJavaModule;
// import com.facebook.react.bridge.ReactMethod;
// import com.facebook.react.bridge.Promise;

// public class BatteryModule extends ReactContextBaseJavaModule {
    
//     BatteryModule(ReactApplicationContext context) {
//         super(context);
//     }

//     @NonNull
//     @Override
//     public String getName() {
//         return "BatteryModule";
//     }

//     @ReactMethod
//     public void getBatteryLevel(Promise promise) {
//         try {
//             IntentFilter intentFilter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);
//             Intent batteryStatus = getReactApplicationContext().registerReceiver(null, intentFilter);

//             int level = 0;
//             int scale = 1;
//             if (batteryStatus != null) {
//                 level = batteryStatus.getIntExtra(BatteryManager.EXTRA_LEVEL, -1);
//                 scale = batteryStatus.getIntExtra(BatteryManager.EXTRA_SCALE, -1);
//             }

//             float batteryLevel = level * 100 / (float) scale;
//             promise.resolve(batteryLevel);
//         } catch (Exception e) {
//             promise.reject("ERROR", "Failed to get battery level");
//         }
//     }
// }
// 📄 android/app/src/main/java/com/batterymoduleexample/BatteryPackage.java

// java
// Copy
// Edit
// package com.batterymoduleexample;

// import com.facebook.react.ReactPackage;
// import com.facebook.react.bridge.NativeModule;
// import com.facebook.react.bridge.ReactApplicationContext;
// import java.util.ArrayList;
// import java.util.Collections;
// import java.util.List;

// public class BatteryPackage implements ReactPackage {

//     @Override
//     public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
//         List<NativeModule> modules = new ArrayList<>();
//         modules.add(new BatteryModule(reactContext));
//         return modules;
//     }

//     @Override
//     public List<ViewManager<?, ?>> createViewManagers(ReactApplicationContext reactContext) {
//         return Collections.emptyList();
//     }
// }
// 📄 Modify android/app/src/main/java/com/batterymoduleexample/MainApplication.java

// java
// Copy
// Edit
// import com.batterymoduleexample.BatteryPackage; // Import the package

// @Override
// protected List<ReactPackage> getPackages() {
//     return Arrays.<ReactPackage>asList(
//         new MainReactPackage(),
//         new BatteryPackage() // Add the package here
//     );
// }
// 📌 Step 2: Create Native Module for iOS
// 📄 ios/BatteryModule.m (Objective-C)

// objc
// Copy
// Edit
// #import <React/RCTBridgeModule.h>

// @interface RCT_EXTERN_MODULE(BatteryModule, NSObject)
// RCT_EXTERN_METHOD(getBatteryLevel:(RCTPromiseResolveBlock)resolve
//                   rejecter:(RCTPromiseRejectBlock)reject)
// @end
// 📄 ios/BatteryModule.swift (Swift)

// swift
// Copy
// Edit
// import Foundation
// import UIKit

// @objc(BatteryModule)
// class BatteryModule: NSObject {

//   @objc
//   static func requiresMainQueueSetup() -> Bool {
//     return true
//   }

//   @objc
//   func getBatteryLevel(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
//     UIDevice.current.isBatteryMonitoringEnabled = true
//     let batteryLevel = UIDevice.current.batteryLevel * 100

//     if batteryLevel >= 0 {
//       resolve(Int(batteryLevel))
//     } else {
//       reject("ERROR", "Failed to get battery level", nil)
//     }
//   }
// }
// 📄 Modify ios/BatteryModulePackage.swift

// swift
// Copy
// Edit
// import Foundation

// @objc(BatteryModulePackage)
// class BatteryModulePackage: NSObject {
//   @objc static func requiresMainQueueSetup() -> Bool {
//     return false
//   }
// }
// 📌 Step 3: Use the Native Module in React Native
// 📄 src/BatteryModule.ts

// typescript
// Copy
// Edit
// import { NativeModules } from 'react-native';

// const { BatteryModule } = NativeModules;

// export const getBatteryLevel = async (): Promise<number> => {
//   try {
//     const level = await BatteryModule.getBatteryLevel();
//     return level;
//   } catch (error) {
//     console.error("Battery Level Error:", error);
//     return -1;
//   }
// };
// 📄 src/App.tsx

// tsx
// Copy
// Edit
// import React, { useState } from "react";
// import { View, Text, Button } from "react-native";
// import { getBatteryLevel } from "./BatteryModule";

// const App = () => {
//   const [batteryLevel, setBatteryLevel] = useState<number | null>(null);

//   const fetchBatteryLevel = async () => {
//     const level = await getBatteryLevel();
//     setBatteryLevel(level);
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text style={{ fontSize: 20 }}>Battery Level: {batteryLevel ?? "Unknown"}%</Text>
//       <Button title="Check Battery Level" onPress={fetchBatteryLevel} />
//     </View>
//   );
// };

// export default App;
// 📌 Step 4: Build & Run the Project
// 📱 Android
// sh
// Copy
// Edit
// cd android && ./gradlew clean && cd ..
// npx react-native run-android
// 📱 iOS
// sh
// Copy
// Edit
// cd ios
// pod install
// cd ..
// npx react-native run-ios
// ✅ Summary
// Step	Description
// Step 1	Created a Native Module in Java for Android
// Step 2	Created a Native Module in Swift/Objective-C for iOS
// Step 3	Used NativeModules in React Native to call native methods
// Step 4	Built and ran the project on Android & iOS
// 🔥 Interview Questions
// Here are some possible questions they might ask you:

// 1️⃣ What is a Native Module in React Native?
// 2️⃣ How does React Native communicate with Native Modules?
// 3️⃣ How do you return values from a Native Module asynchronously?
// 4️⃣ What is the difference between TurboModules and Native Modules?
// 5️⃣ How do you handle errors in Native Modules?
// 6️⃣ How can we improve the performance of Native Modules?
// 7️⃣ What is the role of RCT_EXTERN_MODULE in iOS Native Modules?
// 8️⃣ What are the advantages of using Swift over Objective-C for iOS Native Modules?
// 9️⃣ How does React Native use the JavaScript Interface (JSI) in TurboModules?
// 🔟 What’s the difference between MainThread and BackgroundThread execution in Native Modules?

// 🚀 Now you have both Android & iOS Native Modules integrated in React Native!
// Let me know if you need further optimizations or explanations! 🔥💡







// You said:
// 1️⃣ What is a Native Module in React Native?
// 2️⃣ How does React Native communicate with Native Modules?
// 3️⃣ How do you return values from a Native Module asynchronously?
// 4️⃣ What is the difference between TurboModules and Native Modules?
// 5️⃣ How do you handle errors in Native Modules?
// 6️⃣ How can we improve the performance of Native Modules?
// 7️⃣ What is the role of RCT_EXTERN_MODULE in iOS Native Modules?
// 8️⃣ What are the advantages of using Swift over Objective-C for iOS Native Modules?
// 9️⃣ How does React Native use the JavaScript Interface (JSI) in TurboModules?
// 🔟 What’s the difference between MainThread and BackgroundThread execution in Native Modules?
// provide me answer of all'
// ChatGPT said:
// 📌 Answers to React Native Native Module Interview Questions
// 1️⃣ What is a Native Module in React Native?
// ✅ Answer:
// A Native Module in React Native is a bridge that allows JavaScript to communicate with platform-specific code (Java/Kotlin for Android and Swift/Objective-C for iOS).
// It is used when React Native does not provide access to certain device features like Bluetooth, Battery Status, Face ID, etc.

// Example Use Cases:
// Accessing Battery Level
// Integrating Camera APIs
// Using Bluetooth & NFC
// Fetching Device Storage Data
// 2️⃣ How does React Native communicate with Native Modules?
// ✅ Answer:
// React Native communicates with Native Modules through a Bridge, which allows JavaScript (JS) and Native code (Java/Kotlin/Swift) to exchange data asynchronously.

// Process Flow:
// JavaScript calls the native function using NativeModules.
// The bridge sends the request to native code.
// Native code executes the function and returns data.
// JavaScript receives the response via Promise or Callback.
// Example:
// typescript
// Copy
// Edit
// import { NativeModules } from "react-native";
// const { BatteryModule } = NativeModules;

// BatteryModule.getBatteryLevel().then(level => console.log(level));
// 3️⃣ How do you return values from a Native Module asynchronously?
// ✅ Answer:
// To return values asynchronously from a Native Module, we use Promises or Callbacks.

// For Android (Java/Kotlin)
// java
// Copy
// Edit
// @ReactMethod
// public void getBatteryLevel(Promise promise) {
//     try {
//         int level = 80; // Get battery level from system
//         promise.resolve(level);
//     } catch (Exception e) {
//         promise.reject("ERROR", "Failed to get battery level");
//     }
// }
// For iOS (Swift)
// swift
// Copy
// Edit
// @objc
// func getBatteryLevel(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
//     let batteryLevel = UIDevice.current.batteryLevel * 100
//     if batteryLevel >= 0 {
//         resolve(Int(batteryLevel))
//     } else {
//         reject("ERROR", "Failed to get battery level", nil)
//     }
// }
// JavaScript Usage
// typescript
// Copy
// Edit
// BatteryModule.getBatteryLevel()
//   .then(level => console.log("Battery Level:", level))
//   .catch(error => console.error("Error:", error));
// 4️⃣ What is the difference between TurboModules and Native Modules?
// ✅ Answer:

// Feature	Native Modules (Legacy)	TurboModules (JSI)
// Performance	Slower due to bridge	Faster (No Bridge)
// Asynchronous	Uses Promises	Can be Sync or Async
// Bridge Usage	Uses JS-Native Bridge	Uses JSI (JavaScript Interface)
// Startup Time	Slower	Faster
// Memory Usage	More	Less
// 🚀 TurboModules is a new way to write Native Modules that removes the need for the bridge, making it faster.

// 5️⃣ How do you handle errors in Native Modules?
// ✅ Answer:
// Errors should be handled properly using Promise.reject() in Java/Kotlin and RCTPromiseRejectBlock in Swift.

// For Android (Java)
// java
// Copy
// Edit
// @ReactMethod
// public void getBatteryLevel(Promise promise) {
//     try {
//         int level = 50; 
//         promise.resolve(level);
//     } catch (Exception e) {
//         promise.reject("BATTERY_ERROR", "Could not fetch battery level");
//     }
// }
// For iOS (Swift)
// swift
// Copy
// Edit
// @objc
// func getBatteryLevel(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
//     if let batteryLevel = UIDevice.current.batteryLevel * 100, batteryLevel >= 0 {
//         resolve(Int(batteryLevel))
//     } else {
//         reject("BATTERY_ERROR", "Failed to get battery level", nil)
//     }
// }
// JavaScript Usage
// typescript
// Copy
// Edit
// BatteryModule.getBatteryLevel()
//   .then(level => console.log(level))
//   .catch(error => console.error("Error:", error));
// 6️⃣ How can we improve the performance of Native Modules?
// ✅ Answer:

// Use TurboModules (JSI) instead of the old bridge.
// Reduce unnecessary native calls by caching values.
// Use Background Threads for heavy computations.
// Optimize Memory Usage by releasing unused objects.
// Avoid blocking the Main Thread when executing long tasks.
// 7️⃣ What is the role of RCT_EXTERN_MODULE in iOS Native Modules?
// ✅ Answer:

// RCT_EXTERN_MODULE is used to expose Objective-C or Swift Native Modules to React Native.
// It allows Swift-based Native Modules to be recognized by React Native.
// Example (Objective-C)
// objc
// Copy
// Edit
// #import <React/RCTBridgeModule.h>

// @interface RCT_EXTERN_MODULE(BatteryModule, NSObject)
// RCT_EXTERN_METHOD(getBatteryLevel:(RCTPromiseResolveBlock)resolve
//                   rejecter:(RCTPromiseRejectBlock)reject)
// @end
// This automatically connects Swift classes with React Native.

// 8️⃣ What are the advantages of using Swift over Objective-C for iOS Native Modules?
// ✅ Answer:

// Feature	Swift	Objective-C
// Syntax	Easier & Modern	Complex & Verbose
// Performance	Faster due to optimization	Slightly Slower
// Memory Safety	Safer (no manual memory management)	Manual Memory Management
// Interoperability	Works well with Objective-C	Old language
// Ease of Use	Cleaner syntax	More boilerplate
// Conclusion: Swift is recommended for new projects due to better performance, safety, and ease of use.

// 9️⃣ How does React Native use the JavaScript Interface (JSI) in TurboModules?
// ✅ Answer:
// JSI (JavaScript Interface) is a new architecture in React Native that allows direct communication between JavaScript and Native code without using the bridge.

// Key Benefits:
// 🚀 Faster Performance (No Bridge)
// 🔗 Direct Calls from JavaScript to Native Code
// 📉 Lower Memory Usage
// 🔄 Supports Synchronous Execution
// Example: With JSI, you can call a Native Module synchronously:

// typescript
// Copy
// Edit
// const batteryLevel = BatteryModule.getBatteryLevelSync();
// This is not possible in the old bridge-based Native Modules.

// 🔟 What’s the difference between MainThread and BackgroundThread execution in Native Modules?
// ✅ Answer:

// Thread Type	Usage
// Main Thread (UI Thread)	Handles UI updates and user interactions.
// Background Thread	Used for heavy tasks like API calls, database queries, and computation.
// When to Use Which?
// ✅ Use the Main Thread for UI updates (like showing a Toast).
// ✅ Use Background Thread for intensive tasks (like fetching GPS or large file processing).
// Example: Running a Task on a Background Thread in Android
// java
// Copy
// Edit
// @ReactMethod
// public void getBatteryLevel(Promise promise) {
//     new Thread(() -> {
//         try {
//             int level = 80;
//             promise.resolve(level);
//         } catch (Exception e) {
//             promise.reject("ERROR", "Failed to get battery level");
//         }
//     }).start();
// }
// This prevents blocking the Main UI Thread while fetching data.

// 🚀 Conclusion
// Native Modules allow JavaScript to communicate with Native Code.
// TurboModules (JSI) improve performance by eliminating the bridge.
// Error Handling & Multi-threading are crucial for better performance.
// Swift is recommended over Objective-C for iOS development.
// 🔥 Now you're ready to ace your React Native interview!
// Do you need any real-world coding examples or mock interview questions? 🚀







// You said:
// summerize all the points android and ios 
// ChatGPT said:
// 🚀 React Native Native Modules Summary (Android & iOS) 🚀
// 📌 What is a Native Module?
// A Native Module in React Native is a bridge that connects JavaScript to native platform code (Java/Kotlin for Android, Swift/Objective-C for iOS). It is used when React Native does not provide built-in access to device functionalities like Bluetooth, Battery, Face ID, and Camera.

// 📌 How React Native Communicates with Native Modules?
// JavaScript calls the Native Module via NativeModules.
// The Bridge/TurboModule sends the request to native code.
// Native code executes the function and sends a response.
// JavaScript receives the response asynchronously using Promises or Callbacks.
// Example (JavaScript)
// typescript
// Copy
// Edit
// import { NativeModules } from "react-native";
// const { Battery
// You said:
// don't wite the questions and answer just summerize the implementation part
// ChatGPT said:
// 🚀 React Native Native Module Implementation Summary (Android & iOS) 🚀
// 📌 Folder Structure for Native Module
// css
// Copy
// Edit
// 📂 android
//  ├── 📂 app
//  │   ├── 📂 src
//  │   │   ├── 📂 main
//  │   │   │   ├── 📂 java/com/example/mynative
//  │   │   │   │   ├── BatteryModule.java
//  │   │   │   │   ├── BatteryPackage.java
//  │   │   │   │   ├── MainApplication.java
// 📂 ios
//  ├── 📂 MyNativeModule
//  │   ├── BatteryModule.swift
//  │   ├── BatteryModuleBridge.m
// 📌 Android Native Module Implementation (Java)
// Create BatteryModule.java
// java
// Copy
// Edit
// package com.example.mynative;

// import android.content.Context;
// import android.os.BatteryManager;
// import com.facebook.react.bridge.*;

// public class BatteryModule extends ReactContextBaseJavaModule {
//     BatteryModule(ReactApplicationContext context) { super(context); }

//     @Override public String getName() { return "BatteryModule"; }

//     @ReactMethod
//     public void getBatteryLevel(Promise promise) {
//         try {
//             BatteryManager batteryManager = (BatteryManager) getReactApplicationContext().getSystemService(Context.BATTERY_SERVICE);
//             int level = batteryManager.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY);
//             promise.resolve(level);
//         } catch (Exception e) {
//             promise.reject("BATTERY_ERROR", "Failed to get battery level");
//         }
//     }
// }
// Register Module in BatteryPackage.java
// java
// Copy
// Edit
// package com.example.mynative;

// import com.facebook.react.ReactPackage;
// import java.util.Arrays;
// import java.util.List;

// public class BatteryPackage implements ReactPackage {
//     @Override
//     public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
//         return Arrays.asList(new BatteryModule(reactContext));
//     }
// }
// Link Module in MainApplication.java
// java
// Copy
// Edit
// @Override
// protected List<ReactPackage> getPackages() {
//     return Arrays.asList(
//         new MainReactPackage(),
//         new BatteryPackage()
//     );
// }
// 📌 iOS Native Module Implementation (Swift)
// Create BatteryModule.swift
// swift
// Copy
// Edit
// import Foundation
// import UIKit

// @objc(BatteryModule)
// class BatteryModule: NSObject {

//   @objc
//   func getBatteryLevel(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
//     let batteryLevel = UIDevice.current.batteryLevel * 100
//     if batteryLevel >= 0 {
//         resolve(Int(batteryLevel))
//     } else {
//         reject("BATTERY_ERROR", "Failed to get battery level", nil)
//     }
//   }
// }
// Create Bridge File (BatteryModuleBridge.m)
// objective
// Copy
// Edit
// #import <React/RCTBridgeModule.h>

// @interface RCT_EXTERN_MODULE(BatteryModule, NSObject)
// RCT_EXTERN_METHOD(getBatteryLevel:(RCTPromiseResolveBlock)resolve
//                   rejecter:(RCTPromiseRejectBlock)reject)
// @end
// 📌 JavaScript Usage
// typescript
// Copy
// Edit
// import { NativeModules } from "react-native";
// const { BatteryModule } = NativeModules;

// BatteryModule.getBatteryLevel()
//   .then(level => console.log("Battery Level:", level))
//   .catch(error => console.error("Error:", error));
// 📌 Key Performance Improvements
// Use TurboModules (JSI) for Faster Execution (removes bridge overhead).
// Run Long Tasks on Background Threads (avoid blocking UI).
// Cache Data to Minimize Native Calls.
// Optimize Memory Usage by releasing unused objects.
// This summary provides a basic real-world example of a Native Module implementation in both Android and iOS for fetching battery levels. 🚀







// You said:
// provide me a things so that i can explain to interviewer
// ChatGPT said:
// 🚀 How to Explain Native Modules in an Interview (Android & iOS) 🚀
// If you're asked about Native Modules in React Native, here’s how you can structure your answer effectively:

// 1️⃣ Introduction to Native Modules
// 🔹 Definition: A Native Module is a bridge between JavaScript and platform-specific code (Java/Kotlin for Android, Swift/Objective-C for iOS).
// 🔹 Why it's needed: React Native does not provide direct access to some native APIs like Battery, Camera, Face ID, Bluetooth, GPS, NFC, and Sensors.
// 🔹 Use Cases:

// Fetching battery level
// Using Face ID authentication
// Accessing Bluetooth devices
// 2️⃣ How Native Modules Work in React Native?
// ✅ React Native communicates with Native Modules through a Bridge (Legacy) or JSI (JavaScript Interface) in TurboModules.
// ✅ The process follows these steps:

// JavaScript calls a native method using NativeModules.
// The Bridge or JSI sends the request to Native Code.
// The native function executes and returns data.
// JavaScript receives the response via Promises or Callbacks.
// Example (JavaScript)
// typescript
// Copy
// Edit
// import { NativeModules } from "react-native";
// const { BatteryModule } = NativeModules;

// BatteryModule.getBatteryLevel()
//   .then(level => console.log("Battery Level:", level))
//   .catch(error => console.error("Error:", error));
// 3️⃣ Implementation: How to Write a Native Module?
// Android (Java) Implementation
// Create BatteryModule.java (Define the Native Module)
// java
// Copy
// Edit
// package com.example.mynative;
// import android.content.Context;
// import android.os.BatteryManager;
// import com.facebook.react.bridge.*;

// public class BatteryModule extends ReactContextBaseJavaModule {
//     BatteryModule(ReactApplicationContext context) { super(context); }

//     @Override public String getName() { return "BatteryModule"; }

//     @ReactMethod
//     public void getBatteryLevel(Promise promise) {
//         try {
//             BatteryManager batteryManager = (BatteryManager) getReactApplicationContext().getSystemService(Context.BATTERY_SERVICE);
//             int level = batteryManager.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY);
//             promise.resolve(level);
//         } catch (Exception e) {
//             promise.reject("BATTERY_ERROR", "Failed to get battery level");
//         }
//     }
// }
// Register in BatteryPackage.java
// java
// Copy
// Edit
// public class BatteryPackage implements ReactPackage {
//     @Override
//     public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
//         return Arrays.asList(new BatteryModule(reactContext));
//     }
// }
// Add BatteryPackage in MainApplication.java
// java
// Copy
// Edit
// @Override
// protected List<ReactPackage> getPackages() {
//     return Arrays.asList(
//         new MainReactPackage(),
//         new BatteryPackage()
//     );
// }
// iOS (Swift) Implementation
// Create BatteryModule.swift
// swift
// Copy
// Edit
// import Foundation
// import UIKit

// @objc(BatteryModule)
// class BatteryModule: NSObject {
//   @objc
//   func getBatteryLevel(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
//     let batteryLevel = UIDevice.current.batteryLevel * 100
//     if batteryLevel >= 0 {
//         resolve(Int(batteryLevel))
//     } else {
//         reject("BATTERY_ERROR", "Failed to get battery level", nil)
//     }
//   }
// }
// Create Bridge in BatteryModuleBridge.m
// objective
// Copy
// Edit
// #import <React/RCTBridgeModule.h>

// @interface RCT_EXTERN_MODULE(BatteryModule, NSObject)
// RCT_EXTERN_METHOD(getBatteryLevel:(RCTPromiseResolveBlock)resolve
//                   rejecter:(RCTPromiseRejectBlock)reject)
// @end
// 4️⃣ Error Handling in Native Modules
// Handle errors properly using Promise.reject() in Java and RCTPromiseRejectBlock in Swift.
// Ensure the method never crashes the app by using try-catch blocks.
// 5️⃣ Difference Between Native Modules & TurboModules
// Feature	Native Modules (Legacy)	TurboModules (JSI)
// Performance	Slower due to bridge	Faster (No Bridge)
// Asynchronous	Uses Promises	Can be Sync or Async
// Bridge Usage	Uses JS-Native Bridge	Uses JSI (JavaScript Interface)
// Startup Time	Slower	Faster
// Memory Usage	More	Less
// JSI (JavaScript Interface) Benefits
// ✔ No need for a bridge
// ✔ Faster communication
// ✔ Supports synchronous execution

// 6️⃣ Multi-threading in Native Modules
// Main Thread (UI Thread): Used for UI updates.
// Background Thread: Used for heavy operations like database queries, Bluetooth scanning, and large file processing.
// Example (Running on Background Thread in Android)
// java
// Copy
// Edit
// @ReactMethod
// public void getBatteryLevel(Promise promise) {
//     new Thread(() -> {
//         try {
//             int level = 80;
//             promise.resolve(level);
//         } catch (Exception e) {
//             promise.reject("ERROR", "Failed to get battery level");
//         }
//     }).start();
// }
// 7️⃣ Performance Optimization for Native Modules
// ✅ Use TurboModules (JSI) for faster execution.
// ✅ Run heavy tasks on Background Threads.
// ✅ Cache data to reduce frequent Native Calls.
// ✅ Optimize memory usage by freeing unused objects.

// 8️⃣ Final Summary: Key Talking Points
// What is a Native Module? It allows JS to communicate with Native code (Java/Kotlin for Android, Swift/Objective-C for iOS).
// Why use it? To access platform-specific features like Battery, Camera, Bluetooth, GPS, Face ID.
// How does it work? Uses a Bridge (Legacy) or JSI (TurboModules) for communication.
// How to implement? Create a module in Java/Swift, register it in React Native, and call it from JavaScript.
// How to handle errors? Use Promise.reject() in Java and RCTPromiseRejectBlock in Swift.
// Performance Tips? Use TurboModules, background threads, and caching to optimize performance.
// Key difference between Native Modules and TurboModules? TurboModules remove the bridge and improve speed & efficiency.
// 🔥 Interview Ready! 🚀
// Now you have all the key points, code examples, and explanations to confidently answer any Native Module question in your React Native interview! 🎯

// Let me know if you want mock interview questions or a deep dive into TurboModules (JSI