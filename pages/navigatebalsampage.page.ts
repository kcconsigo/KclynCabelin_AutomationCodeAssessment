import { expect, type Locator, type Page } from '@playwright/test';
import { balsamweblocators } from '../weblocators/balsampagelocators'

export class navigateURLPage{

    readonly page: Page;
    readonly searchBar: Locator
    readonly addtoCartButton: Locator
    readonly viewCartButton: Locator
    readonly productPriceText: Locator
    readonly productQty: Locator

    constructor(page: Page){
        this.page = page;
        this.productPriceText = page.getByTestId('produt-detail-container').getByLabel('$179');
        this.productQty = page.getByText('Qty: 1');
    }
    async navigatePage(){
        await this.page.goto('https://www.balsamhill.com/');
        await expect(this.page).toHaveURL('https://www.balsamhill.com/');
        await this.page.getByTestId('close-cookie-banner').click();
    }
    async searchItem(searchItemResults: string, searchItemResultPage: string){
        await this.page.locator(balsamweblocators.searchBar).fill(searchItemResults);
        await this.page.getByRole('link', { name: searchItemResultPage }).click();
    }
    async productSelectionPage(productItem: string){
        await this.page.getByRole('link', { name: productItem }).first().click();
        await this.page.locator(balsamweblocators.addtoCartButton).click();
        console.log(await this.productPriceText.textContent()); //this is to validate the product price text from product page to cart page
        console.log(await this.productQty.textContent()); //this is to validate the selected product quantity text from product page to cart page
    }
    async productDetailsPage(){
        await this.page.locator(balsamweblocators.viewCartButton).click();
        console.log(await this.productPriceText.textContent()); //this is to validate the product price text from product page to cart page
    }
    async deleteProductDetails(productItem: string){
        await this.page.getByTestId('cc-btn-remove-0').click();
        console.log(await this.page.getByRole('listitem').filter({ hasText: productItem }).textContent());
    }
}