import http from 'http'

// http createing server
const port = 8000;

const server = http.createServer((req, res)=>{
    // passing content type
    res.writeHead(500, {'content-type': 'application/json'});
    res.end(JSON.stringify({
        message: 'server error'
    })); 
});

server.listen(port, ()=> console.log(`server running on port ${port}`));