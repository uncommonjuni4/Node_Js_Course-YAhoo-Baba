// Task 3 — Complete Request Information API
// Final Practical Challenge
// Scenario: Aap Student Management 
//  bana rahe hain. Aapko aik API create karni hai jo user ki request ki complete information collect kare.
// Part A — GET /student-info
// In properties ko use karein:
// Property	Purpose
// req.method	Request method
// req.hostname	Hostname
// req.ip	User IP
// req.path	URL path
// req.query	Query parameters
// req.originalUrl	Complete URL

// Part B — GET /check-client
// In methods ko use karein:
// - req.accepts() — JSON ya HTML check karein.
// - req.get() — User-Agent read karein.
// JSON ya HTML ke mutabiq response return karein.
// Part C — POST /student-data
// - req.is() se check karein ke incoming data JSON hai ya nahi.
// - JSON valid content type ho to success message return karein.
// - Otherwise invalid data message return karein.
// Testing
// GET /student-info?name=Juni&course=NodeJS
// GET /check-client
// POST /student-data


// POST request ka body:
// {
//   "name": "Juni",
//   "course": "Node.js",
//   "id": 1
// }


// Part A — GET /student-info
// In properties ko use karein:
// Property	Purpose
// req.method	Request method
// req.hostname	Hostname
// req.ip	User IP
// req.path	URL path
// req.query	Query parameters
// req.originalUrl	Complete URL

//first  inlcude  express js 

const express = require('express');

const app = express();


////listen server first
app.listen(4000,()=>{
    console.log("Server SuccessFuly Run at 3000 Port");

})


app.get('/student-info/:studentId',(req,res)=>{
    res.json({
        method: req.method,
        hostName : req.hostname,
        ip:req.ip,
        path: req.path,
        Query_paramter:req.route,
        orginalUrl : req.originalUrl
    })
})



// Part B — GET /check-client
// In methods ko use karein:
// - req.accepts() — JSON ya HTML check karein.
// - req.get() — User-Agent read karein.
// JSON ya HTML ke mutabiq response return karein.

app.get('/check-client',(req, res)=>{
    if(req.accepts('html')){
    res.send("<h1>Hellon</h1>")
    
 
}
else if (req.accepts('json')){
     const userate = req.get("user-agent");

     res.json({
        useragent : userate
     })
    }
})



// Part C — POST /student-data
// - req.is() se check karein ke incoming data JSON hai ya nahi.
// - JSON valid content type ho to success message return karein.
// - Otherwise invalid data message return karein.

app.post('/student-data',(req, res)=>{
   
    if(req.is('html')){
        res.send("<H1>Welocme to vaild Html data </h1>")
    }
    else if(req.is('json')){
        res.json({
            name : "Juni",
            age : 1
        })
    }
    else {
        res.send("Invalid data ")
    }
    
})