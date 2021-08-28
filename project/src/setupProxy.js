const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/user',
        createProxyMiddleware({
            // target: process.env.REACT_APP_API_URL || '/',
            target: 'http://localhost:8080',
            changeOrigin: true, 
        })
    );
};