module.exports = {
    JWT_URL: process.env['JWT_URL'] || 'https://auth.devel.etorox.io/api/v1/sessions',
    MEMBER_URL: process.env['MEMBER_URL'] || 'https://api.devel.etorox.io/api/v2/members/me',
    BARONG_USER: {
        email: 'elvira@etorox.com',
        password: '123ABCabc',
        application_id: "b3ad5d807cca41ae153ee3ff96c2"
    },
    PUSHER_APP_KEY: process.env['PUSHER_APP_KEY'] || "b87ccf1b7e8ce54ae77a2c27516b",
    PUSHER_WS_HOST: process.env['PUSHER_WS_HOST'] || "ws.slanger.devel.etorox.io",
    PUSHER_WS_PORT: process.env['PUSHER_WS_PORT'] || "80",
    PUSHER_WSS_PORT: process.env['PUSHER_WSS_PORT'] || "443",
    PUSHER_ENCRYPTED: process.env['PUSHER_ENCRYPTED'] || true,
    PUSHER_AUTH_ENDPOINT: process.env['PUSHER_AUTH_ENDPOINT'] || 'https://api.devel.etorox.io/api/v2/pusher/auth'
}