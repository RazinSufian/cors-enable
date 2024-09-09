const cors_proxy = require('cors-anywhere');

const host = 'localhost';
const port = 8000;

cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
    // Override headers for OPTIONS preflight requests
    handleInitialRequest: (req, res) => {
        res.setHeader('Access-Control-Allow-Methods', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Origin', '*');
    }
}).listen(port, host, () => {
    console.log(`Running CORS Anywhere on ${host}:${port}`);
});
