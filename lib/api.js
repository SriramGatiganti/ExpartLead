const axios = require('axios');


let apiHelper = function () {

    this.postRequest = async function (getAPIUrl, dataPayload) {

        try {
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };

            const response = await axios({
                method: 'post',
                url: getAPIUrl,
                data: dataPayload,
                headers: headers,
            });

            return await response;
        } catch (error) {

            console.log('Failed to execute POST request' + url & 'Found error as ', error)

        }
    }

    this.getRequest = async function (getAPIUrl) {

        try {
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };

            const response = await axios({
                method: 'get',
                url: getAPIUrl,
                headers: headers,
            });

            return await response;
        } catch (error) {

            console.log('Failed to execute GET request' + url & 'Found error as ', error)

        }
    }


}

module.exports = new apiHelper();

