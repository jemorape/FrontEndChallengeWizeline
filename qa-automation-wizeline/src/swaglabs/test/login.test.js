import LoginPage from '../pages/login.page.js';
import DashboardPage from '../pages/dashboard.page.js';

fixture('Login Tests').page('https://www.saucedemo.com/');


const EMAIL = "standard_user";
const PASSWORD = "secret_sauce";
const PASSWORD_FAIL = "WRONGPASSWORD.";


//First Test Login with a valid user
// t for test controller
//Async for execute one by one
test('Login successful', async (t) => {
    await LoginPage.login(EMAIL,PASSWORD);
    await t.expect(await DashboardPage.dashboardUrl()).exists;

 
 });


 //Second Test Login with an invialid user
// t for test controller
//Async for execute one by one
test('Login with invalid user', async (t) => {
    await LoginPage.login(EMAIL,PASSWORD_FAIL);
    await t.expect(await LoginPage.loginFailed()).exists;

 });

 
