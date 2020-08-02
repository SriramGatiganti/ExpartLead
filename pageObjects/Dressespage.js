let EC = protractor.ExpectedConditions;
var lg = require('./Dressespage');
let cLib = require('../lib/commonLib');

let dressespage = function () {

//Locators
let titleBlock = '//h2[@class="title_block"]';
let grid = '//i[@class="icon-th-large"]';
let checkbox = 'input[class="checkbox"]';
let price = '//div[@class="content_price col-xs-5 col-md-12"]//span[@class="price product-price"][contains(text(),"")]';
let productList = '//div[contains(@class,"product-container")]'
let listView = '//i[@class="icon-th-list"]';
let summerdressFilter = '//a[@class="subcategory-name"][contains(text(),"Summer Dresses")]';
let summerdressPageName = '//span[@class="category-name"]';
let summerProductList = '//a[contains(@class,"product-name")]';

//Elements
let titleBlockEle = element(by.xpath(titleBlock));
let gridEle = element(by.xpath(grid));
let checkboxEle = element.all(by.xpath(checkbox));
let priceEle = element.all(by.xpath(price));
let productListEle = element.all(by.xpath(productList));
let listViewEle = element(by.xpath(listView));
let summerdressFilterEle = element(by.xpath(summerdressFilter));
let summerdressPageNameEle = element(by.xpath(summerdressPageName));
let summerProductListEle = element.all(by.xpath(summerProductList));

// ***********************************************************************
//
// * Function: Get the titke block 
// * Description:Get the titke block text
// * Parameters: 
// * Author : Sriram Gatiganti
//
// ************************************************************************   
this.getTitleBlock = async function () {
    return await cLib.getText(titleBlock, titleBlockEle);
}

// ***********************************************************************
//
// * Function: Grid elemement is selected
// * Description:Click create account button
// * Parameters: 
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.isGridElementisSelected = async function () {
    return await cLib.isElementSelected(grid, gridEle);
}
// ***********************************************************************
//
// * Function: List element is selected
// * Description:List element is selected
// * Parameters: 
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.isListElementSelected = async function () {
    return await cLib.isElementSelected(listView, listViewEle);
}
// ***********************************************************************
//
// * Function: NO checkbox is selected
// * Description:No check is selected 
// * Parameters: 
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.isNocheckboxSelected = async function () {
    await cLib.isCheckboxUnselected(checkbox, checkboxEle);
}
// ***********************************************************************
//
// * Function: Price is presented 
// * Description:Price is presented on list 
// * Parameters: 
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.isPricePresented = async function () {
    await cLib.isElementPresentFromList(productList, productListEle, priceEle);
}
// ***********************************************************************
//
// * Function: Click on list view 
// * Description:Click on list view
// * Parameters: 
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.clickListView = async function () {
    await cLib.click(listView, listViewEle);
}
// ***********************************************************************
//
// * Function: Click on summer dress filter 
// * Description:Click on summer dress filter 
// * Parameters: 
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.clickSummerDressFilter = async function () {
    await cLib.click(summerdressFilter, summerdressFilterEle);
}
// ***********************************************************************
//
// * Function: Click create account button
// * Description:Click create account button
// * Parameters: 
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.getSummerpageTitle = async function () {
    return await cLib.getText(summerdressPageName, summerdressPageNameEle);
}
// ***********************************************************************
//
// * Function: Found word exist
// * Description:Found given word exist
// * Parameters: 
// * Author : Sriram Gatiganti
//
// ************************************************************************
this.foundWordExistsFromList = async function (word) {
    return await cLib.isTextPresentFromList(summerProductList, summerProductListEle, word);

}

}

module.exports = new dressespage();