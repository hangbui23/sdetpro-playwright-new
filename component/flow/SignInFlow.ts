import { Page } from "@playwright/test";
import PageGeneratorManager from "../../PageGeneratorManager/pageGeneratorManager";

export default class SignInFlow {
    constructor(private page: Page) {
        this.page = page;
    }

    async loginAs(email: string, password: string) {
        await this.page.goto('/login');
        const signInPage = PageGeneratorManager.getSignInPage(this.page);
        await signInPage.ReturningCustomer.login(email, password);
    }
}