import { Locator } from "@playwright/test";

export default class CheckOutAsGuestOrRegisterComponent {

    public static readonly SELECTOR = '.checkout-as-guest-or-register-block';
    private CHECKOUT_AS_GUEST_BUTTON = 'input.checkout-as-guest-button';
    private REGISTER_BUTTON = 'input.register-button';

    constructor(private component:Locator){
        this.component = component;
    }
    
    public async clickCheckOutAsGuest():Promise<void>{
        await this.component.locator(this.CHECKOUT_AS_GUEST_BUTTON).click();
    }

    public async clickRegister():Promise<void>{
        await this.component.locator(this.REGISTER_BUTTON).click();
    }   


}