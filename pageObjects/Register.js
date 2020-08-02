let EC = protractor.ExpectedConditions;
var lg = require('./Register');
let cLib = require('../lib/commonLib');

let register = function () {

    //Locators
    let gender1 = '//input[@id="id_gender1"]';
    let gender2 = '//input[@id="id_gender2"]';
    let custFirstName = '//input[@id="customer_firstname"]';
    let custLastName = '//input[@id="customer_lastname"]';
    let email = '//input[@id="email"]';
    let password = '//input[@id="passwd"]';
    let day = '//select[@id="days"]';
    let month = '//select[@id="months"]';
    let year = '//select[@id="years"]';
    let newsLetters = '//input[@id="newsletter"]';
    let optIn = '//input[@id="optin"]';
    let fistName = '//input[@id="firstname"]';
    let lastName = '//input[@id="lastname"]';
    let company = '//input[@id="company"]';
    let address = '//input[@id="address1"]';
    let address2 = '//input[@id="address2"]';
    let city = '//input[@id="city"]';
    let state = '//select[@id="id_state"]';
    let zip = '//input[@id="postcode"]';
    let country = '//select[@id="id_country"]';
    let additionalTxt = '//textarea[@id="other"]';
    let HomePhone = '//input[@id="phone"]';
    let mobilePhone = '//input[@id="phone_mobile"]';
    let aliasAddress = '//input[@id="alias"]';
    let resgisterBtn = '//span[contains(text(),"Register")]';
    let pageHeading = '//h1[@class="page-heading"]';
    let accountName = '//a[@class="account"]';

    //Elements
    let gender1Ele = element(by.xpath(gender1));
    let gender2Ele = element(by.xpath(gender2));
    let custFirstNameEle = element(by.xpath(custFirstName));
    let custLastNameeEle = element(by.xpath(custLastName));
    let emailEle = element(by.xpath(email));
    let passwordEle = element(by.xpath(password));
    let dayEle = element(by.xpath(day));
    let monthEle = element(by.xpath(month));
    let yearEle = element(by.xpath(year));
    let newsLettersEle = element(by.xpath(newsLetters));
    let optInEle = element(by.xpath(optIn));
    let fistNameEle = element(by.xpath(fistName));
    let lastNameEle = element(by.xpath(lastName));
    let companyEle = element(by.xpath(company));
    let addressEle = element(by.xpath(address));
    let address2Ele = element(by.xpath(address2));
    let cityEle = element(by.xpath(city));
    let stateEle = element(by.xpath(state));
    let zipEle = element(by.xpath(zip));
    let countryEle = element(by.xpath(country));
    let additionalTxtEle = element(by.xpath(additionalTxt));
    let HomePhoneEle = element(by.xpath(HomePhone));
    let mobilePhoneEle = element(by.xpath(mobilePhone));
    let aliasAddressEle = element(by.xpath(aliasAddress));
    let resgisterBtnEle = element(by.xpath(resgisterBtn));
    let pageHeadingEle = element(by.xpath(pageHeading));
    let accountNameEle = element(by.xpath(accountName));


// ***********************************************************************
//
// * Function: Enter Customer First name
// * Description:Enter Customer First name
// * Parameters: 
// * Author : Sriram Gatiganti
//
// ************************************************************************

this.EnterCusFN = async function (strFN) {
    await cLib.enterText(custFirstName, custFirstNameEle, strFN);
}
// ***********************************************************************
//
// * Function: Enter Customer Last name
// * Description:Enter Customer Last name
// * Parameters: 
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.EnterCusLN = async function (strLN) {
    await cLib.enterText(custLastName, custLastNameeEle, strLN);
}
// ***********************************************************************
//
// * Function: Enter Email
// * Description:Enter Email
// * Parameters: email
// * Author : Sriram Gatiganti
//
// ************************************************************************

this.EnterEmail = async function (strEmail) {
    await cLib.enterText(email, emailEle, strEmail);
}
// ***********************************************************************
//
// * Function: Enter Password
// * Description:Enter Password
// * Parameters: password
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.EnterPassword = async function (strPasswod) {
    await cLib.enterText(password, passwordEle, strPasswod);
}
// ***********************************************************************
//
// * Function: Select day
// * Description:Select day
// * Parameters: Day
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.SelectDate = async function (strDate) {
    await cLib.selectValue(day, dayEle, strDate)
}
// ***********************************************************************
//
// * Function: Select month
// * Description:Select month
// * Parameters: month number
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.SelectMonth = async function (strMonth) {
    await cLib.selectValue(month, monthEle, strMonth)
}
// ***********************************************************************
//
// * Function: Select year
// * Description:Select year
// * Parameters: year
// * Author : Sriram Gatiganti
//
// ************************************************************************

this.SelectYear = async function (strYear) {
    await cLib.selectValue(year, yearEle, strYear)
}

// ***********************************************************************
//
// * Function: Enter Company name
// * Description:Enter Company name
// * Parameters: company name
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.EnterCompany = async function (strCompany) {
    await cLib.enterText(company, companyEle, strCompany);
}

// ***********************************************************************
//
// * Function: Enter city name
// * Description:Enter city name
// * Parameters: city
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.EnterCity = async function (strCity) {
    await cLib.enterText(city, cityEle, strCity);
}

// ***********************************************************************
//
// * Function: Enter address
// * Description:Enter address
// * Parameters: 
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.EnterAddress = async function (strAddress) {
    await cLib.enterText(address, addressEle, strAddress);
}


// ***********************************************************************
//
// * Function: Select state
// * Description:Select state
// * Parameters: State name
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.SelectState = async function (strState) {
    await cLib.selectValue(state, stateEle, strState)
}

// ***********************************************************************
//
// * Function: Enter zip code
// * Description:Enter zip code
// * Parameters: Zip code
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.EnterZip = async function (strZip) {
    await cLib.enterText(zip, zipEle, strZip);
}


// ***********************************************************************
//
// * Function: Enter mobile number
// * Description:Enter mobile number
// * Parameters: Mobile number
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.EnterMobilePhone = async function (strMobilePhone) {
    await cLib.enterText(mobilePhone, mobilePhoneEle, strMobilePhone);
}


// ***********************************************************************
//
// * Function: Click on Register button
// * Description:CClick on Register button
// * Parameters: 
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.clickResgiterBtn = async function () {
    await cLib.click(resgisterBtn, resgisterBtnEle);
}

// ***********************************************************************
//
// * Function: Get page name
// * Description:Get page name
// * Parameters: 
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.getPageHeadingName = async function () {
    return await cLib.getText(pageHeading, pageHeadingEle);
}
// ***********************************************************************
//
// * Function: Get account name
// * Description:Get account name
// * Parameters: 
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.getAccountName = async function () {
    return await cLib.getText(accountName, accountNameEle);
}

}

module.exports = new register();