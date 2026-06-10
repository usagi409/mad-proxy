const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});

module.exports = (req, res) => {
    // リクエストをそのままYouTubeへ転送する
    proxy.web(req, res, { 
        target: 'https://www.youtube.com',
        changeOrigin: true,
        // ヘッダー制御を最小限にして、エラーを減らす
        xfwd: true 
    }, (err) => {
        console.error('Proxy Error:', err);
        res.status(502).send('Bad Gateway');
    });
};
