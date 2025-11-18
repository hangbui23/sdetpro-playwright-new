import { Locator } from "@playwright/test";

export default class ReturningCustomerComponent {
    public static readonly SELECTOR = '.returning-wrapper';
    private EMAIL_INPUT = '#Email';
    private PASSWORD_INPUT = '#Password';
    private REMEMBER_ME_CHECKBOX = "label[for='RememberMe']";
    private FORGOT_PASSWORD_LINK = "//a[text()='Forgot password?']"
    private LOGIN_BUTTON = 'input.login-button';
    


    constructor(private component:Locator){
        this.component = component;
    }

    public async inputEmail(email:string):Promise<void>{
        await this.component.locator(this.EMAIL_INPUT).fill(email);
    }

    public async inputPassword(password:string):Promise<void>{
        await this.component.locator(this.PASSWORD_INPUT).fill(password);
    }
    
    public async checkOnRememberMe():Promise<void>{
        await this.component.locator(this.REMEMBER_ME_CHECKBOX).click();
    }

    public async forgotPassword():Promise<void>{
        await this.component.locator(this.FORGOT_PASSWORD_LINK).click();
    }

    public async clickLogin():Promise<void>{
        await this.component.locator(this.LOGIN_BUTTON).click();
    }

    public async login(email:string,password:string,rememberMe=false):Promise<void>{
        await this.inputEmail(email);
        await this.inputPassword(password);
        if(rememberMe){
            await this.checkOnRememberMe();
        }
        await this.clickLogin();
    }

}