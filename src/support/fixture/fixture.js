import {test as base} from '@playwright/test';

import { SignUp } from '../pageMethods/signup';

const test = base.extend({
    signUp: async ({ page }, use) => {
        await use(new SignUp(page));
    },
});

export default test;