import { Locator } from "@playwright/test";
export default class ShippingMethodComponent {
    
    public static readonly SELECTOR = '#opc-shipping_method';
    private shippingMethodLoc = 'label'
    private CONTINUE_BUTTON = "input[value='Continue']";
    
    // Implementation of ShippingAddressComponent methods and properties
    constructor(private component:Locator){
        this.component = component;
    }
    
    public async selectRandomShippingMethod():Promise<void>{
         await this.component.locator(this.shippingMethodLoc).first().waitFor({state:'visible'});
         const shippingMethodLoc = await this.component.locator(this.shippingMethodLoc).all();
         const randomIndex = Math.floor(Math.random() * shippingMethodLoc.length);
         await shippingMethodLoc[randomIndex].click();
    }

    public async clickOnContinueButton():Promise<void>{
        await this.component.locator(this.CONTINUE_BUTTON).click();
    }

    public async selectRandomShippingMethodAndContinue():Promise<void>{
        await this.selectRandomShippingMethod();
        await this.clickOnContinueButton();
    }
}