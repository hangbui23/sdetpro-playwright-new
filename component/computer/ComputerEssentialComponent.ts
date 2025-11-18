import { Locator } from "@playwright/test";
import ProductEssentialComponent from "./ProductessentialComponent";

export default abstract class ComputerEssentialComponent extends ProductEssentialComponent {

    private readonly SELECTOR:string ="(//input/following-sibling::label[contains(text(),'%s')])[1]";
    private ALL_OPTION: string = ".option-list li input";

    public abstract selectRAM(value : string):Promise<string|null> ;
    public abstract selectProcessor(value : string):Promise<string|null> ;

    protected async selectOption(value: string):Promise<string | null>{
      let xpath = this.SELECTOR.replace('%s',value);
      const optionLoc = this.component.locator(xpath);
       await optionLoc.click();
       return optionLoc.textContent();
    }

     public async selectHDD(value:string):Promise<string|null>{
        return await this.selectOption(value);
    }

     public async selectOS(value:string):Promise<string|null>{
        return await this.selectOption(value);
    }

    public async selectSoftware(values:string[]):Promise<string[]>{
        const results: string[] = [];
        for (const value of values) {
             const result =  await this.selectOption(value);
             if (result)
             results.push(result);
        }
        return results;
    }

    public async unslectAllOption():Promise<void>{
        //get all option input
       let all_option = await this.component.locator(this.ALL_OPTION).all();

        //get attribute checked of all option input
        for (const option of all_option) {
            let checked_option = await option.getAttribute("checked");
            if(checked_option){
                await option.click();
            }
        }
    }
}