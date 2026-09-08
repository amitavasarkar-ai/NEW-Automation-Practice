import test from '../../support/fixture/fixture';

test.describe('Book Store page tests', () => { 

    test.beforeEach('should navigate to book store page', async ({ login, bookStore }) => {
        await login.navigateToLoginPage();
        await login.verifyLoginWithValidCredentials();
        await bookStore.navigateToBookStorePage();
    });

    test('Verify visibility of book store page', async ({ bookStore }) => {
        await bookStore.visibilityOfBookStorePage();
    });

    test('Verify selecting book', async ({ bookStore }) => {
        await bookStore.selectingBook();
    });

    test('Add book to your collection', async ({ bookStore }) => {
        await bookStore.selectingBook();
        await bookStore.addBookToYourCollection();
        await bookStore.deleteBookFromYourCollection();
    });

    test('Back to book store page', async ({ bookStore }) => {
        await bookStore.selectingBook();
        await bookStore.addBookToYourCollection();
        await bookStore.functionBackToBookStoreButton();
    });

    test('Delete book from your collection', async ({ bookStore }) => {
        await bookStore.selectingBook();
        await bookStore.addBookToYourCollection();
        await bookStore.deleteBookFromYourCollection();
    })

    test('visibility of delete popup', async ({ bookStore }) => {
        await bookStore.selectingBook();
        await bookStore.addBookToYourCollection();
        await bookStore.deleteBookFromYourCollection();
        //await bookStore.visibilityOfDeletePopup();
    })
})