const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});

module.exports = (req, res) => {
    // YouTubeへの転送設定
    proxy.web(req, res, { 
        target: 'https://www.youtube.com',
        changeOrigin: true
    }, (err) => {
        if (err) {
            res.status(500).send('Proxy Error');
        }
    });
};
