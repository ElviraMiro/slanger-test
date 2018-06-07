const Pusher = require('pusher-slanger-client')
const axios = require('axios')

const config = require('./config.js')

console.log("POST ", config.JWT_URL, config.BARONG_USER)
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
        console.log(response.data);
        var options = {
            slanger: config.PUSHER_WS_HOST,
            wsHost: config.PUSHER_WS_HOST,
            wsPort: config.PUSHER_WS_PORT,
            wssPort: config.PUSHER_WSS_PORT,
            encrypted: config.PUSHER_ENCRYPTED,
            authEndpoint: config.PUSHER_AUTH_ENDPOINT,
            auth: {
               headers: {'Authorization': 'Bearer '+jwt}
            }
        };
        var pusher = new Pusher(config.PUSHER_APP_KEY, options);
        pusher.connection.bind('error', (err) => console.log({err}, 'error'));
        pusher.connection.bind('failed', (err) => console.log({err}, 'failed'));
        var channel_private = pusher.subscribe(private_channel);
        channel_private.bind('pusher:subscription_succeeded', status=>{
            console.log("Private channel subscription status", status)
            channel_private.bind('accounts', data => {
                console.log("get private ACCOUNTS event", data);
            });
            channel_private.bind('members', data => {
                console.log("get private MEMBERS event", data);
            });
            channel_private.bind('order', data => {
                console.log("get private ORDER event", data);
            });
            channel_private.bind('trade', data => {
                console.log("get private TRADE event", data);
            });
        });
        var channel_tickers = pusher.subscribe('market-global');
        channel_tickers.bind('pusher:subscription_succeeded', status=>{
            channel_tickers.bind('tickers', data=> {
                console.log("get global TICKERS event", data)
            })
        })
        var channel_tickers = pusher.subscribe('market-eurusd-global');
        channel_tickers.bind('pusher:subscription_succeeded', status=>{
            channel_tickers.bind('update', data=> {
                console.log("get global UPDATE event", data)
            })
            channel_tickers.bind('trades', data=> {
                console.log("get global TRADES event", data)
            })
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
        console.log("Error when get JWT1", err.response.data);
    } else {
        console.log("Error when get JWT2", err);
    }
});