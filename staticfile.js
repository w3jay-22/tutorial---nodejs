const http = require('http');

const fs= require('fs');

http.createServer((req,res)=>{
        const readstream = fs.createReadStream('./staticfiles/index.html');
        res.writeHead(200,{'content-type':'text/html'});
        readstream.pipe(res)
}).listen('3001')