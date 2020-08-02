let { Given, When, Then } = require('cucumber');
let EC = protractor.ExpectedConditions;
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
var assert = require('chai').assert;
var homepage = require('../pageObjects/Homepage');
var login = require('../pageObjects/Login');
var dressespage = require('../pageObjects/Dressespage');
var resgiter = require('../pageObjects/Register');
var userData = require('../testData/UserData');
var appData = require('../testData/AppData');
var { setDefaultTimeout } = require('cucumber');
const { browser } = require('protractor');
const { registerDecorator } = require('handlebars');
var assert = chai.assert;
var expect = chai.expect;
chai.use(chaiAsPromised)
require('../lib/util');
setDefaultTimeout(60 * 1000);
let quick = 60000;
let rightNow = new Date();
let cur_time = rightNow.toISOString().replace(/-|T|:|\.|Z/g, "");


// *****************************************************************************************************************
//
// * Project : Expart Lead Autoation Challange
// * Userflow_001 :Verify user Sign In
// * Author : Sriram Gatiganti
//
// *****************************************************************************************************************
/*
* Test Steps  
* Given I navigate to the Automation Practice login page
* Given I click on Sign in button
* Given I enter new user email
* Given I click on Create an account button
* Given I enter first name
* Given I enter last name
* Given I enter password
* Given I enter day
* Given I enter month
* Given I enter year
* Given I enter company name
* Given I enter address
* Given I enter city
* Given I select state
* Given I enter zip
* Given I enter mobile phone number
* When  I click resgiter button
* Then  I see the my account page
* Then  I see my First name and last name on the right top of the page
*/

Given('I navigate to the Automation Practice login page', async function () {
  let url = appData.appURL;
  await login.launchApp(url);
});

Given('I click on Sign in button', async function () {
  await homepage.clickSignInBtn();
});

Given('I enter new user email', async function () {
  NewUserEmail = "sriram" + cur_time.substring(2) +"@gatiganti.com";
  console.log("New email id is **** "+NewUserEmail)
  await login.enterCreateEmail(NewUserEmail);
});

Given('I click on Create an account button', async function () {
  await login.clickCreateAnAccountBtn();
});

Given('I enter first name', async function () {
  let FN = userData.FirstName;
  await resgiter.EnterCusFN(FN);

});

Given('I enter last name', async function () {
  let LN = userData.LastName;
  await resgiter.EnterCusLN(LN);
});

Given('I enter password', async function () {
  let pwd = userData.Password;
  await resgiter.EnterPassword(pwd);
});

Given('I enter day', async function () {
  let day = userData.Day;
  await resgiter.SelectDate(day);
});

Given('I enter month', async function () {
  let month = userData.Month;
  await resgiter.SelectMonth(month);
});

Given('I enter year', async function () {
  let year = userData.Year;
  await resgiter.SelectYear(year);
});

Given('I enter company name', async function () {
  let compny = userData.Company;
  await resgiter.EnterCompany(compny);
});

Given('I enter address', async function () {
  let addrs = userData.Address;
  await resgiter.EnterAddress(addrs);
});

Given('I enter city', async function () {
  let cty = userData.City;
  await resgiter.EnterCity(cty);
});

Given('I select state', async function () {
  let stat = userData.State;
  await resgiter.SelectState(stat);
});

Given('I enter zip', async function () {
  let zp = userData.Zip;
  await resgiter.EnterZip(zp);
});

Given('I enter mobile phone number', async function () {
  let ph = userData.Mobile;
  await resgiter.EnterMobilePhone(ph);
});

When('I click resgiter button', async function () {
  await resgiter.clickResgiterBtn();
});

Then('I see the my account page', async function () {
  let actualVal = await resgiter.getPageHeadingName();
  assert.equal(actualVal, appData.myAccountBlock);
});

Then('I see my First name and last name on the right top of the page', async function () {
  let actualVal = await resgiter.getAccountName();
  assert.equal(actualVal, (userData.FirstName + " " + userData.LastName));
});

// *****************************************************************************************************************
//
// * Project : Expart Lead Autoation Challange
// * Userflow_002 :Verify HOME page navigation
// * Author : Sriram Gatiganti
//
// *****************************************************************************************************************
/*
* Test Steps  
* When I click on Your logo image
* Then I see Home page is opened
* Then I see popular tab is selected 
* Then I see  WOMEN, DRESSES, T-SHIRTS tabs on the top
*/
When('I click on Your logo image', async function () {
  await homepage.clickLogoImg();
});

Then('I see Home page is opened', async function () {
  let actualVal = await homepage.getURL();
  assert.equal(actualVal, appData.appURL);
});

Then('I see popular tab is selected', async function () {
  await homepage.isPopularBtnSelected();
});

Then('I see  WOMEN, DRESSES, T-SHIRTS tabs on the top', async function () {
  await homepage.isWomantabPresented();
  await homepage.isDresstabPresented();
  await homepage.isTShirttabPresented();
});

// *****************************************************************************************************************
//
// * Project : Expart Lead Autoation Challange
// * Userflow_003 : Verify DRESSES page navigation
// * Author : Sriram Gatiganti
//
// *****************************************************************************************************************
/*
* Test Steps  
* When I click on DRESSES tab
* Then I see Dresses page is opened
* Then I see no checkbox is selected
* Then I see All items appeared in Grid view
*/
When('I click on DRESSES tab', async function () {
  await homepage.clickDressessTab();
});

Then('I see Dresses page is opened', async function () {
  let actualVal = await dressespage.getTitleBlock();
  assert.equal(actualVal, appData.dreessTitleBlock);
});

Then('I see no checkbox is selected', async function () {
  return await dressespage.isNocheckboxSelected();
});

Then('I see All items appeared in Grid view', async function () {
  let actualVal = await dressespage.isGridElementisSelected();
  assert.equal(actualVal, false);
});

// *****************************************************************************************************************
//
// * Project : Expart Lead Autoation Challange
// * Userflow_004 : Verify List view navigation
// * Author : Sriram Gatiganti
//
// *****************************************************************************************************************
/*
* Test Steps  
* When I click on List view
* Then I see All items appeared in Lsit view
* Then I see Price is visible for all the results
*/

When('I click on List view', async function () {
  await dressespage.clickListView();
});

Then('I see All items appeared in Lsit view', async function () {
  let actualVal = await dressespage.isListElementSelected();
  assert.equal(actualVal, false);
});

Then('I see Price is visible for all the results', async function () {
  await dressespage.isPricePresented();
});

// *****************************************************************************************************************
//
// * Project : Expart Lead Autoation Challange
// * Userflow_005 : Verify  Summer dresses filter
// * Author : Sriram Gatiganti
//
// *****************************************************************************************************************
/*
* Test Steps  
* When I click on Summer dresses filetr
* Then I see page displayes as summer dresses
* Then I see all result contain the word summer dress
*/
When('I click on Summer dresses filetr', async function () {
  await dressespage.clickSummerDressFilter();
});

Then('I see page displayes as summer dresses', async function () {
  let actualVal = await dressespage.getSummerpageTitle();
  assert.equal(actualVal, appData.SummerDressPageText);
});

Then('I see all result contain the word summer dress', async function () {
  await dressespage.foundWordExistsFromList(userData.SummerDressText)
});







