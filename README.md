# mobile-webdriver-playground

⚠️ Nothing in this repository is supported. ⚠️
A playground for running WebDriver tests against a default `create-tauri-app` applications.

## Tauri + Preact + Typescript

This template should help get you started developing with Tauri, Preact and Typescript in Vite.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## TODO

* API to paper over WebDriver capabilities of UiAutomator2 (android) and XCUITest (iOS)
* API to paper over mobile and desktop capability stuff into single used API

### iOS

* not tested yet (no certificate)

### Android

* wrapper to install app to device (real or emulated) before running tests
* wrapper to download correct chrome version (maybe), or document running `appium server --allow-insecure chromedriver_autodownload` once per new device or device update
* generate webdriver capabilities from tauri config
