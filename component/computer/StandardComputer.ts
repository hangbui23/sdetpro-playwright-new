import { Locator } from "@playwright/test";
import ComputerEssentialComponent from "./ComputerEssentialComponent";

export default class StandardComputer extends ComputerEssentialComponent {

    private readonly DROPDOWN_SELECTOR = "select[id^='product_attribute']";

    public async selectProcessor(value: string): Promise<string|null> {
        let PROCESSOR_INDEX = 0;
        return await this.selectOptionByIndex(PROCESSOR_INDEX, value);

    }

    public async selectRAM(value: string): Promise<string|null> {
        let RAM_INDEX = 1;
        return await this.selectOptionByIndex(RAM_INDEX, value); 
    }

    private async selectOptionByIndex(dropdownIndex:number,value:string): Promise<string|null> {
        let optionIndex = -1;
        let dropDownValue: string | null = null;
        let dropDownSelect: Locator[] = await this.component.locator(this.DROPDOWN_SELECTOR).all();
        let dropDown = dropDownSelect[dropdownIndex];
        let dropDownOptions = await dropDown.locator('option').all();
        for (const dropdown of dropDownOptions) {
            dropDownValue = await dropdown.textContent();
            if (dropDownValue?.startsWith(value)) {
                optionIndex = dropDownOptions.indexOf(dropdown);
                break;
            }
        }

        if (optionIndex < 0) {
            throw new Error(`The option ${value} doesn't exist`)
        }
        await dropDown.selectOption({ index: optionIndex });
        return dropDownValue;
    }
}