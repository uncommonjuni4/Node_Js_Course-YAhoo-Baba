//first  inlcude  express js 

const express = require('express');

const app = express();


////listen server first
app.listen(3000,()=>{
    console.log("Server SuccessFuly Run at 3000 Port");

})



////start method 1:

// if we want to  send json  data to the server we use post and then use request method of express js 
// 1:Request.body()  // it is  use to send  data in  json dorm to the server
//in our project we use express.json() method to enable our porject to use   json data at where

// app.use(express.json());


// app.post('/home', (req, res)=>{

//     res.send(req.body);
// })

//if we want t send data thoroug form  we neeed to add one thing in our project is  :
       
//   app.use(express.urlencoded({extended: false}));


//   app.post('/form',(req,res)=>{
//      res.send(req.body);
//   })



//properties 1: req.hostname;

app.get('/', (req, res)=>{

    res.send(req.hostname);
})



//propert 2 : req.ip;

app.get('/ip',(req,res)=>{
    res.send(req.ip)
})


//proptery 3: req.ips

app.get('/ips',(req,res)=>{
    res.send(req.ips)
})




//propter 4:req.methods

app.get('/method',(req,res)=>{
    res.send(req.method)
})


///proptwer 5 : req.orgirlalurl

app.get('/url',(req, res)=>{
    res.send(req.originalUrl);
})



//propter 6:req.path

app.get('/path',(req, res)=>{
    res.send(req.path)
})



//property 7 : req.protocol

app.get('/protocol',(req, res)=>{
    res.send(req.protocol);
})


//property 8: req.secrue

app.get('/safe',(req,res)=>{
    res.send(req.secure)
})


//prpotery9 : req.route 

app.get('/route',(req, res)=>{
   res.send(req.route)
})



////know statr metojod
app.get('/accept',(req,res)=>{
    if(req.accepts('json')){
        res.json({
            name : "Juni"
        })
    }else if(req.accepts('html')){
        res.send("<h1>HI</h1>");
    }else{
        res.send("incid respone");
    }
})



//2nd methid check header deatil

app.get('/get',(req,res)=>{
    // res.send(req.headers);
    res.send(req.get("host"))
})



///3rd methid check which data  user send accwpt or not


app.post('/is',(req, res)=>{
    if(req.is('text/html')){
        res.send("Vaid hrlnt")
    }else if(req.is('json')){
        res.send("Vaild json")
    }else{
        res.send("invaild data")
    }
})