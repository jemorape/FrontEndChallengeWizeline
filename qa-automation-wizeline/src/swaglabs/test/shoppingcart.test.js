import LoginPage from '../pages/login.page.js';
import DashboardPage from '../pages/dashboard.page.js';
import ShoppingPage from '../pages/shoppingcart.page.js';
import CheckoutPage from '../pages/checkout.page.js';

fixture('Shopping Cart Tests').page('https://www.saucedemo.com/');

const EMAIL = "standard_user";
const PASSWORD = "secret_sauce";
const FIRST_NAME= "Anakin";
const LAST_NAME= "Skywalker";
const POSTAL_CODE= "Tatooine 123";


 //First Test Shopping Cart page
// t for test controller
//Async for execute one by one
test.skip('Navigate to the shopping cart', async (t) => {
    await LoginPage.login(EMAIL,PASSWORD);
    await t.expect(await DashboardPage.dashboardUrl()).exists;
    await ShoppingPage.shoppingCartIcon();
    await t.expect(await ShoppingPage.cartUrl()).exists;


 });


//Second Test Add a single item to the shopping cart
// t for test controller
//Async for execute one by one
test.skip('Add a single item to the shopping cart', async (t) => {
    await LoginPage.login(EMAIL,PASSWORD);
    await t.expect(await DashboardPage.dashboardUrl()).exists;
    await ShoppingPage.addItemCart();
    await ShoppingPage.shoppingCartIcon();
    await t.expect(await ShoppingPage.cartUrl()).exists;
    await ShoppingPage.verifyFirstItemCart();
    


 });

//Third Test Add multiple items to the shopping cart
// t for test controller
//Async for execute one by one
test.skip('Add multiple items to the shopping cart', async (t) => {
    await LoginPage.login(EMAIL,PASSWORD);
    await t.expect(await DashboardPage.dashboardUrl()).exists;
    await ShoppingPage.addItemCart();
    await ShoppingPage.addSecondItemCart();
    await ShoppingPage.shoppingCartIcon();
    await t.expect(await ShoppingPage.cartUrl()).exists;
    await ShoppingPage.verifyFirstItemCart();
    await ShoppingPage.verifySecondItemCart();
 });

//fourth Test Continue with missing mail information
// t for test controller
//Async for execute one by one
test.skip('Continue with missing mail information', async (t) => {
    await LoginPage.login(EMAIL,PASSWORD);
    await t.expect(await DashboardPage.dashboardUrl()).exists;
    await ShoppingPage.addItemCart();
    await ShoppingPage.addSecondItemCart();
    await ShoppingPage.shoppingCartIcon();
    await t.expect(await ShoppingPage.cartUrl()).exists;
    await ShoppingPage.verifyFirstItemCart();
    await ShoppingPage.verifySecondItemCart();
    await ShoppingPage.clickCheckOutButton();
    await t.expect(await CheckoutPage.checkoutUrl()).exists;
    await CheckoutPage.clickContinueButton();
    await CheckoutPage.fistNameErrorMessage();
    await CheckoutPage.fistNameType(FIRST_NAME);
    await CheckoutPage.clickContinueButton();
    await CheckoutPage.lastNameErrorMessage();
    await CheckoutPage.lastNameType(LAST_NAME);
    await CheckoutPage.clickContinueButton();
    await CheckoutPage.postalCodeErrorMessage();
    await CheckoutPage.postalCodeType(POSTAL_CODE);

 });


 //fifth Test Fill user’s information
// t for test controller
//Async for execute one by one
test.skip('Fill users information', async (t) => {
    await LoginPage.login(EMAIL,PASSWORD);
    await t.expect(await DashboardPage.dashboardUrl()).exists;
    await ShoppingPage.addItemCart();
    await ShoppingPage.addSecondItemCart();
    await ShoppingPage.shoppingCartIcon();
    await t.expect(await ShoppingPage.cartUrl()).exists;
    await ShoppingPage.verifyFirstItemCart();
    await ShoppingPage.verifySecondItemCart();
    await ShoppingPage.clickCheckOutButton();
    await t.expect(await CheckoutPage.checkoutUrl()).exists;
    await CheckoutPage.fistNameType(FIRST_NAME);
    await CheckoutPage.lastNameType(LAST_NAME);
    await CheckoutPage.postalCodeType(POSTAL_CODE);
    await CheckoutPage.clickContinueButton();
    await t.expect(await CheckoutPage.checkoutSecondUrl()).exists;


 });


  //sixth Test Final order items 
// t for test controller
//Async for execute one by one
test.skip('Final order items', async (t) => {
    await LoginPage.login(EMAIL,PASSWORD);
    await t.expect(await DashboardPage.dashboardUrl()).exists;
    await ShoppingPage.addItemCart();
    await ShoppingPage.addSecondItemCart();
    await ShoppingPage.shoppingCartIcon();
    await t.expect(await ShoppingPage.cartUrl()).exists;
    await ShoppingPage.verifyFirstItemCart();
    await ShoppingPage.verifySecondItemCart();
    await ShoppingPage.clickCheckOutButton();
    await t.expect(await CheckoutPage.checkoutUrl()).exists;
    await CheckoutPage.fistNameType(FIRST_NAME);
    await CheckoutPage.lastNameType(LAST_NAME);
    await CheckoutPage.postalCodeType(POSTAL_CODE);
    await CheckoutPage.clickContinueButton();
    await t.expect(await CheckoutPage.checkoutSecondUrl()).exists;
    await CheckoutPage.verifyFirstItemCart();
    await CheckoutPage.verifySecondItemCart();



 });


 //seventh Complete a purchase
// t for test controller
//Async for execute one by one
test('Complete a purchase', async (t) => {
    await LoginPage.login(EMAIL,PASSWORD);
    await t.expect(await DashboardPage.dashboardUrl()).exists;
    await ShoppingPage.addItemCart();
    await ShoppingPage.addSecondItemCart();
    await ShoppingPage.shoppingCartIcon();
    await t.expect(await ShoppingPage.cartUrl()).exists;
    await ShoppingPage.verifyFirstItemCart();
    await ShoppingPage.verifySecondItemCart();
    await ShoppingPage.clickCheckOutButton();
    await t.expect(await CheckoutPage.checkoutUrl()).exists;
    await CheckoutPage.fistNameType(FIRST_NAME);
    await CheckoutPage.lastNameType(LAST_NAME);
    await CheckoutPage.postalCodeType(POSTAL_CODE);
    await CheckoutPage.clickContinueButton();
    await t.expect(await CheckoutPage.checkoutSecondUrl()).exists;
    await CheckoutPage.verifyFirstItemCart();
    await CheckoutPage.verifySecondItemCart();
    await CheckoutPage.clickFinishButton();
    await t.expect(await CheckoutPage.checkoutCompleteUrl()).exists;
    await CheckoutPage.thankyouMessage();

    



 });