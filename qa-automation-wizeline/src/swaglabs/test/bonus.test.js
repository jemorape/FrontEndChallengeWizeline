import LoginPage from '../pages/login.page.js';
import DashboardPage from '../pages/dashboard.page.js';
import { Role } from 'testcafe';

fixture('Bonus Challenge').page('https://www.saucedemo.com/');

const dataSet = require('../dataProvider/data.json');

//Test with Roles and Data providers
// t for test controller
//Async for execute one by one
dataSet.forEach(data => {
    const standarAccUser = Role('https://www.saucedemo.com/', async t => {
    await t
        .typeText('#user-name', data.userName)
        .typeText('#password', data.password)
        .click('.btn_action');
    });


test('Login users', async (t) => {
    await t.useRole(standarAccUser);
   

});
    
});



 
