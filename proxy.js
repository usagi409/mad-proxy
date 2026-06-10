const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});

// YouTubeへの通信を中継する
module.exports = (req, res) => {
    proxy.web(req, res, { 
        target: 'https://www.youtube.com',
        changeOrigin: true 
    });
};
