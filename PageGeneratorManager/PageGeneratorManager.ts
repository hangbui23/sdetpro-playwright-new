import { Electron, Page } from "@playwright/test";
import HomePage from "../Page/HomePage";
import ComputerDetailPage from "../Page/ComputerDetailPage";
import ElectronicPage from "../Page/ElectronicPage";
import OrderComputerFlow from "../component/flow/OrderComputerFlow";
import { ComputerDataType } from "../component/test_data/ComputerDataType";
import FooterTestFlow from "../component/flow/FooterTestFlow";
import ShoppingCartPage from "../Page/ShoppingCartPage";
import SignInPage from "../Page/SignInPage";
import CheckoutPage from "../Page/CheckoutPage";

export default class PageGeneratorManager{
    public static getHomePage(page:Page):HomePage{
        return new HomePage(page);
    }

    public static getFooterFlow(page:Page):FooterTestFlow{
        return new FooterTestFlow(page)
    }

    public static getComputerDetailPage(page:Page):ComputerDetailPage{
        return new ComputerDetailPage(page);
    }

    public static getElectronicPage(page:Page):ElectronicPage{
        return new ElectronicPage(page);
    }

    public static getComputerFlow(page:Page,computerData: ComputerDataType):OrderComputerFlow{
        return new OrderComputerFlow(page,computerData);
    }

    public static getShoppingCartPage(page:Page):ShoppingCartPage{
        return new ShoppingCartPage(page);
    }

    public static getSignInPage(page:Page):SignInPage{
        return new SignInPage(page);
    }

    public static getCheckOutPage(page:Page):CheckoutPage{
        return new CheckoutPage(page);
    }
}