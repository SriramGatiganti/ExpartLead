let EC = protractor.ExpectedConditions;
var lg = require('./Login');
let cLib = require('../lib/commonLib');

let login = function () {

    //Locators
    let userNameCreate = '//input[@id="email_create"]';
    let createAccountBtn = '//button[contains(@id, "SubmitCreate")]';

    //Elements
    let userNameCreateEle = element(by.xpath(userNameCreate));
    let creatAccountBtnEle = element(by.xpath(createAccountBtn));

// *****************************************************************************************************************
//
// * Function: Launch the application
// * Description:Launch the application
// * Parameters: url
// * Author : Sriram Gatiganti
//
// *****************************************************************************************************************
this.launchApp = async function (url) {
    await console.log("Launching url - {0}".format(url))
    await browser.waitForAngularEnabled(false)
    await browser.get(url);
    await browser.driver.manage().window().maximize();
}
// *****************************************************************************************************************
//
// * Function: Enter New Email
// * Description:Enter New Email
// * Parameters: new email
// * Author : Sriram Gatiganti
//
// *****************************************************************************************************************
this.enterCreateEmail = async function (newEmail) {
    await cLib.enterText(userNameCreate, userNameCreateEle, newEmail);
}
// *****************************************************************************************************************
//
// * Function: Click create account button
// * Description:Click create account button
// * Parameters: 
// * Author : Sriram Gatiganti
//
// *****************************************************************************************************************
this.clickCreateAnAccountBtn = async function () {
    await cLib.click(createAccountBtn, creatAccountBtnEle);
}

}

module.exports = new login();