(() => {
    const fs = require('fs');
    const host = 'localhost'
    const portHTTP = 3333
    const portHTTPS = 3334
    const path = require('path')
    const express = require('express')
    const app = express()
    const http = require('http');
    const https = require('https');
    const privateKey = fs.readFileSync('sslcert/server.key', 'utf8')
    const certificate = fs.readFileSync('sslcert/server.cert', 'utf8')
    const credentials = {
        key: privateKey,
        cert: certificate
    }

    app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/app/index.html')))
    app.use('/node_modules', express.static('node_modules'))
    app.use(express.static('app'))

    const httpServer = http.createServer(app)
    const httpsServer = https.createServer(credentials, app)

    httpServer.listen(portHTTP, () => console.log(`Listening on http://${host}:${portHTTP}/`))
    httpsServer.listen(portHTTPS, () => console.log(`Listening on https://${host}:${portHTTPS}/`))
})()