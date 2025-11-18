import { Locator } from "@playwright/test";

export default class ProductEssentialComponent{

    public static readonly SELECTOR = '.product-essential';
    private QUANTITY_SEL = 'input.qty-input';
    private BASE_PRICE_SEL = '.product-price span';
    private ADD_BTN_SEL = "//input[contains(@id,'add-to-cart-button')]";
    
    constructor(protected component:Locator){
        this.component=component;
    }

     public async getBasePrice():Promise<number>{
        return  Number(await (this.component.locator(this.BASE_PRICE_SEL)).textContent());
    }

    public async inputQuantity(value:number):Promise<void>{
        let quantity_input = this.component.locator(this.QUANTITY_SEL);
        await quantity_input.fill(value.toString());
    }

    public async clickAddToCart():Promise<string>{
        let add_btn = this.component.locator(this.ADD_BTN_SEL);
        await add_btn.click();
        return '**/addproducttocart/details/**'
    }
}