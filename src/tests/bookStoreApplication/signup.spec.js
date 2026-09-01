import test from '../../support/fixture/fixture';

test.describe('Sign up page tests', () => {

    test.only('should navigate to sign up page', async ({ signUp }) => {
        await signUp.navigateToSignUpPage();
    });
});