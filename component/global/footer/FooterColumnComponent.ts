import { Locator } from "@playwright/test";

export default class FooterColumnComponent{
    protected component: Locator;
    private titleSelector: string = 'h3';
    private linkSelector: string = 'a';

    constructor(component: Locator){
        this.component = component;
    }

    public async getTitle():Promise<string>{
        return this.component.locator(this.titleSelector).innerText();
    }

    public async getAllLinks():Promise<{text:string, href:string}[]>{
        let results:{text:string, href:string}[] = [];
        let links = await this.component.locator(this.linkSelector).all();
        for(const link of links){
            results.push({
                text: await link.innerText(),
                href: await link.getAttribute('href') || ''
            });
        }
        return results;
    }   
}