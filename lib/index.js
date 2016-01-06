'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = main;

var _twitter = require('twitter');

var _twitter2 = _interopRequireDefault(_twitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function main() {
    var status = process.argv[2];
    var consumerKey = process.env.BBN_TT_CONSUMER_KEY;
    var consumerSecret = process.env.BBN_TT_CONSUMER_SECRET;
    var accessTokenKey = process.env.BBN_TT_ACCESS_TOKEN;
    var accessTokenSecret = process.env.BBN_TT_ACCESS_TOKEN_SECRET;
    if (!status) throw new Error('bbn-tt <status>');
    var twitter = new _twitter2.default({
        consumer_key: consumerKey,
        consumer_secret: consumerSecret,
        access_token_key: accessTokenKey,
        access_token_secret: accessTokenSecret
    });
    twitter.post('statuses/update', { status: status }, function (error, result) {
        if (error) {
            console.error(error);
        } else {
            var user = result.user;
            var id_str = result.id_str;
            var text = result.text;

            var url = 'https://twitter.com/' + user.name + '/status/' + id_str;
            var message = text + '\n' + url;
            console.log(message);
        }
    });
}