import { Locator } from "@playwright/test";
export default class ShippingAddressComponent {
    
    public static readonly SELECTOR = '#opc-shipping';
    private IN_STORE_PICKUP_CHK='#PickUpInStore';
    private CONTINUE_BUTTON = "input[title='Continue']";

    // Implementation of ShippingAddressComponent methods and properties
    
    constructor(private component:Locator){
        this.component = component;
    }
    public async checkInStorePickup():Promise<void>{
        await this.component.locator(this.IN_STORE_PICKUP_CHK).check();
    }

    public async clickOnContinueButton():Promise<void>{
        await this.component.locator(this.CONTINUE_BUTTON).click();
    }
}