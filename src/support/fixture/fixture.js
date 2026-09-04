import {test as base} from '@playwright/test';

import { SignUp } from '../pageMethods/signup';
import { Login } from '../pageMethods/login';

const test = base.extend({
    signUp: async ({ page }, use) => {
        await use(new SignUp(page));
    },

    login: async ({ page }, use) => {
        await use(new Login(page));
    },
});



export default test;