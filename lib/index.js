'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = main;

var _twitter = require('twitter');

var Twitter = _interopRequireWildcard(_twitter);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function main() {
    var status = process.argv[2];
    var consumerKey = process.env.BBN_TT_CONSUMER_KEY;
    var consumerSecret = process.env.BBN_TT_CONSUMER_SECRET;
    var accessTokenKey = process.env.BBN_TT_ACCESS_TOKEN;
    var accessTokenSecret = process.env.BBN_TT_ACCESS_TOKEN_SECRET;
    if (!status) throw new Error('bbn-tt <status>');
    var twitter = new Twitter({
        consumer_key: consumerKey,
        consumer_secret: consumerSecret,
        access_token_key: accessTokenKey,
        access_token_secret: accessTokenSecret
    });
    twitter.post('statuses/update', { status: status }, function (error, result) {
        if (error) {
            console.error(error);
        } else {
            var user = result.user,
                id_str = result.id_str,
                text = result.text;

            var url = 'https://twitter.com/' + user.name + '/status/' + id_str;
            var message = text + '\n' + url;
            console.log(message);
        }
    });
}