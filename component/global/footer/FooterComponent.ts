import { Locator } from "@playwright/test";
import LinkComponent from "./LinkComponent";
import InformationColumnComponent from "./InformationColumnComponent";
import CustomerServiceColumnComponent from "./CustomerServiceColumnComponent";

export default class FooterComponent{
    public static readonly SELECTOR:string = '.footer';

    constructor(private component: Locator){
        this.component = component;
    }

    public InformationColumnComponnent():InformationColumnComponent{
        return new InformationColumnComponent(this.component.locator(InformationColumnComponent.SELECTOR));
    }

     public CustomerServiceColumnComponnent():CustomerServiceColumnComponent{
        return new CustomerServiceColumnComponent(this.component.locator(CustomerServiceColumnComponent.SELECTOR));
    }

    public getTitleSection(title: string):Locator{
        if(title.includes(' ')){
            title = title.replace(' ','-');
        }
        title = title.toLowerCase();
        return this.component.locator(`.${title}`)
    }

    public async getAllInfoInColumnSection(title:string):Promise<{text:string,href:string}[]>{
        let results:{text:string,href:string}[] = [];
        let section = this.getTitleSection(title);
        let eles = await section.locator(LinkComponent.SELECTOR).all();
        for (const element of eles) {
            results.push({
                text: await element.innerText(),
                href: await element.getAttribute('href') || ''
            });
        }
        return results;
    }

    public async getFooterText():Promise<string>{
    return this.component.locator('.footer-poweredby').innerText();
    }
}