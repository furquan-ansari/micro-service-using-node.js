const gateway = require('fast-gateway');
const port = 9000;      //common routes for all folder/services

// middleware for Authentication
const checkAuth = (req,res,next)=>{
    // console.log(req.headers);
    if(req.headers.token && req.headers.token !=''){
        next();
    }else{
        res.setHeader('Content-type','application/json');
        res.statusCode = 401;
        res.end(JSON.stringify({
            status:401,
            message:'Authentication failed!'
        }))
    }
    // next();
}

const server = gateway({
    methods:['GET'],                    //if you want to run specific method for all routes
    middlewares:[checkAuth],            // if you want to enable middleware for all routes
    routes:[
        {
            prefix:'/orders',
            target:'http://localhost:8080/',
            hooks:{

            }
        },
        {
            prefix:'/payments',
            target:'http://localhost:8081/',
            methods:['GET'],            //if you want to run any specific method for specific route
            // middlewares:[checkAuth], //if you want to enable middleware for the specific route
            hooks:{

            }
        },


    ]

});

server.get('/homepage',(req,res)=>{
    res.send('Yes! called Gateway')
});

server.start(port)
.then(server=>{
    console.log(`API Gateway is running on port ${port}`);
})