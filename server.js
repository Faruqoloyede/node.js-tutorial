import http from 'http'

// http createing server
const port = 3200;

const server = http.createServer((req, res)=>{
    res.end('Hello world its faruq');
});

server.listen(port, ()=> console.log(`server running on port ${port}`));