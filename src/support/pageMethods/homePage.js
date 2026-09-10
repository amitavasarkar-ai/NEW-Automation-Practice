import { expect } from '@playwright/test';
import homePageData from '../testData/homePage.json';

export class HomePage {
    constructor(page) {
        this.page = page;
        this.adBanner = this.page.locator('.home-banner');
        this.alertFrameWindowsCard = this.page.getByRole('heading', { name: homePageData.text.alertsFrameWindows });
        this.elementsGroupButton = this.page.getByText(homePageData.text.elements, { exact: true });
        this.alertsOption = this.page.getByRole('link', { name: homePageData.text.alerts });
        this.alertButton = this.page.locator('#alertButton');
        this.timerAlertButton = this.page.locator('#timerAlertButton');
        this.confirmAlertButton = this.page.locator('#confirmButton');
        this.promptAlertButton = this.page.locator('#promtButton');
        this.frameOption = this.page.getByRole('link', { name: homePageData.text.frames, exact: true });
        this.framesHeading = this.page.getByRole('heading', {name: homePageData.text.frames});
        this.firstFrame = this.page.frameLocator('#frame1');
        this.framesTitle = this.page.locator('#sampleHeading');
        this.secondFrame = this.page.frameLocator('#frame2');
        this.nestedFrameOption = this.page.getByRole('link', {name: homePageData.text.nestedFrames, exact: true});
        this.nestedFrameHeading = this.page.getByRole('heading', {name: homePageData.text.nestedFrames});
        this.parentFrame = this.page.frameLocator('#frame1');
        this.paragraphText = this.page.locator('p');
        this.sectionBody = this.page.locator('body');
        this.interactionsCard = this.page.getByText(homePageData.text.interactions, {exact: true });
        this.sortableOption = this.page.getByRole('link', { name: homePageData.text.sortable });
        this.gridButton = this.page.getByRole('tab', {name: homePageData.text.grid });
        this.gridElements = this.page.locator('#demo-tabpanel-grid');
        this.gridOne = this.page.locator('[data-handler-id="T12"]');
        this.gridSix = this.page.locator('[data-handler-id="T22"]');
        this.gridItems = this.page.locator('.create-grid .list-group-item');
        this.listItems = this.page.locator('.list-group .list-group-item');
        this.listOne = this.listItems.first();
        this.listFour = this.listItems.nth(3);
        this.selectableOption = this.page.getByRole('link', { name: homePageData.text.selectable});
        this.firstSelectable = this.page.getByRole('tabpanel', { name: homePageData.text.list }).getByText(homePageData.text.firstSelectableItem, { exact: true });
        this.firstGridSelectable = this.page.locator('.grid-container .list-group-item').first();
        this.resizable = this.page.locator('#resizable');
        this.resizableHandle = this.resizable.locator('.react-resizable-handle-se' );
        this.resizableOption = this.page.getByRole('link', { name: homePageData.text.resizable});
        this.resizableHeading = this.page.getByRole('heading', {name: homePageData.text.resizable});
        this.droppableOption = this.page.getByRole('link', {name: homePageData.text.droppable});
        this.droppableTitle = this.page.getByRole('heading', {name: homePageData.text.droppable });
        this.acceptTabButton = this.page.getByRole('tab', {  name: homePageData.text.accept});
        this.dropAcceptableElement = this.page.locator('#acceptable');
        this.droppableArea = this.page.locator('.accept-drop-container .drop-box');
        this.unacceptableElement = this.page.locator('.accept-drop-container .drag-box').last();
        this.widgetCard = this.page.getByRole('heading', {name: homePageData.text.widgets});
        this.menuOption = this.page.getByRole('link', { name: homePageData.text.menu, exact: true });
        this.menuHeading = this.page.getByRole('heading', { name: homePageData.text.menu });
        this.mainItem2 = this.page.getByText(homePageData.text.mainItem2, { exact: true });
        this.subItem = this.page.getByText(homePageData.text.subItem, { exact: true }).first();
        this.subSubList = this.page.getByText(homePageData.text.subSubList, { exact: true });
        this.subSubItem1 = this.page.getByText(homePageData.text.subSubItem1, { exact: true });
        this.sliderOption = this.page.getByRole('link', { name: homePageData.text.slider });
        this.sliderHeading = this.page.getByRole('heading', { name: homePageData.text.slider });
        this.sliderElement = this.page.locator('.range-slider');
        this.sliderValueElement = this.page.locator('#sliderValue');
        this.tooltipOption = this.page.getByRole('link', { name: homePageData.text.toolTips });
        this.tooltipHeading = this.page.getByRole('heading', { name: homePageData.text.toolTips });
        this.hoverMeButton = this.page.getByRole('button', { name: homePageData.text.hoverMeToSee });
        this.buttonHoverText = this.page.getByText(homePageData.text.hoveredOverButton);
        this.hoverTextfield = this.page.locator('#toolTipTextField');
        this.textfieldHoverText = this.page.getByText(homePageData.text.hoveredOverTextField);
        this.contraryLinkedText = this.page.getByRole('link', { name: homePageData.text.contrary });
        this.contraryHoverText = this.page.getByText(homePageData.text.hoveredOverContrary);
        this.numberHoverLinkedText = this.page.getByRole('link', { name: homePageData.text.numberLink });
        this.numberHoverText = this.page.getByText(homePageData.text.hoveredOverNumber);
        this.elementsCard = this.page.getByRole('heading', { name: homePageData.text.elements });
        this.dynamicPropertiesOption = this.page.getByRole('link', { name: homePageData.text.dynamicProperties });
        this.dynamicPropertiesHeading = this.page.getByRole('heading', { name: homePageData.text.dynamicProperties });
        this.dynamicButton1 = this.page.locator('#enableAfter');
        this.dynamicButton2 = this.page.locator('#colorChange');
        this.dynamicButton3 = this.page.locator('#visibleAfter');
        this.webTablesOption = this.page.getByRole('link', { name: homePageData.text.webTables });
        this.webTablesHeading = this.page.getByRole('heading', { name: homePageData.text.webTables });
        this.bookStoreApplicationCard = this.page.getByRole('heading', { name: homePageData.text.bookStoreApplication });
        this.loginOption = this.page.getByRole('link', { name: homePageData.text.login });
    }

