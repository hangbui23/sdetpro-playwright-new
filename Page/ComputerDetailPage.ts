import { Page } from "@playwright/test";
import BasePage from "./BasePage";
import ComputerEssentialComponent from "../component/computer/ComputerEssentialComponent";
import StandardComputer from "../component/computer/StandardComputer";
import ExpensiveComputer from "../component/computer/ExpensiveComputer";
import ProductEssentialComponent from "../component/computer/ProductessentialComponent";

export default class ComputerDetailPage extends BasePage{

    
    public ComputerComponent(componentName: string): ComputerEssentialComponent{
        let productDetailLoc = this.page.locator(ProductEssentialComponent.SELECTOR);
        switch (componentName) {
            case 'standard':
                return new StandardComputer(productDetailLoc); 
                break;
         case 'expensive':
                return new ExpensiveComputer(productDetailLoc); 
                break;
            default:
                throw new Error(`Component ${componentName} is not exist`)
                break;
        }
    }
}