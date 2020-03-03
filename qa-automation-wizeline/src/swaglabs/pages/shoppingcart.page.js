import {Selector,t,ClientFunction} from 'testcafe';

class ShoppingPage {


constructor(){
   this.shoppingCart= Selector('.shopping_cart_container'); 
   this.addItem= Selector('.btn_inventory').nth(0); 
   this.ItemonCart= Selector('.inventory_item_name').nth(0); 
   this.SecondItemOnCart= Selector('.inventory_item_name').nth(1);
   this.addSecondItem= Selector('.btn_inventory').nth(1); 
   this.chekOutButton= Selector('.btn_action.checkout_button'); 
   this.continueButton= Selector('input.btn_primary.cart_button'); 
   this.errorMessage= Selector('form>h3');
   this.fistNameField= Selector('#first-name');
   
   

}

    //Click on the icon cart
    async shoppingCartIcon() {
        await t.click(this.shoppingCart);
    }

    //verify the url
    async cartUrl() {
        const getLocation = ClientFunction(() => document.location.href);
        await t.expect(getLocation()).contains('cart.html');
    }

    //Add Single item
    async addItemCart() {
        await t.click(this.addItem);
    }

     //Add Second item
     async addSecondItemCart() {
        await t.click(this.addSecondItem);
    }

    //Verify First Item added
    async verifyFirstItemCart() {
        await t.expect(this.ItemonCart.textContent).contains('Sauce Labs Backpack');
      
    }

    //Verify Second Item added
    async verifySecondItemCart() {
        await t.expect(this.SecondItemOnCart.textContent).contains('Sauce Labs Bike Light');
      
    }

    //CheckoutButton
    async clickCheckOutButton() {
        await t.click(this.chekOutButton);
      
    }


    

    
}

export default new ShoppingPage();

