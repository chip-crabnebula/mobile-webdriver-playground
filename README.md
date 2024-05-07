# mobile-webdriver-playground

⚠️ Nothing in this repository is supported. ⚠️

A playground for running WebDriver tests against a default `create-tauri-app` applications.

## Android

Follow Tauri Android requirements as listed here to set up your environment https://beta.tauri.app/start/prerequisites/#android.

The application build application must already be installed on the target device/emulator.

```console
npm install
npm run tauri android build
```

Then, you can install the signed (with a developer certificate) apk with

```console
adb install src-tauri/gen/android/app/build/outputs/apk/universal/release/app-universal-release.apk
```

Now that the application is installed, it can be tested. First, start appium server in a separate terminal with `npm run appium:server`. Then, you are free to run the tests with `npm run test:webdriver:android`.

## TODO

* API to paper over WebDriver capabilities of UiAutomator2 (android) and XCUITest (iOS)
* API to paper over mobile and desktop capability stuff into single used API

### iOS

* not tested yet (no certificate)

### Android

* wrapper to install app to device (real or emulated) before running tests
* wrapper to download correct chrome version (maybe), or document running `appium server --allow-insecure chromedriver_autodownload` once per new device or device update
* generate webdriver capabilities from tauri config
