import http from 'http'

const PORT = process.env.PORT;
// http createing server

const server = http.createServer((req, res)=>{
    // passing content type
    res.writeHead(200, {'content-type': 'text/html'});
    res.end('<h1>Hello World</h1>'); 
});

server.listen(PORT, ()=> console.log(`server running on port ${PORT}`));