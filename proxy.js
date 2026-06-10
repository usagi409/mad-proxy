const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});

module.exports = (req, res) => {
    proxy.web(req, res, { 
        target: 'https://www.youtube.com',
        changeOrigin: true,
        autoRewrite: true,
        protocolRewrite: 'https',
        headers: {
            'host': 'www.youtube.com',
            'referer': 'https://www.youtube.com/',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
    }, (err) => {
        console.error('Proxy Error:', err);
        res.status(502).send('Bad Gateway');
    });
};
