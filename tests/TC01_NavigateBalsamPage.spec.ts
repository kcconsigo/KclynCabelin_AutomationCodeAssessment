import { test, expect } from '@playwright/test';
import { navigateURLPage } from '../pages/navigatebalsampage.page';
import chrismastreeitems from '../utils/chrismastreeitems.json';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.google.com/');
});
test(`Navigate Balsam and Search Christmasntree on Searchbar,${chrismastreeitems.searchItemResults}, ${chrismastreeitems.searchItemResultPage}, ${chrismastreeitems.productItem},`,{tag: '@RegressionTesting'}, async ({ page }) => {
  const navigateurlpage = new navigateURLPage(page);
  await navigateurlpage.navigatePage();
  await navigateurlpage.searchItem(chrismastreeitems.searchItemResults, chrismastreeitems.searchItemResultPage);
  await navigateurlpage.productSelectionPage(chrismastreeitems.productItem);
  await navigateurlpage.productDetailsPage();
  await navigateurlpage.deleteProductDetails(chrismastreeitems.productItem);
});
export { expect } from '@playwright/test';