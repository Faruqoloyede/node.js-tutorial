import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

const PORT = process.env.PORT;

// get curent path

const _filename = url.fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

console.log(_filename, _dirname)

const server = http.createServer(async (req, res)=>{
    try {
        if(req.method === 'GET'){
            let filePath;
            if(req.url === '/'){
               filePath = path.join(_dirname, 'public', 'index.html')
            }else if(req.url === '/about'){
                filePath = path.join(_dirname, 'public', 'about.html')
           }else{
               throw new Error
           }
           
           const data = await fs.readFile(filePath);
           res.setHeader('Content-Type', 'text/html');
           res.write(data);
           res.end();
        }else {
            throw new Error('Method not allowed');
        }
    } catch (error) {
        res.writeHead(500, {'content-type': 'text/plain'});
        res.end('server Error'); 
    }
     
});

server.listen(PORT, ()=> console.log(`server running on port ${PORT}`));