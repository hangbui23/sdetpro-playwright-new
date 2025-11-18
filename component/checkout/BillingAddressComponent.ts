import { Locator } from "@playwright/test";
import BillingAddressData  from "../test_data/BillingAddressData";
export default class BillingAddressComponent {
    
    public static readonly SELECTOR = '#checkout-step-billing';
    private FIRST_NAME_INPUT = '#BillingNewAddress_FirstName';
    private LAST_NAME_INPUT = '#BillingNewAddress_LastName';
    private EMAIL_INPUT = '#BillingNewAddress_Email';
    private COMPANY_INPUT = '#BillingNewAddress_Company';
    private COUNTRY_DROPDOWN = '#BillingNewAddress_CountryId';
    private STATE_DROPDOWN = '#BillingNewAddress_StateProvinceId';
    private CITY_INPUT = '#BillingNewAddress_City';
    private ADDRESS1_INPUT = '#BillingNewAddress_Address1';
    private ADDRESS2_INPUT = '#BillingNewAddress_Address2';
    private ZIP_POSTAL_CODE_INPUT = '#BillingNewAddress_ZipPostalCode';
    private PHONE_NUMBER_INPUT = '#BillingNewAddress_PhoneNumber';
    private FAX_NUMBER_INPUT = '#BillingNewAddress_FaxNumber';      
    private CONTINUE_BUTTON = '#billing-buttons-container input';
    // Implementation of BillingAddressComponent methods and properties
    
    constructor(private component:Locator){
        this.component = component;
    }

    public async inputFirstName(firstName:string):Promise<void>{
        await this.component.locator(this.FIRST_NAME_INPUT).fill(firstName);
    }

    public async inputLastName(lastName:string):Promise<void>{
        await this.component.locator(this.LAST_NAME_INPUT).fill(lastName);
    }

    public async inputEmail(email:string):Promise<void>{
        await this.component.locator(this.EMAIL_INPUT).fill(email);
    }

    public async inputCompany(company:string):Promise<void>{
        await this.component.locator(this.COMPANY_INPUT).fill(company);
    }

    public async selectCountry(country:string):Promise<void>{
        await this.component.locator(this.COUNTRY_DROPDOWN).selectOption({label:country});
    }

    public async selectState(state:string):Promise<void>{
        await this.component.locator(this.STATE_DROPDOWN).selectOption({label:state});
    }

    public async inputCity(city:string):Promise<void>{
        await this.component.locator(this.CITY_INPUT).fill(city);
    }

    public async inputAddress1(address1:string):Promise<void>{
        await this.component.locator(this.ADDRESS1_INPUT).fill(address1);
    }

    public async inputAddress2(address2:string):Promise<void>{
        await this.component.locator(this.ADDRESS2_INPUT).fill(address2);
    }

    public async inputZipPostalCode(zipPostalCode:string):Promise<void>{
        await this.component.locator(this.ZIP_POSTAL_CODE_INPUT).fill(zipPostalCode);
    }

    public async inputPhoneNumber(phoneNumber:string):Promise<void>{
        await this.component.locator(this.PHONE_NUMBER_INPUT).fill(phoneNumber);
    }

    public async inputFaxNumber(faxNumber:string):Promise<void>{
        await this.component.locator(this.FAX_NUMBER_INPUT).fill(faxNumber);
    }       

    public async clickContinue():Promise<void>{
        await this.component.locator(this.CONTINUE_BUTTON).click();
    }

    public async fillBillingAddressForm(billingAddressData:BillingAddressData):Promise<void>{
    await this.inputFirstName(billingAddressData.firstName);
    await this.inputLastName(billingAddressData.lastName);
    await this.inputEmail(billingAddressData.email);
    if(billingAddressData.company){
        await this.inputCompany(billingAddressData.company);    
    }
    await this.selectCountry(billingAddressData.country);
    if(billingAddressData.state){
        await this.selectState(billingAddressData.state);
    }
    await this.inputCity(billingAddressData.city);
    await this.inputAddress1(billingAddressData.address1);
    if(billingAddressData.address2){
        await this.inputAddress2(billingAddressData.address2);
    }
    await this.inputZipPostalCode(billingAddressData.zipPostalCode);
    await this.inputPhoneNumber(billingAddressData.phoneNumber);
    if(billingAddressData.faxNumber){
        await this.inputFaxNumber(billingAddressData.faxNumber);
    }
    }
}