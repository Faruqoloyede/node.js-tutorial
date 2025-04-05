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

// logger middleware
const logger = (req, res, next)=>{
    console.log(`${req.method} ${req.url}`)
    next();
}
// JSOn middleware

const jsonMiddleware = (req, res, next)=>{
    res.setHeader('Content-Type', 'application/json');
    next();
}

// route handler for GET /api/users

const getUsersHandler = (req, res,) =>{
    res.write(JSON.stringify(users));
    res.end();
}

// route handler for GET api/users/id

const getUserByIdHandler = (req, res)=>{{
    const id = req.url.split('/')[3];
    const user = users.find(user => user.id === parseInt(id));
    if(user){
        res.write(JSON.stringify(user));
    }else {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 404;
        res.write(JSON.stringify({
         messagge: 'user not found not found'
        }));
    }
    res.end();
}}

// Not found handler
const notFoundHandler = (req, res)=>{
    res.statusCode = 404;
    res.write(JSON.stringify({
     messagge: 'Route not found'
    }));
    res.end();
}


const server = createServer((req, res)=>{
    logger(req, res, ()=>{
       jsonMiddleware(req, res, ()=>{
        if(req.url === '/api/users' && req.method === 'GET'){
            getUsersHandler(req, res);
        }else if (req.url.match(/\api\/users\/([0-9]+)/) && req.method === 'GET'){
            getUserByIdHandler(req, res)
        }else {
            notFoundHandler(req, res);
        }
       })
    })
});
server.listen(PORT, ()=> console.log(`server running on port ${PORT}`));