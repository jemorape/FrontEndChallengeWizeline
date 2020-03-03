import {Selector, t} from 'testcafe';

class LoginPage {
    
    /**
     * Constructor for Login
     */
    constructor(){
        this.emailField= Selector('#user-name');
        this.passwordField = Selector('#password');
        this.loginbutton = Selector('.btn_action');
        this.errorMessage = Selector(' form>h3'); 
    }

    async login(email, password) {
        await t.typeText(this.emailField, email)
            .typeText(this.passwordField, password)
            .click(this.loginbutton);
    }

    async loginFailed(emailfail, passwordfail) {
        await t.expect(this.errorMessage.exists).ok();
    }
}
export default new LoginPage();