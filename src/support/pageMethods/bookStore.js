import { expect } from '@playwright/test';

export class BookStore {
    constructor(page) {
        this.page = page;
        this.goToBookStoreButton = page.getByRole('button', { name: 'Go To Book Store' });
        this.searchField = page.locator('#searchBox');
        this.searchIcon = page.locator('[type="button"].btn-outline-secondary');
        this.userLabel = page.locator('#userName-label')
        this.userName = page.locator('#userName-value')
        this.logoutButton = page.getByRole('button', { name: 'Log out' });
        this.bookTable = page.locator('div table')
        this.previousPageButton = page.getByRole('button', { name: 'Previous' });
        this.nextPageButton = page.getByRole('button', { name: 'Next' });
        this.bookTitles = page.locator('td .action-buttons span a')
        this.bookStoreHeader = page.locator('h1.text-center')
        this.addToYourCollectionButton = page.getByRole('button', { name: 'Add To Your Collection' });
    }

    async navigateToBookStorePage() {
        await expect(this.goToBookStoreButton).toBeVisible();
        await this.goToBookStoreButton.click();
        await expect(this.page).toHaveURL('/books');
    }

    async visibilityOfBookStorePage() {
        const elements = [this.searchField, this.searchIcon, this.userLabel, this.userName, this.logoutButton, this.bookTable, this.previousPageButton, this.nextPageButton];
        for (const element of elements) {
            await expect(element).toBeVisible();
        }
    }

    async selectingBook() {
        const book = this.page
            .locator('table tbody tr')
            .filter({ hasText: "You Don't Know JS" })
            .getByRole('link', { name: "You Don't Know JS" });

            
        await expect(book).toBeVisible();
        await book.click();
        await expect(this.addToYourCollectionButton).toBeVisible();
    }

    async addBookToYourCollection() {
        await expect(this.addToYourCollectionButton).toBeVisible();

        this.page.once('dialog', async (dialog) => {
            expect(dialog.message()).toBe('Book added to your collection.');
            await dialog.accept();
        });

        await this.addToYourCollectionButton.click();
    }
}