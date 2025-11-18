import { Locator } from "@playwright/test";

export default class TotalComponent {

    public static readonly SELECTOR = '.totals';
    private cartTotalTableRowLoc = '.cart-total tr';
    private cartValueLoc = '.cart-total-left';
    private cartPriceLoc = '.cart-total-right';
    private termOfServiceLoc = '#termsofservice';
    private checkOutBtn = '#checkout'

    constructor(private component: Locator) {
        this.component = component;
    }

    public async PriceCategory(): Promise<any> {
        let priceCategory: any = {};

        const tableRowLocs = await this.component.locator(this.cartTotalTableRowLoc).all();
        for (const tableRowLoc of tableRowLocs) {
            const value = (await tableRowLoc.locator(this.cartValueLoc).innerText()).replace(':','').trim();
            const price = Number(await tableRowLoc.locator(this.cartPriceLoc).innerText());
            priceCategory[value] = price;
        }
        return priceCategory;
    }

    public async checkTermOfService(): Promise<void> {
        await this.component.locator(this.termOfServiceLoc).check();
    }

    public async clickCheckout(): Promise<void> {
        await this.component.locator(this.checkOutBtn).click();
    }   
}