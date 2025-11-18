import { Locator } from "@playwright/test";
import FooterColumnComponent from "./FooterColumnComponent";


export default class CustomerServiceColumnComponent extends FooterColumnComponent{
    public static readonly SELECTOR:string = '.customer-service';

    constructor(component:Locator){
        super(component);
    }

}