    async verifyHomepageConfirmation() {
        await this.page.goto('/');
        await expect(this.adBanner).toBeVisible();
    }

    async verifyAlertFrameWindowsCardClick() {
        await expect(this.alertFrameWindowsCard).toBeVisible();
        await this.alertFrameWindowsCard.click();
        await expect(this.elementsGroupButton).toBeVisible();
    }

    async verifyAlertOptionClick() {
        await expect(this.alertsOption).toBeVisible();
        await this.alertsOption.click();
        await expect(this.alertButton).toBeVisible();
    }

    async verifyFramesOptionClick() {
        await expect(this.frameOption).toBeVisible();
        await this.frameOption.click();
        await expect(this.framesHeading).toBeVisible();
    }

    async verifyNestedFramesOptionClick() {
        await expect(this.nestedFrameOption).toBeVisible();
        await this.nestedFrameOption.click();
        await expect(this.nestedFrameHeading).toBeVisible();
    }

    async verifyInteractionsCardClick() {
        await expect(this.interactionsCard).toBeVisible();
        await this.interactionsCard.click();
        await expect(this.sortableOption).toBeVisible();
    }

    async verifyDraggingElement() {
        await expect(this.gridOne).toBeVisible();
        await this.gridOne.dragTo(this.gridSix);
    }

    async verifyListDragAndSort(source, target) {
        const itemsBefore = await this.listItems.allTextContents();

        const sourceText = (await source.textContent())?.trim();
        const targetText = (await target.textContent())?.trim();

        expect(sourceText).toBeTruthy();
        expect(targetText).toBeTruthy();

        const targetIndex = itemsBefore.indexOf(targetText);

        await source.dragTo(target, { steps: 10 });

        const itemsAfter = await this.listItems.allTextContents();

        console.log('itemsBefore:', itemsBefore);
        console.log('targetIndex:', targetIndex);
        console.log('itemsAfter:', itemsAfter);

        expect(itemsAfter[targetIndex]).toBe(sourceText);
    }

    async verifyWidgetCardClick() {
        await expect(this.widgetCard).toBeVisible();
        await this.widgetCard.click();
        await expect(this.menuOption).toBeVisible();
    }

    async verifyElementsPageNavigate() {
        await expect(this.elementsCard).toBeVisible();
        await this.elementsCard.click();
        await expect(this.dynamicPropertiesOption).toBeVisible();
    }

    async verifyDynamicPropertiesNavigate() {
        await expect(this.dynamicPropertiesOption).toBeVisible();
        await this.dynamicPropertiesOption.click();
        await expect(this.dynamicPropertiesHeading).toBeVisible();
    }

    async bookStoreCardClick() {
        await expect(this.bookStoreApplicationCard).toBeVisible();
        await this.bookStoreApplicationCard.click();
        await expect(this.loginOption).toBeVisible();
    }
}
