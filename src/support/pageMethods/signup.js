import { expect } from '@playwright/test';

export class SignUp {
    constructor(page) {
        this.page = page;
        this.bannerImage = this.page.locator('.banner-image')
        this.bookStoreCard = this.page.locator('a[href="/books"]')
        this.loginHeaderText = this.page.locator('.text-center').filter({ hasText: 'Login' })
        this.newUserButton = this.page.locator('button').filter({ hasText: 'New User' })
        this.registerHeaderText = this.page.getByRole('heading', { name: 'Register', exact: true })

    }

    async navigateToSignUpPage() {
        await this.page.goto('/login');
        await expect(this.loginHeaderText).toBeVisible();
        await expect(this.newUserButton).toBeVisible();
        await this.newUserButton.click();
        await expect(this.page).toHaveURL('/register');
        await expect(this.registerHeaderText).toBeVisible();
    }

   
} 