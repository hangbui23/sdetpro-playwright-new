import { paymentData } from "../test_data/PaymentData";
import BasePaymentInfoComponent from "./BasePaymentInfoComponent";

export default class CreditCartPaymentInformationComponent extends BasePaymentInfoComponent {

    private CREDIT_CARD_TYPE  = '#CreditCardType';
    private CARDHOLDER_NAME = '#CardholderName';
    private CARD_NUMBER = '#CardNumber';
    private EXPIRY_MONTH = '#ExpireMonth';
    private EXPIRY_YEAR = '#ExpireYear';
    private CARD_CODE = '#CardCode';

    public async processPayment(): Promise<void> {
       const creditCard = this.getRandomCreditCard(); 
       await this.component.locator(this.CREDIT_CARD_TYPE).waitFor({state:'visible'});
       await this.component.locator(this.CREDIT_CARD_TYPE).selectOption(creditCard.creditCardType);
       await this.component.locator(this.CARDHOLDER_NAME).fill(creditCard.cardholderName);
       await this.component.locator(this.CARD_NUMBER).fill(creditCard.cardNumber);
       await this.component.locator(this.EXPIRY_MONTH).selectOption(creditCard.expireMonth);
       await this.component.locator(this.EXPIRY_YEAR).selectOption(creditCard.expireYear);
       await this.component.locator(this.CARD_CODE).fill(creditCard.cardCode);
       await this.clickOnContinueButton();
    }

    public getRandomCreditCard() {
    const cards = Object.values(paymentData.creditCard);
    const index = Math.floor(Math.random() * cards.length);
    return cards[index];
}
}