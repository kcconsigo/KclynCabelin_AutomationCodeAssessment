import { test, expect, Browser, BrowserContext, chromium } from '@playwright/test';
import {After, Before, BeforeStep, AfterStep, Status, setDefaultTimeout} from '@cucumber/cucumber';
import { navigateURLPage } from '../../pages/navigatebalsampage.page'; 
import path from 'path';

// Set a default timeout for Cucumber steps
setDefaultTimeout(60000);
// Synchronous
let browser: Browser;
let context: BrowserContext;
Before(async function () {
  browser = await chromium.launch({headless: false});
  const page = await browser.newPage();
});

BeforeStep({tags: "@E2Etesting"}, function () {
  // This hook will be executed before all steps in a scenario with tag @foo
});

AfterStep( async function ({result}) {
  // This hook will be executed after all steps, and take a screenshot on step failure
  if (result.status === Status.FAILED) {
    await this.page.takeScreenshot({path: 'screenshot_dir.png'});
  }
});

After(function () {
  // Assuming this.driver is a selenium webdriver
  console.log("Last to execute");
  // return this.page.driver.quit();
});