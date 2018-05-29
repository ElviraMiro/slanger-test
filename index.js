const fs = require('fs')
const yaml = require('js-yaml')
const Pusher = require('pusher-js')
const axios = require('axios')

const config = require('./config')


axios({
    method: "post",
    url: config.JWT_URL,
    data: config.BARONG_USER
}).then(function(response) {
    var jwt = response.data
    console.log("get jwt")
    console.log(jwt)
    axios({
        method: "get",
        url: config.MEMBER_URL,
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    }).then(function(response) {
        var sn = response.data.sn,
            private_channel = `private-${sn}`
        console.log("get member")
        console.log(response.data)
        var pusher = new Pusher({
            key: config.PUSHER_KEY,
            wsHost: config.PUSHER_HOST,
            wssPort: config.PUSHER_CLIENT_WSS_PORT,
            wsPort: config.PUSHER_CLIENT_WS_PORT,
            encrypted: config.PUSHER_ENCRYPTED,
            auth: {
                headers: {Authorization: `Bearer ${jwt}`}
            }
        });
        var channel_private = pusher.subscribe(private_channel);
        channel_private.bind('accounts', data => {
            console.log("get private ACCOUNTS event", data);
        });
        channel_private.bind('account', data => {
            console.log("get private ACCOUNT event", data);
        });
        channel_private.bind('order', data => {
            console.log("get private ORDER event", data);
        });
        var channel_tickers = pusher.subscribe('market-global');
        channel_tickers.bind('tickers', data=> {
            console.log("get private TICKERS event", data)
        })
    }).catch(function(err) {
        if (err.response) {
            console.log("error when get member", err.response.data);
        } else {
            console.log("error when get member",err);
        }
    });
}).catch(function(err) {
    if (err.response) {
        console.log("Error when get JWT", err.response.data);
    } else {
        console.log("Error when get JWT", err);
    }
});