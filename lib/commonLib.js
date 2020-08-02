let EC = protractor.ExpectedConditions;
let run = require('../lib/runtimeutility');
let cLib = require('../lib/commonLib');

let commonLib = function () {


    this.click = async function (locator, elem) {
        try {
            await browser.wait(EC.and(EC.visibilityOf(elem), EC.elementToBeClickable(elem)), 30000, "Unable to Click the Element as {0} was not present".format(locator));
            await elem.click();
        } catch (e) {
            console.log(e);
            console.log("ERROR ---->Unable to Click the Element as {0} was not present".format(locator));
        }
    };

    this.enterText = async function (locator, elem, value) {
        try {
            await browser.wait(EC.and(EC.visibilityOf(elem), EC.elementToBeClickable(elem)), 30000, "Unable to enter the text as {0} is not present".format(locator));
            await elem.clear().sendKeys(value);
        }
        catch (e) {
            console.log(e);
            console.log("ERROR ----> {0} was not present".format(locator));
        }
    };

    this.enterOptions = async function (locator, elem, value) {
        try {
            await browser.wait(EC.and(EC.visibilityOf(elem), EC.elementToBeClickable(elem)), 30000, "Unable to enter the text as {0} is not present".format(locator));
            await elem.sendKeys(value);
        }
        catch (e) {
            console.log(e);
            console.log("ERROR ----> {0} was not present".format(locator));
        }
    };

    this.getText = async function (locator, elem) {
        try {
            await browser.wait(EC.and(EC.visibilityOf(elem)), 30000, "Unable to get the text as {0} is not present".format(locator));
            return await elem.getText();
        } catch (e) {
            console.log(e);
            console.log("ERROR ----> {0} was not present".format(locator));
        }
    };

    this.selectValue = async function (locator, elem, value) {
        try {
            await elem.$('[value="' + value + '"]').click();
        }
        catch (e) {
            console.log(e);
            console.log("ERROR ----> {0} was not present".format(locator));
        }
    }


    this.isCheckboxUnselected = async function (locator, elem) {
        try {
            for (let i = 0; i <= elem.count(); i++) {
                return await checkboxEle('["' + i + '"]').attr('checked').toBe(false);
            }
        } catch (e) {
            return false;
        };
    };

    this.isElementPresentFromList = async function (locator, elem, elem1) {
        try {
            for (let i = 0; i <= elem.count(); i++) {
                return await elem1.attr('presented').toBe(true);
            }
        } catch (e) {
            return false;
        };
    };

    this.isTextPresentFromList = async function (locator, elem, value) {
        try {
            for (let i = 0; i <= elem.count(); i++) {
                return await elem.toContain(value).toBe(true);
            }
        } catch (e) {
            return false;
        };
    };

    this.isElementPresent = async function (locator, elem) {
        try {
            return await elem.isPresent();
        } catch (e) {
            return false;
        };
    };

    this.isElementSelected = async function (locator, elem) {
        try {
            return await elem.isElementSelected();
        } catch (e) {
            return false;
        };
    };
}

module.exports = new commonLib();