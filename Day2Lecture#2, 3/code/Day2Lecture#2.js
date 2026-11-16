//export express js 


const express = require('express');


//make object to use all properties of  expresss js


const app = express();



////for reply to user request


app.get('/' , (req, res)=>{
  
    res.send("Welcome To Day2Lecture#2 at Port 30000")

})



///first  listen server at any port 

 app.listen(3000, ()=>{
    console.log("Success fullly run at Port 3000");
    
 })