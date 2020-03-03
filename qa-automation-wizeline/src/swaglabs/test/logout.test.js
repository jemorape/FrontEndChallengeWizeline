import LoginPage from '../pages/login.page.js';
import DashboardPage from '../pages/dashboard.page.js';

fixture('Logout Tests').page('https://www.saucedemo.com/');

const EMAIL = "standard_user";
const PASSWORD = "secret_sauce";
const PASSWORD_FAIL = "WRONGPASSWORD.";


 //First Test Logout from products page
// t for test controller
//Async for execute one by one
test('Logout from products page', async (t) => {
    await LoginPage.login(EMAIL,PASSWORD);
    await DashboardPage.menuDashboardlines();
    await DashboardPage.logoutButton();


 });