import {remote} from 'webdriverio';
import {resolve} from 'node:path';

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android',
  'appium:noReset': true,
  'appium:appPackage': 'sh.chip.android_driver',
  'appium:appActivity': '.MainActivity',
  'appium:autoWebview': true,
  'appium:chromedriverChromeMappingFile': resolve(".webdriver", "mapping.json"),
  'appium:chromedriverExecutableDir': resolve(".webdriver", "downloads")
};

const wdOpts = {
  hostname: process.env.APPIUM_HOST || '127.0.0.1',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};

async function runTest() {
  const driver = await remote(wdOpts);
  try {
    const input = await driver.$('#greet-input');
    await input.setValue("WebdriverIO");

    const greet = await driver.$('button[type=submit]');
    await greet.click();
  } finally {
    await driver.pause(2000);
    await driver.deleteSession();
  }
}

runTest().catch(console.error);