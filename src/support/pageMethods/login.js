import { expect } from '@playwright/test';
import signupData from '../testData/signup.json';

export class Login {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#userName');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.errorMessage = page.getByText('Invalid username or password!');
    }

    async navigateToLoginPage() {
        await this.page.goto('/login');
        await expect(this.page).toHaveURL('/login');
    }

    async verifyLoginWithValidCredentials() {
        await this.usernameInput.fill(signupData.formData.userName)  ;
        await expect(this.usernameInput).toHaveValue(signupData.formData.userName);
        await this.passwordInput.fill(signupData.formData.password);
        await expect(this.passwordInput).toHaveValue(signupData.formData.password);
        await this.loginButton.click();
        await expect(this.page).toHaveURL('/profile')
    }

    async verifyLoginWithInvalidCredentials() {
        await this.usernameInput.fill('invalid_username');
        await expect(this.usernameInput).toHaveValue('invalid_username');
        await this.passwordInput.fill('invalid_password');
        await expect(this.passwordInput).toHaveValue('invalid_password');
        await this.loginButton.click();
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText('Invalid username or password!');
    }

    async verifyLoginWithEmptyCredentials() {
        await this.loginButton.click();
        const elements = [this.usernameInput, this.passwordInput] 
        for (const element of elements) {
            await expect(element).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        }
    }


}