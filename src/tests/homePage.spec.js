import test from '../support/fixture/fixture';

test.describe('Home Page', () => {

    test.beforeEach('Verify homepage navigation', async ({ homePage }) => {
        await homePage.verifyHomepageConfirmation();
    });

    test('Verify Alert, Frame and Windows section button click on homepage', async ({ homePage }) => {
        await homePage.verifyAlertFrameWindowsCardClick();
    });

    test('Verify Alert option selection on Item selection page', async ({ homePage }) => {
        await homePage.verifyAlertFrameWindowsCardClick();
        await homePage.verifyAlertOptionClick();
    });

    test('Verify navigating Frames page', async ({ homePage }) => {
        await homePage.verifyAlertFrameWindowsCardClick();
        await homePage.verifyFramesOptionClick();
    });

    test('Verify Interactions button click on homepage', async ({ homePage }) => {
        await homePage.verifyInteractionsCardClick();
    });

    test('Verify Widget section button click on homepage', async ({ homePage }) => {
        await homePage.verifyWidgetCardClick();
    });

    test('Verify Elements section button click on homepage', async ({ homePage }) => {
        await homePage.verifyElementsPageNavigate();
    });

    test('Verify navigating Dynamic Properties on Elements page', async ({ homePage }) => {
        await homePage.verifyElementsPageNavigate();
        await homePage.verifyDynamicPropertiesNavigate();
    });

    test('Verify navigating Book Store Application page', async ({ homePage }) => {
        await homePage.bookStoreCardClick();
    });

})