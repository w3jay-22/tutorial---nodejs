const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url=='/' || req.url=='/h') { 
    res.write("Hello JS world");
        res.end();
    }else{
        res.write("Lost?");
        res.end();
    }
});
server.listen('2727');   //to up and run on port 3000