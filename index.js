const axios = require('axios');
var Pusher = require('pusher-js');
 
axios({
    method: "post",
    url: "https://account.devel.etorox.io/api/v1/sessions",
    data: {
        application_id: "c96da32cd8e95621b0ae0a468385cc",
        email: "user-1@gmail.com",
        password: "123ABCabc"
    }
}).then(function(response) {
    var jwt = response.data;
    console.log("JWT get", jwt);
    axios({
        method: "get",
        url: "https://platform.devel.etorox.io/api/v2/members/me",
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    }).then(function(response) {
        var sn = response.data.sn,
            private_channel = `private-${sn}`
        console.log("user data", response.data);
        var pusher = new Pusher({
            app_id: 'peatio',
            key: 'af56abb5a0d28dce0c2eb1a4f18d704ac9b9d4491b951fd31bf98727',
            secret: '9a7260fd3ef397938e525871c1209c5014ae8de6e5685793e904f986',
            httpHost: 'api.slanger.devel.etorox.io',
            httpsPort: 443,
            auth: {
                headers: {Authorization: `Bearer ${jwt}`}
            }
        });
        var channel_private = pusher.subscribe(private_channel);
        channel_private.bind('accounts', function(data) {
            console.log("get ACCOUNTS event", data);
        });
        var channel_tickers = pusher.subscribe('market-global');
        channel_tickers.bind('tickers', function(data) {
            console.log("get TICKERS event", data)
        })


    }).catch(function(err) {
        if (err.response) {
            console.log("error when getting members", err.response.data);
        } else {
            console.log("error when getting members",err);
        }
    });
}).catch(function(err) {
    if (err.response) {
        console.log("Error when get JWT", err.response.data);
    } else {
        console.log("Error when get JWT", err);
    }
});