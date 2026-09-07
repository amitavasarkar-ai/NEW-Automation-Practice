import {test as base} from '@playwright/test';

import { SignUp } from '../pageMethods/signup';
import { Login } from '../pageMethods/login';
import { BookStore } from '../pageMethods/bookStore';

const test = base.extend({
    signUp: async ({ page }, use) => {
        await use(new SignUp(page));
    },

    login: async ({ page }, use) => {
        await use(new Login(page));
    },

    bookStore: async ({ page }, use) => {
        await use(new BookStore(page));
    },
});



export default test;