import { expect, Page } from "@playwright/test";
import BasePage from "./BasePage";
import CartItemRowComponent from "../component/shoppingCart/CartItemRowComponent";
import TotalComponent from "../component/shoppingCart/TotalComponent";
import PageGeneratorManager from "../PageGeneratorManager/pageGeneratorManager";
import SignInPage from "./SignInPage";

export default class ShoppingCartPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    public async cartItemList(): Promise<CartItemRowComponent[]> {
        const cartItemRowLocs = await this.page.locator(CartItemRowComponent.SELECTOR).all();
        return cartItemRowLocs.map(loc => new CartItemRowComponent(loc));
    }

    public TotalComponent(): TotalComponent {
        const totalComponentLoc = this.page.locator(TotalComponent.SELECTOR);
        return new TotalComponent(totalComponentLoc);
    }

    public async verifyShoppingCart() {
        const cartItemList = await this.cartItemList();
        const totalComponent = this.TotalComponent();
        let sum = 0;
        expect(cartItemList.length).toBeGreaterThan(0);
        for (const cartItem of cartItemList) {
            const unitPrice = await cartItem.getUnitPrice();
            const quantity = await cartItem.getQuality();
            const subTotal = await cartItem.getSubToTal();
            sum += subTotal;
            expect(subTotal).toBe(unitPrice * quantity);
        }
        const priceCategory = await totalComponent.PriceCategory();
        const subTotal = priceCategory["Sub-Total"];
        const shipping = priceCategory["Shipping"];
        const tax = priceCategory["Tax"];
        const total = priceCategory["Total"];
        console.log('Sum: ' + sum);
        console.log('Sub-Total: ' + subTotal);
        console.log('Total: ' + subTotal);
        expect(subTotal).toBe(sum);
        expect(total).toBe(subTotal + tax + shipping);
    }

    public async ClickTermOfServiceAndCheckout(): Promise<SignInPage> {
        const totalComponent = this.TotalComponent();
        await totalComponent.checkTermOfService();
        await totalComponent.clickCheckout();
        return PageGeneratorManager.getSignInPage(this.page);
    }
}