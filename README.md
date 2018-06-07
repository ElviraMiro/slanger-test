# Subscribe to private and public channel on Peatio

## Configuration

set ENVIROMENT VARIABLES (see ```config.js```)

## Usage

Start script with command
```
npm start
```
or
```
node start
```

This script:

1. Get JWT from barong. Need those credentials:

* user's email and password
* application_id

```
axios({
    method: "post",
    url: config.JWT_URL,
    data: config.BARONG_USER
}).then(response=>{
    // JWT - response.data
})
```

2. Get member's info from peatio using JWT (```member.sn``` use in private channel name)

```
axios({
    method: "get",
    url: config.MEMBER_URL,
    headers: {
        Authorization: `Bearer ${jwt}`
    }
}).then(response=>{
    // member's info - response.data
})
```

3. Set Pusher client

```
var Pusher = require('pusher-slanger-client');
var pusher = new Pusher(config.PUSHER_APP_KEY, {
    slanger: config.PUSHER_WS_HOST,
    wsHost: config.PUSHER_WS_HOST,
    wsPort: config.PUSHER_WS_PORT,
    wssPort: config.PUSHER_WSS_PORT,
    encrypted: config.PUSHER_ENCRYPTED,
    authEndpoint: config.PUSHER_AUTH_ENDPOINT,
    auth: {
        headers: {'Authorization': 'Bearer '+jwt}
    }
});
```

4. Subscribe on channels and catch message in events

```
var channel = pusher.subscribe(channel_name);
channel.bind('pusher:subscription_succeeded', ()=>{
    console.log("Private channel subscription")
    channel_private.bind('accounts', received_message => {
        // do something
    });
});
```