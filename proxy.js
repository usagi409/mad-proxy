const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});

module.exports = (req, res) => {
    proxy.web(req, res, { 
        target: 'https://www.youtube.com',
        changeOrigin: true,
        headers: { 'host': 'www.youtube.com' }
    }, (err) => {
        res.status(502).send('Proxy Failed');
    });
};
