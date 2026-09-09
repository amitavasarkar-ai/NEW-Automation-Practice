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
        this.backToStoreButton = page.getByRole('button', { name: 'Back To Book Store' });
        this.profileTab = page.getByRole('link', { name: 'Profile' });
        this.deleteButton = page.locator('[title="Delete"]')
        this.deletePopup = page.locator('.modal-content')
        this.deletePopupOKButton = page.getByRole('button', { name: 'OK', exact: true });
        this.deletePopupCancelButton = page.getByRole('button', { name: 'Cancel', exact: true });
        this.deletePopupCancelButton = page.locator('[aria-label="Close"]')
        this.bookTableRows = page.locator('table tbody tr');
        this.deletePopupHeader = page.locator('.modal-header')
        this.deletePopupMessage = page.locator('.modal-body')

    }

    async navigateToBookStorePage() {
        await expect(this.goToBookStoreButton).toBeVisible();
        await this.goToBookStoreButton.click();
        await expect(this.page).toHaveURL('/books');
    }

    async visibilityOfBookStorePage() {
        const elements = [ this.searchIcon, this.userLabel, this.userName, this.logoutButton, this.bookTable, this.previousPageButton, this.nextPageButton];
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

    async functionBackToBookStoreButton() {
        await expect(this.backToStoreButton).toBeVisible();
        await this.backToStoreButton.click();
        await expect(this.page).toHaveURL('/books');
        await this.visibilityOfBookStorePage();
    }

    async deleteBookFromYourCollection() {
        await this.functionBackToBookStoreButton();
        await expect(this.profileTab).toBeVisible();
        await this.profileTab.click();
        await expect(this.bookTable).toBeVisible();
        await expect(this.deleteButton).toBeVisible();
        await this.deleteButton.click();
        this.page.once('dialog', async (dialog) => {
            expect(dialog.message()).toBe('Book deleted.');
            await dialog.accept();
        });
        await expect(this.deletePopup).toBeVisible();
        await expect(this.deletePopupOKButton).toBeVisible();
        await this.deletePopupOKButton.click();
        await expect(this.bookTableRows).toHaveCount(0);
    }

    async deletePopupVisibility() {
        await this.functionBackToBookStoreButton();
        await expect(this.profileTab).toBeVisible();
        await this.profileTab.click();
        await expect(this.bookTable).toBeVisible();
        await expect(this.deleteButton).toBeVisible();
        await this.deleteButton.click();
        await expect(this.deletePopup).toBeVisible();
        
        const elements = [this.deletePopupHeader, this.deletePopupMessage, this.deletePopupCancelButton, this.deletePopupOKButton];
        for (const element of elements) {
            await expect(element).toBeVisible();
        }

    }

   
}