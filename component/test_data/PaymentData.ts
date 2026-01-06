import { CreditCardType } from "./CreditCardType";

export const paymentData = {
    purchaseOrder: {
        poNumber: "PO-889900"
    },

    creditCard: {
        [CreditCardType.Visa]: {
            creditCardType: CreditCardType.Visa,
            cardholderName: "Tom Smith",
            cardNumber: "4032034226676834",
            expireMonth: "10",
            expireYear: "2029",
            cardCode: "397"
        },
        [CreditCardType.MasterCard]: {
            creditCardType: CreditCardType.MasterCard,
            cardholderName: "Tom Smith",
            cardNumber: "5110927646755488",
            expireMonth: "11",
            expireYear: "2027",
            cardCode: "804"
        },
        [CreditCardType.Discover]: {
            creditCardType: CreditCardType.Discover,
            cardholderName: "Tom Smith",
            cardNumber: "6011430168738329",
            expireMonth: "11",
            expireYear: "2028",
            cardCode: "843"
        },
        [CreditCardType.Amex]: {
            creditCardType: CreditCardType.Amex,
            cardholderName: "Hang Bui",
            cardNumber: "378771375307600",
            expireMonth: "02",
            expireYear: "2027",
            cardCode: "5021"
        }
    }
};