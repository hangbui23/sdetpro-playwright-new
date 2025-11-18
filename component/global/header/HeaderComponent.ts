import { Locator } from "@playwright/test";

export default class HeaderComponent{
    public static readonly SELECTOR:string = '.header';

    constructor(private component: Locator){
        this.component = component;
    }
}