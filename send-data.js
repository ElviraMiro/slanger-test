const Pusher = require('pusher-slanger-client')
const axios = require('axios')

const config = require('./config.js')


//get jwt for BARONG_USER (var jwt)
axios({
    method: "post",
    url: config.JWT_URL,
    data: config.BARONG_USER
}).then(function(response) {
    var jwt = response.data;
    // get jwt for USER1 (var jwt1)
    axios({
        method: "post",
        url: config.JWT_URL,
        data: config.USER1
    }).then(function(response) {
        var jwt1 = response.data;
        //get jwt for USER2 (var jwt2)
        axios({
            method: "post",
            url: config.JWT_URL,
            data: config.USER2
        }).then(function(response) {
            var jwt2 = response.data;
            // create order ASK1 for USER1
            axios({
                method: "post",
                url: config.PEATIO_ORDER_URL,
                headers: {
                    Authorization: `Bearer ${jwt1}`
                },
                data: config.ASK1
            }).then(function(response) {
                console.log("send by PEATIO API order AKS1 for USER1")
                // create order ASK2 for USER2
                axios({
                    method: "post",
                    url: config.PEATIO_ORDER_URL,
                    headers: {
                        Authorization: `Bearer ${jwt2}`
                    },
                    data: config.ASK2
                }).then(function(response) {
                    console.log("send by PEATIO API order AKS2 for USER2")
                    // create order BID1 for BARONG_USER
                    axios({
                        method: "post",
                        url: config.PEATIO_ORDER_URL,
                        headers: {
                            Authorization: `Bearer ${jwt}`
                        },
                        data: config.BID1
                    }).then(function(response) {
                        console.log("send by PEATIO API order BID1 for BARONG_USER")
                        // create order BID2 for BARONG_USER
                        axios({
                            method: "post",
                            url: config.PEATIO_ORDER_URL,
                            headers: {
                                Authorization: `Bearer ${jwt}`
                            },
                            data: config.BID2
                        }).then(function(response) {
                            console.log("send by PEATIO API order BID2 for BARONG_USER")
                        }).catch(function(err) {
                            console.log('ERROR7')
                        });
                    }).catch(function(err) {
                        console.log('ERROR6')
                    });
                }).catch(function(err) {
                    console.log('ERROR5')
                });
            }).catch(function(err) {
                console.log('ERROR4')
            });
        }).catch(function(err) {
            console.log('ERROR3')
        });
    }).catch(function(err) {
        console.log('ERROR2')
    });
}).catch(function(err) {
    console.log('ERROR1')
});