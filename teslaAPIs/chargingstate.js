'use strict';

module.exports.chargingState = (event, context, callback) => {
var request = require('request');
var stripJsonComments = require('strip-json-comments');
 
var options = {
  url: 'https://private-anon-8de05026ee-timdorr.apiary-mock.com/api/1/vehicles/1234567890/data_request/charge_state',
  headers: {
      'Authorization': 'Bearer <token>'
    }
};
 
function callbacktesla(error, response, body) {
  if (!error && response.statusCode == 200) {
    const res = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Credentials" : true 
      },
      body: JSON.parse(stripJsonComments(body))
    }
    callback(null, res);
  }
}
 
request(options, callbacktesla);

};
