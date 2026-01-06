import { Locator } from "@playwright/test";

export default class ConfirmOrderComponent {
    public static readonly SELECTOR = '#opc-confirm_order';
    private CONFIRM_BUTTON = "input[value='Confirm']";
    private ORDER_TOTAL_SELECTOR = '.order-total strong';
    private BILLING_INFO_SELECTOR = '.billing-info';
    private SHIPPING_INFO_SELECTOR = '.shipping-info';
    private PAYMENT_METHOD_SELECTOR = '.payment-method';
    private SHIPPING_METHOD_SELECTOR = '.shipping-method';
    private CART_ITEMS_SELECTOR = '.cart-item';

    constructor(private component: Locator) {
        this.component = component;
    }

    /**
     * Click the confirm button to complete the order
     */
    public async clickConfirmButton(): Promise<void> {
        await this.component.locator(this.CONFIRM_BUTTON).waitFor({ state: 'visible' });
        await this.component.locator(this.CONFIRM_BUTTON).click();
    }

    /**
     * Get the order total amount
     */
    public async getOrderTotal(): Promise<string> {
        const totalElement = this.component.locator(this.ORDER_TOTAL_SELECTOR);
        await totalElement.waitFor({ state: 'visible' });
        return await totalElement.textContent() || '';
    }

    /**
     * Get billing information text
     */
    public async getBillingInfo(): Promise<string> {
        const billingElement = this.component.locator(this.BILLING_INFO_SELECTOR);
        await billingElement.waitFor({ state: 'visible' });
        return await billingElement.textContent() || '';
    }

    /**
     * Get shipping information text
     */
    public async getShippingInfo(): Promise<string> {
        const shippingElement = this.component.locator(this.SHIPPING_INFO_SELECTOR);
        await shippingElement.waitFor({ state: 'visible' });
        return await shippingElement.textContent() || '';
    }

    /**
     * Get payment method text
     */
    public async getPaymentMethod(): Promise<string> {
        const paymentElement = this.component.locator(this.PAYMENT_METHOD_SELECTOR);
        await paymentElement.waitFor({ state: 'visible' });
        return await paymentElement.textContent() || '';
    }

    /**
     * Get shipping method text
     */
    public async getShippingMethod(): Promise<string> {
        const shippingMethodElement = this.component.locator(this.SHIPPING_METHOD_SELECTOR);
        await shippingMethodElement.waitFor({ state: 'visible' });
        return await shippingMethodElement.textContent() || '';
    }

    /**
     * Get all cart items in the order summary
     */
    public async getCartItems(): Promise<string[]> {
        const items = await this.component.locator(this.CART_ITEMS_SELECTOR).all();
        const itemTexts: string[] = [];
        for (const item of items) {
            const text = await item.textContent();
            if (text) {
                itemTexts.push(text.trim());
            }
        }
        return itemTexts;
    }

    /**
     * Verify order summary is displayed
     */
    public async isOrderSummaryVisible(): Promise<boolean> {
        try {
            await this.component.waitFor({ state: 'visible', timeout: 5000 });
            return true;
        } catch {
            return false;
        }
    }

    /**
     * Complete the order confirmation (verify and confirm)
     */
    public async confirmOrder(): Promise<void> {
        await this.isOrderSummaryVisible();
        await this.clickConfirmButton();
    }
}
