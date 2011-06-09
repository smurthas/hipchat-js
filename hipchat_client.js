/*
 * hipchat-js
 *
 * Copyright (c) 2011 Simon Murtha-Smith <simon@murtha-smith.com>
 */
 
var querystring = require('querystring');
var request = require('request');

var baseUrl = 'https://api.hipchat.com/v1';

var Client = function(auth_token) {
    this.apiCall = function (method, path, params, callback) {
        callback = callback || function () {};
        params.format = 'json';
        params.auth_token = auth_token;
        request({
            method: method, 
            uri: baseUrl + path + '?' + querystring.stringify(params)
        }, function (err, resp, body) {
            if(err)
                callback(err, body);
            else {
                try {
                    callback(null, JSON.parse(body));
                } catch(e) {
                    callback(e, body);
                }
            }
        });
    };
};

module.exports = function(auth_token) {
    return new Client(auth_token);
}
