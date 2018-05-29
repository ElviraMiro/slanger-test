module.exports = {
    JWT_URL: process.env['JWT_URL'] || 'https://account.devel.etorox.io/api/v1/sessions',
    MEMBER_URL: process.env['MEMBER_URL'] || 'https://platform.devel.etorox.io/api/v2/members/me',
    APP_ID: process.env['APP_ID'] || 'c96da32cd8e95621b0ae0a468385cc',
    USERS_YAML: process.env['USERS_YAML'] || 'users.yaml',
    PUSHER_APP: "peatio",
    PUSHER_HOST: "api.slanger.development.etorox.io",
    PUSHER_CLIENT_WSS_PORT: "443",
    PUSHER_APP_KEY: "10895827e9ed350f54bc74b6eb023ac81538bdf745baaf1d93cde2ff"
}