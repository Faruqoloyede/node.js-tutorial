import {createServer} from 'http';
const PORT = process.env.PORT;

const users = [
    {
        id: 1,
        name: 'faruq',
    },
    {
        id: 2,
        name: 'yusuf'
    }, 
    {
        id: 3,
        name: 'lekan'
    }
]

const server = createServer((req, res)=>{
    if(req.url === '/api/users' && req.method === 'GET'){
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(users));
        res.end()
    }else{
        throw new Error('Method not allowed')
    }
});
server.listen(PORT, ()=> console.log(`server running on port ${PORT}`));