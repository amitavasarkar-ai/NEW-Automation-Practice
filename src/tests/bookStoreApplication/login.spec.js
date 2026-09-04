import test from '../../support/fixture/fixture';

test.describe('Login page tests', () => {

    test.beforeEach('should navigate to login page', async ({ login }) => {
        await login.navigateToLoginPage();
    });

    test('Verify login with valid credentials', async ({ login }) => {
        await login.verifyLoginWithValidCredentials();
    });

    test('Verify login with invalid credentials', async ({ login }) => {
        await login.verifyLoginWithInvalidCredentials();
    });

    test('Verify login with empty credentials', async ({ login }) => {
        await login.verifyLoginWithEmptyCredentials();
    });
});