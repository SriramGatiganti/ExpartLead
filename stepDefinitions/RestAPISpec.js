let { Given, When, Then } = require('cucumber');
let EC = protractor.ExpectedConditions;
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
let apiHelper = require('../lib/api');
const axios = require('axios');
chai.use(chaiAsPromised);
let expect = chai.expect;
require('../lib/util');
var assert = require('chai').assert;
var request = require('request');
var { setDefaultTimeout } = require('cucumber');
const { response } = require('express');
var apiData = require('../testData/APIData');
setDefaultTimeout(60 * 1000);
let quick = 60000

// *****************************************************************************************************************
//
// * Project : Expart Lead Autoation Challange
// * Post_001 : Verify POST API response
// * Author : Sriram Gatiganti
//
// *****************************************************************************************************************
/*
* Test Steps  
* When I send a POST request then I see Status code and token
*/
When('I send a POST request then I see Status code and token', { timeout: quick }, async function () {

    const url = apiData.postURL1
    payload = {
        "email": apiData.email,
        "password": apiData.password
    }

    let res = await apiHelper.postRequest(url, payload);
    console.log("######## 1.When I send a POST request then I see Status code and token ########")
    console.log("Token : **** :", await res.data);
    console.log("Status Code : **** :", await res.status);
    expect(res.status).equal(apiData.statusCode1);
});

// *****************************************************************************************************************
//
// * Project : Expart Lead Autoation Challange
// * Post_002 : Verify second POST API response
// * Author : Sriram Gatiganti
//
// *****************************************************************************************************************
/*
* Test Steps  
* When I send a POST request for users then I see Status code and name, job, id, createdAt
*/
When('I send a POST request for users then I see Status code and name, job, id, createdAt', { timeout: quick }, async function () {

    const url = apiData.postURL2;
    payload = {
        "name": apiData.name,
        "job": apiData.job,
    }
    let res = await apiHelper.postRequest(url, payload);
    console.log("######## 2.When I send a POST request for users then I see Status code and name, job, id, createdAt ########")
    console.log("User details : **** :", await res.data);
    console.log("Status Code : **** :", await res.status);
    expect(res.status).equal(apiData.statusCode2);

});

// *****************************************************************************************************************
//
// * Project : Expart Lead Autoation Challange
// * Get_003 : Verify GET API response
// * Author : Sriram Gatiganti
//
// *****************************************************************************************************************
/*
* Test Steps  
* When I send a GET request for users then I see the email response
*/
When('I send a GET request for users then I see the email response', { timeout: quick }, async function () {

    const url = apiData.getURL;
    let res = await apiHelper.getRequest(url);
    console.log("######## 3.When I send a GET request for users then I see the email response ########")
    console.log("Status Code : **** :", await res.status);
    console.log("User details : **** :", await res.data.createdUser);
    expect(res.status).equal(apiData.statusCode1);
});







