'use strict';

module.exports.vehiclesDetail = (event, context, callback) => {
var request = require('request');
 
var options = {
  url: 'https://private-anon-0c13d3d9f3-timdorr.apiary-mock.com/api/1/vehicles',
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
          "Access-Control-Allow-Credentials" : true 
        },
        body: JSON.parse(body)
      }

  callback(null, res);
  }
}
 
request(options, callbacktesla);

};
