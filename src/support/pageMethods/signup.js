import { expect } from '@playwright/test';
import signupData from '../testData/signup.json';
export class SignUp {
    constructor(page) {
        this.page = page;
        this.bannerImage = this.page.locator('.banner-image')
        this.bookStoreCard = this.page.locator('a[href="/books"]')
        this.loginHeaderText = this.page.locator('.text-center').filter({ hasText: signupData.text.login })
        this.newUserButton = this.page.locator('button').filter({ hasText: signupData.text.newUser })
        this.registerHeaderText = this.page.getByRole('heading', { name: signupData.text.register, exact: true })
        this.subHeaderText = this.page.locator('form h4')
        this.firstNameField = this.page.locator('#firstname')
        this.lastNameField = this.page.locator('#lastname')
        this.userNameField = this.page.locator('#userName')
        this.passwordField = this.page.locator('#password')
        this.registerButton = this.page.locator('#register')
        this.backToLoginButton = this.page.getByRole('button', { name: signupData.text.backToLogin })
    }

    async navigateToSignUpPage() {
        await this.page.goto('/login');
        await expect(this.loginHeaderText).toBeVisible();
        await expect(this.newUserButton).toBeVisible();
        await this.newUserButton.click();
        await expect(this.page).toHaveURL('/register');
        await expect(this.registerHeaderText).toBeVisible();
    }

    async visibilityOfElements() {

        const elements = [this.registerHeaderText, this.subHeaderText, this.firstNameField, this.lastNameField, this.userNameField, this.passwordField, this.registerButton, this.backToLoginButton];
        for (const element of elements) {
            await expect(element).toBeVisible();
        }
    }

    async fillSignupForm(){
        await this.firstNameField.fill(signupData.formData.firstName);
        await expect(this.firstNameField).toHaveValue(signupData.formData.firstName);
        await this.lastNameField.fill(signupData.formData.lastName);
        await expect(this.lastNameField).toHaveValue(signupData.formData.lastName);
        await this.userNameField.fill(signupData.formData.userName);
        await expect(this.userNameField).toHaveValue(signupData.formData.userName);
        await this.passwordField.fill(signupData.formData.password);
        await expect(this.passwordField).toHaveValue(signupData.formData.password);
        this.page.on('dialog', async (dialog) => {
            await expect(dialog).toHaveText(signupData.text.userRegisteredSuccessfully);
            await dialog.accept();
        });
        await this.registerButton.click(); 
    }

    async errorStateOnEmptyFields(){
        await this.registerButton.click();
        const elements = [this.firstNameField, this.lastNameField, this.userNameField, this.passwordField] 
        for (const element of elements) {
            await expect(element).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        }
    }

    async functionalityOfBackToLoginButton(){
        await expect(this.backToLoginButton).toBeVisible();
        await this.backToLoginButton.click();
        await expect(this.page).toHaveURL('/login');
        await expect(this.loginHeaderText).toBeVisible();
        await expect(this.newUserButton).toBeVisible();
    }
} 