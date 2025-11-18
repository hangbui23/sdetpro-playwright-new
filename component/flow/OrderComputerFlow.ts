import { Page } from "@playwright/test";
import ComputerDetailPage from "../../Page/ComputerDetailPage";
import { ComputerDataType } from "../test_data/ComputerDataType";
import PageGeneratorManager from "../../PageGeneratorManager/pageGeneratorManager";


export default class OrderComputerFlow {

    private totalPrice: number = 0;
    private basePrice: number = 0;
    constructor(private page: Page, private computerData: ComputerDataType) {
        this.page = page;
        this.computerData = computerData;
    }

    public async buildComputer() : Promise <ComputerDetailPage>{
        const { computerDataType, processor, ram, hdd, os, software, quantity } = this.computerData;
        const computerDetailPage = PageGeneratorManager.getComputerDetailPage(this.page);
        const compData = computerDetailPage.ComputerComponent(computerDataType);
        await compData.unslectAllOption();

        const processorSel = await compData.selectProcessor(processor);
        console.log('Processor ' + await this.getPrice(processorSel));

        const ramSel = await compData.selectRAM(ram);
        console.log('RAM ' + await this.getPrice(ramSel));

        const hddSel = await compData.selectHDD(hdd);
        console.log('HDD ' + await this.getPrice(hddSel));

        let osSel: string | string[] | null = null;
        if (os) {
            osSel = await compData.selectOS(os);
            console.log('OS ' + await this.getPrice(osSel));
        }

        if (quantity) {
            await compData.inputQuantity(quantity);
        }

        this.basePrice = await compData.getBasePrice();
        console.log('Base price ' + this.basePrice);

        const softwareSel = await compData.selectSoftware(software);
        console.log('Software ' + await this.getPrice(softwareSel));

        this.totalPrice = (this.basePrice + await this.getPrice(processorSel) + await this.getPrice(ramSel)
            + await this.getPrice(hddSel) + await this.getPrice(softwareSel) + await this.getPrice(osSel)) * (quantity ? quantity : 1);

        const requestSlug = await compData.clickAddToCart();
        await this.page.waitForResponse(requestSlug);

        return PageGeneratorManager.getComputerDetailPage(this.page);
    }

    private async getPrice(priceFullText: string | string[] | null): Promise<number> {
        if (!priceFullText) return 0;

        let texts: string[] = Array.isArray(priceFullText)
            ? priceFullText
            : [priceFullText]; // Convert single string → array

        let priceNumber = 0;

        texts.forEach(pt => {
            const price = pt.trim().match(/\[[+-][0-9]+(?:\.[0-9]+)?\]/g);
            if (price) {
                priceNumber += Number(price[0].replace('[', '').replace(']', ''));
            }
        });

        return priceNumber;
    }
}