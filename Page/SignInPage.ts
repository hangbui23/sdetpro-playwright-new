import { Page } from "@playwright/test";
import BasePage from "./BasePage";
import CheckOutAsGuestOrRegisterComponent from "../component/signIn/CheckOutAsGuestOrRegisterComponent";
import ReturningCustomerComponent from "../component/signIn/ReturningCustomerComponent";

export default class SignInPage extends BasePage {
    // Implementation of SignInPage methods and properties
    constructor(page: Page) {
        super(page);
    }

    public get CheckOutAsGuestOrRegister(): CheckOutAsGuestOrRegisterComponent {
        const loc =this.page.locator(CheckOutAsGuestOrRegisterComponent.SELECTOR);
        return new CheckOutAsGuestOrRegisterComponent(loc);
    }

     public get ReturningCustomer(): ReturningCustomerComponent {
        const loc =this.page.locator(ReturningCustomerComponent.SELECTOR);
        return new ReturningCustomerComponent(loc);
    }
}