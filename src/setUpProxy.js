const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy.createProxyMiddleware('/user-server', { target: 'http://182.92.8.29:8087' }))
    app.use(proxy.createProxyMiddleware('/course-server', { target: 'http://182.92.8.29:8087' }))
    app.use(proxy.createProxyMiddleware('/diet-service', { target: 'http://182.92.8.29:8087' }))

}




