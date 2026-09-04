import test from '../../support/fixture/fixture';

test.describe('Sign up page tests', () => {

    test.beforeEach('should navigate to sign up page', async ({ signUp }) => {
        await signUp.navigateToSignUpPage();
    });

    test('Visibility of elements in sign up page', async ({ signUp }) => {
        await signUp.visibilityOfElements();
    });

    test('Fill sign up form', async ({ signUp }) => {
        await signUp.fillSignupForm();
    });

    test('Error state on empty fields', async ({ signUp }) => {
        await signUp.errorStateOnEmptyFields();
    });

    test('Functionality of back to login button', async ({ signUp }) => {
        await signUp.functionalityOfBackToLoginButton();
    });
});