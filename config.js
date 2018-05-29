module.exports = {
    JWT_URL: process.env['JWT_URL'] || 'https://auth.development.etorox.io/api/v1/sessions',
    MEMBER_URL: process.env['MEMBER_URL'] || 'https://api.development.etorox.io/api/v2/members/me',
    BARONG_USER: {
        email: 'devs@etorox.io',
        password: 'Qwerty123',
        application_id: "1f4c7db067c066c274b58b40bac5d161894e6835dfb0b7656d63b4b7"
    },
    PUSHER_APP: process.env['PUSHER_APP'] || "peatio",
    PUSHER_CLIENT_WS_PORT: process.env['PUSHER_CLIENT_WS_PORT'] || '80',
    PUSHER_HOST: process.env['PUSHER_HOST'] || "api.slanger.development.etorox.io",
    PUSHER_ENCRYPTED: process.env['PUSHER_ENCRYPTED'] || true,
    PUSHER_CLIENT_WSS_PORT: process.env['PUSHER_CLIENT_WSS_PORT'] || "443",
    PUSHER_APP_KEY: process.env['PUSHER_APP_KEY'] || "10895827e9ed350f54bc74b6eb023ac81538bdf745baaf1d93cde2ff"
}