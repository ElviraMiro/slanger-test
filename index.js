const Pusher = require('pusher-js')
const axios = require('axios')

const config = require('./config.js')


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
        var pusher = new Pusher(config.PUSHER_APP_KEY, {
            wsHost: config.PUSHER_WS_HOST,
            wssPort: config.PUSHER_CLIENT_WSS_PORT,
            httpHost: config.PUSHER_HTTP_HOST,
            httpsPort: config.PUSHER_HTTPS_PORT,
            encrypted: config.PUSHER_ENCRYPTED,
            authEndpoint: config.PUSHER_AUTH_ENDPOINT,
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