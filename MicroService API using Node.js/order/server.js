const express = require('express');
const app = express();

const port = 8080;

app.get('/order-list',(req,res)=>{
    let response ={
        data:{
            item:[
                {
                    id:1,
                    name:"order 1"
                },
                {
                    id:2,
                    name:"order 2"
                },
                {
                    id:3,
                    name:"order 3"
                }
            ]
        }
    }
    res.status(200).json(response)
})

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Orders Called!"
    })
})

app.listen(port,()=>{
    console.log(`Order is listening on Port ${port}`);
})