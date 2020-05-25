const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    // proxy第一个参数为要代理的路由
    // 第二参数中target为代理后的请求网址，changeOrigin是否改变请求头，其他参数请看官网
    app.use(proxy.createProxyMiddleware('/user-server', {
        target: 'http://182.92.8.29:8087',
        changeOrigin: true
    }));
    app.use(proxy.createProxyMiddleware('/course-server', {
        target: 'http://182.92.8.29:8087',
        changeOrigin: true
    }));
}

