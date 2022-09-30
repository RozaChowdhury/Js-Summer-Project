class Commands{

    async waitUntilWebpageLoads(value){
        await browser.waitUntil(async () => {
            const pageTitle = await browser.getTitle();
            return pageTitle.toLowerCase().includes(value);
        }, {timeout:5000, timeoutMsg:'Page did not load'});
    }
    async findWebElement(locator) {
        await $(locator).waitForDisplayed();
        return await $(locator);
    }

    async findClickableWebElement(locator) {
        await $(locator).waitForClickable();
        return await $(locator);
    }

    async findWebElements(locator) {
        await browser.waitUntil(async () => {
            const elements = await $$(locator);
            return elements.length > 0;
        });
        return await $$(locator);
    }

    async clickWebElement(locator) {
        const element = await this.findWebElement(locator);
        await element.click();
    }

    async scrollAndFindWebElement(locator) {
        const element = await this.findWebElement(locator);
        await element.scrollIntoView();
        // await element.click();
    }
    async scrollAndClickWebElement(locator) {
        const element = await this.findWebElement(locator);
        await element.scrollIntoView();
        await element.click();
    }

    

    async typeInWebElement(locator, data) {
        const element = await this.findWebElement(locator);
        await element.setValue(data);
    }

    async isWebElementEnabled(locator) {
        const element = await $(locator);
        return await element.isEnabled();
    }

    async isWebElementDisplayed(locator) {
        const element = await $(locator);
        return await element.isDisplayed();
    }

    async isWebElementDisplayedWithWait(locator) {
        await $(locator).waitForDisplayed();
        return await $(locator).isDisplayed();
    }

    async selectFromDropdown(locator, num) {
        const dropdownElement = await this.findWebElement(locator);
        await dropdownElement.selectByVisibleText(num);
    }

    async getTextFromWebElement(locator) {
        const element = await this.findWebElement(locator);
        return await element.getText();
    }
    async getAllWindowHandles() {
        await browser.waitUntil(async () => {
            const allHandles = await browser.getWindowHandles();
            return allHandles.length > 1;
        });
        return await browser.getWindowHandles();
    }

    async getCurrentWindowHandle() {
        return await browser.getWindowHandle();
    }

    async switchToWindowHandle(handle) {
        await browser.switchToWindow(handle);
    }

    async closeWebWindow() {
        await browser.closeWindow();
    }
 
    async getWindowsCount() {
        const allHandles = await this.getAllWindowHandles();
        return allHandles.length;
    }

    async getWindowTitle() {
        return await browser.getTitle();
    }
    async selectDropdownByVisibleText(locator, num){
        const element = await this.findWebElement(locator);
        await element.selectByVisibleText(num+1); 
    }
    async maximizeScreen(){
        await browser.maximizeWindow();
    }
    async selectFromAutoSuggestions(locatorForAutoSuggestionElements, valueToSelect) {
        const autoSuggestionElements = await this.findWebElements(locatorForAutoSuggestionElements);

        for (const autoSuggestionElement of autoSuggestionElements) {
            const suggestionText = await autoSuggestionElement.getText();
            if (suggestionText.toLowerCase().localeCompare(valueToSelect.toLowerCase()) === 0) {
                await autoSuggestionElement.click();
                break;
            }
        }
    }
    async selectDateFromCalendar(monthHeadingLocator, goToNextMonthLocator, allDatesLocator, dateToSelect) {
        for (let i=1 ; i <= 12 ; i++) {
            const monthSeen = await this.isWebElementDisplayed(monthHeadingLocator);
            if (monthSeen) {
                break;
            }
            await this.clickWebElement(goToNextMonthLocator);
        }
        const allDateElements = await this.findWebElements(allDatesLocator);
        for (const dateElement of allDateElements) {
            const date = await dateElement.getAttribute('data-day');
            if (date.localeCompare(dateToSelect) === 0) {
                await dateElement.click();
                break;
            }
        }
    }


}
module.exports = Commands;