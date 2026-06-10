const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});

module.exports = (req, res) => {
    // yt-dlpからのプロキシ要求をYouTubeへ正しく中継する
    proxy.web(req, res, { 
        target: 'https://www.youtube.com',
        changeOrigin: true,
        // ヘッダーを適切に引き継ぐための設定
        headers: {
            'host': 'www.youtube.com'
        }
    }, (err) => {
        console.error('Proxy Error:', err);
        res.status(502).send('Bad Gateway');
    });
};
