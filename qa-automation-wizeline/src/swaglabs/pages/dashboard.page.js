import {t,ClientFunction,Selector} from 'testcafe';

class DashboardPage {


constructor(){
   this.menuDashboard= Selector('.bm-burger-button'); 
   this.logoutButton= Selector('#logout_sidebar_link'); 
   
}

    async dashboardUrl() {
        const getLocation = ClientFunction(() => document.location.href);
        await t.expect(getLocation()).contains('inventory');
    }

    async menuDashboardlines() {
        await t.click(this.menuDashboard);
    }

    async logutButton() {
        await t.click(this.logoutButton);
    }

    
}

export default new DashboardPage();

