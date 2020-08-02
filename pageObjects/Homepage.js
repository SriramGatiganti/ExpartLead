let EC = protractor.ExpectedConditions;
var lg = require('./Homepage');
let cLib = require('../lib/commonLib');
const { browser } = require('protractor');

let homepage = function () {

//Locators
let signInBtn = '//a[@class="login"]';
let logoImg = '//img[@class="logo img-responsive"]';
let womanTab = '//a[@class="sf-with-ul"][contains(text(),"Women")]';
let dressTab = '//body[@id="index"]/div[@id="page"]/div[@class="header-container"]/header[@id="header"]/div/div[@class="container"]/div[@class="row"]/div[@id="block_top_menu"]/ul[@class="sf-menu clearfix menu-content sf-js-enabled sf-arrows"]/li[2]/a[1]';
let tshirtsTab = '//body[@id="index"]/div[@id="page"]/div[@class="header-container"]/header[@id="header"]/div/div[@class="container"]/div[@class="row"]/div[@id="block_top_menu"]/ul[@class="sf-menu clearfix menu-content sf-js-enabled sf-arrows"]/li[3]/a[1]';
let popularBtn = '//a[@class="homefeatured"]';

//Elements
let signInBtnEle = element(by.xpath(signInBtn));
let logoImgEle = element(by.xpath(logoImg));
let womanTabEle = element(by.xpath(womanTab));
let dressTabEle = element(by.xpath(dressTab));
let tshirtsTabEle = element(by.xpath(tshirtsTab));
let popularBtnEle = element(by.xpath(popularBtn));

// ***********************************************************************
//
// * Function: Get current url 
// * Description:Get current url 
// * Parameters: 
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.getURL = async function () {
    return await browser.getCurrentUrl();

}
// ***********************************************************************
//
// * Function: Click sign on button
// * Description:Click sign on button
// * Parameters: 
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.clickSignInBtn = async function () {
    await cLib.click(signInBtn, signInBtnEle);
}
// ***********************************************************************
//
// * Function: Click on logo image
// * Description:Click on logo image
// * Parameters: 
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.clickLogoImg = async function () {
    await cLib.click(logoImg, logoImgEle);
}
// ***********************************************************************
//
// * Function: Click on dress tab
// * Description:Click on dress tab
// * Parameters: 
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.clickDressessTab = async function () {
    await cLib.click(dressTab, dressTabEle);
}
// ***********************************************************************
//
// * Function: Is woeman tab is presented 
// * Description:Is woeman tab is presented 
// * Parameters: 
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.isWomantabPresented = async function () {
    await cLib.isElementPresent(womanTab, womanTabEle)
}
// ***********************************************************************
//
// * Function: Is dress tab is presented 
// * Description:Is dress tab is presented 
// * Parameters: 
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.isDresstabPresented = async function () {
    await cLib.isElementPresent(dressTab, dressTabEle)
}

// ***********************************************************************
//
// * Function: Is Tshirt tab is presented 
// * Description:Is Tshirt tab is presented 
// * Parameters: 
// * Author : Sriram Gatiganti
//
// ************************************************************************   
this.isTShirttabPresented = async function () {
    await cLib.isElementPresent(tshirtsTab, tshirtsTabEle)
}
// ***********************************************************************
//
// * Function: Is popular button is selected
// * Description:Is popular button is selecteds
// * Parameters: 
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.isPopularBtnSelected = async function () {
    await cLib.isElementSelected(popularBtn, popularBtn)
}

}

module.exports = new homepage();