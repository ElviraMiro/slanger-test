module.exports = {
    JWT_URL: process.env['JWT_URL'] || 'https://auth.development.etorox.io/api/v1/sessions',
    MEMBER_URL: process.env['MEMBER_URL'] || 'https://api.development.etorox.io/api/v2/members/me',
    BARONG_USER: {
        email: 'devs@etorox.io',
        password: 'Qwerty123',
        application_id: "1f4c7db067c066c274b58b40bac5d161894e6835dfb0b7656d63b4b7"
    },
    PUSHER_APP_KEY: process.env['PUSHER_APP_KEY'] || "10895827e9ed350f54bc74b6eb023ac81538bdf745baaf1d93cde2ff",
    PUSHER_HTTP_HOST: process.env['PUSHER_HTTP_HOST'] || "api.slanger.development.etorox.io",
    PUSHER_HTTPS_PORT: process.env['PUSHER_HTTPS_PORT'] || "443",
    PUSHER_HTTP_PORT: process.env['PUSHER_HTTP_PORT'] || "80",
    PUSHER_WS_HOST: process.env['PUSHER_WS_HOST'] || "ws.slanger.development.etorox.io",
    PUSHER_WS_PORT: process.env['PUSHER_WS_PORT'] || "80",
    PUSHER_WSS_PORT: process.env['PUSHER_WSS_PORT'] || "443",
    PUSHER_ENCRYPTED: process.env['PUSHER_ENCRYPTED'] || true,
    PUSHER_AUTH_ENDPOINT: process.env['PUSHER_AUTH_ENDPOINT'] || 'https://api.development.etorox.io/api/v2/pusher/auth'
}