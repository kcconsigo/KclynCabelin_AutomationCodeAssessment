
import { Given, When, Then } from "@cucumber/cucumber";
import { navigateURLPage } from '../../../pages/navigatebalsampage.page';
import { Browser, chromium, Page } from "@playwright/test";

let browser: Browser;
let page: Page;

Given('User is on the Balsam Hill Web Application', { timeout: 30 * 5000 }, async function () {
  browser = await chromium.launch({headless: false});
  page = await browser.newPage();
  this.navigateurlpage = new navigateURLPage(page);
  await this.navigateurlpage.navigatePage();
});

When('User Enter {string} on the search Background', async function (searchItemResults) {
   await this.navigateurlpage.searchItem(searchItemResults);
});
When('User click {string} on search item suggestions', async function (searchItemResultPage) {
await this.navigateurlpage.searchItem(searchItemResultPage);
});

When('User click {string} on product selection page', async function (productItem) {
await this.navigateurlpage.productSelectionPage(productItem);
});

When('User validate {string} and {string} and should be seen on add to cart page and view cart page', async function (productItem) {
await this.navigateurlpage.productSelectionPage(productItem);
await this.navigateurlpage.productDetailsPage();
});


Then('User click trash can icon and item should be removed and {string} should be seen on the cart page', async function (productItem) {
console.log(await page.getByRole('listitem').filter({ hasText: productItem }).textContent());
});


