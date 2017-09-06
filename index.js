const http = require('http');
const fs = require("fs")

const hostname = '127.0.0.1';
const port = 9001;

const server = http.createServer((req, res) => {
    if(req.url == '/') {
        fs.readFile('ui.pdf', (err, date) =>{
            console.log(date)
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/pdf');
            res.end(date);
        })
    }

});

server.listen(port, hostname, () => {
    console.log(`ljh服务器运行在 http://${hostname}:${port}/`);
});