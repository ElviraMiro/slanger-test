module.exports = {
    JWT_URL: process.env['JWT_URL'] || 'https://account.qa.etorox.io/api/v1/sessions',
    MEMBER_URL: process.env['MEMBER_URL'] || 'https://api.qa.etorox.io/api/v2/members/me',
    BARONG_USER: {
        email: 'aviad@etorox.com',
        password: 'QPJNMrT5QlwqIT',
        application_id: "5740d6eda04e61b79c488b1a2a72"
    },
    PUSHER_APP_KEY: process.env['PUSHER_APP_KEY'] || "5e06abf7cb4cf779cb774a37f60f",
    PUSHER_WS_HOST: process.env['PUSHER_WS_HOST'] || "ws.slanger.qa.etorox.io",
    PUSHER_WS_PORT: process.env['PUSHER_WS_PORT'] || "80",
    PUSHER_WSS_PORT: process.env['PUSHER_WSS_PORT'] || "443",
    PUSHER_ENCRYPTED: process.env['PUSHER_ENCRYPTED'] || true,
    PUSHER_AUTH_ENDPOINT: process.env['PUSHER_AUTH_ENDPOINT'] || 'https://api.qa.etorox.io/api/v2/pusher/auth',
    USER1: {
        email: 'trader-1@etorox.com',
        password: '123ABCabc',
        application_id: "5740d6eda04e61b79c488b1a2a72"
    },
    USER2: {
        email: 'trader-2@etorox.com',
        password: '123ABCabc',
        application_id: "5740d6eda04e61b79c488b1a2a72"
    },
    ASK1: {
        side:   'buy',
        volume: '1',
        price:  '1',
        market: 'eurusd'
    },
    ASK2: {
        side:   'buy',
        volume: '1',
        price:  '1.02',
        market: 'eurusd'
    },
    BID1: {
        side:   'sell',
        volume: '1',
        price:  '1.01',
        market: 'eurusd'
    },
    BID2: {
        side:   'sell',
        volume: '1',
        price:  '1',
        market: 'eurusd'
    },
    PEATIO_ORDER_URL: 'https://api.qa.etorox.io/api/v2/orders'
}