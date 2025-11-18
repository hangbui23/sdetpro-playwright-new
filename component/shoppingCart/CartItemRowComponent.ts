import { Locator } from "@playwright/test";

export default class CartItemRowComponent {
   
    public static readonly SELECTOR = '.cart-item-row';
    private UNIT_PRICE_LOCATOR = '.product-unit-price';
    private QUANTITY_LOCATOR = '.qty-input';
    private SUBTOTAL_PRICE_LOCATOR = '.product-subtotal';
    
    constructor(private component: Locator) {
    this.component = component;
   }

    public async getUnitPrice(): Promise<number> {
        return Number(await this.component.locator(this.UNIT_PRICE_LOCATOR).innerText());
    }

    public async getQuality(): Promise<number> {
        return Number(await this.component.locator(this.QUANTITY_LOCATOR).getAttribute('value'));
    }

    public async getSubToTal(): Promise<number> {
        return Number(await this.component.locator(this.SUBTOTAL_PRICE_LOCATOR).innerText());
    }
}