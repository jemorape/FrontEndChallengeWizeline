import {Selector,t,ClientFunction} from 'testcafe';

class CheckoutPage {


constructor(){
   this.continueButton= Selector('input.btn_primary.cart_button'); 
   this.errorMessage= Selector('form>h3');
   this.thankyouMessage= Selector('.complete-header');
   this.fistNameField= Selector('#first-name');
   this.lastNameField= Selector('#last-name');
   this.postalCodeField= Selector('#postal-code');
   this.ItemonCart= Selector('.inventory_item_name').nth(0); 
   this.SecondItemOnCart= Selector('.inventory_item_name').nth(1);
   this.finishButton= Selector('.btn_action.cart_button');
   
   
}

//verify the url
async checkoutUrl() {
    const getLocation = ClientFunction(() => document.location.href);
    await t.expect(getLocation()).contains('checkout-step-one.html');
}

//verify the url second part
async checkoutSecondUrl() {
    const getLocation = ClientFunction(() => document.location.href);
    await t.expect(getLocation()).contains('checkout-step-two.html');
}

//verify the url complete 
async checkoutCompleteUrl() {
    const getLocation = ClientFunction(() => document.location.href);
    await t.expect(getLocation()).contains('checkout-complete.html');
}



 //ContinueButton
 async clickContinueButton() {
    await t.click(this.continueButton);
  
}

 //Fist Name error Message
 async fistNameErrorMessage() {
    await t.expect(this.errorMessage.textContent).contains('Error: First Name is required');
  
}

//Last Name error Message
async lastNameErrorMessage() {
    await t.expect(this.errorMessage.textContent).contains('Error: Last Name is required');
  
}

//Postal Code error Message
async postalCodeErrorMessage() {
    await t.expect(this.errorMessage.textContent).contains('Error: Postal Code is required');
  
}

//Thank u for your order Message
async thankyouMessage() {
    await t.expect(this.thankyouMessage.textContent).contains('THANK YOU FOR YOUR ORDER');
  
}

//Type Fist Name 
async fistNameType(fistName) {
    await t.typeText(this.fistNameField, fistName)
  
}

//Type Last Name 
async lastNameType(lastName) {
    await t.typeText(this.lastNameField, lastName)
  
}

//Type Last Name 
async postalCodeType(postalCode) {
    await t.typeText(this.postalCodeField, postalCode)
  
}

//Verify First Item added
async verifyFirstItemCart() {
    await t.expect(this.ItemonCart.textContent).contains('Sauce Labs Backpack');
  
}

//Verify Second Item added
async verifySecondItemCart() {
    await t.expect(this.SecondItemOnCart.textContent).contains('Sauce Labs Bike Light');
  
}

//FinishButton
async clickFinishButton() {
    await t.click(this.finishButton);
  
}






}

export default new CheckoutPage();