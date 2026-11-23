// . Practical Task 1 — Request Inspector API
// Your task starts here
// Scenario: Aapko aik API banani hai jo user ki request ki information collect karke browser mein show kare.

// Requirements:

// GET /inspect route create karein.

// Is route mein ye properties use karein:
// Property	Kya show karna hai
// req.method	Request method
// req.hostname	Hostname
// req.ip	Client IP
// req.protocol	HTTP ya HTTPS
// req.path	URL path
// req.originalUrl	Complete original URL
// req.secure	Secure connection true/false

// Expected output example:
// {
//   "method": "GET",
//   "hostname": "localhost",
//   "ip": "::1",
//   "protocol": "http",
//   "path": "/inspect",
//   "originalUrl": "/inspect",
//   "secure": false
// }


// IP aur hostname aapke local environment ke mutabiq different ho sakte hain.

// Rules:
// - Khud code likhna hai.
// - res.json() use karna hai.
// - Har property ko samajh kar use karna hai.
// - Complete solution mujhse nahi lena.


//first  inlcude  express js 

const express = require('express');

const app = express();


////listen server first
app.listen(4000,()=>{
    console.log("Server SuccessFuly Run at 3000 Port");

})


app.get('/inspect',(req,res)=>{
   
    res.json({
        method : req.method,
        hostname:req.hostname,
        ip: req.ip,
        protocol:req.protocol,
        path :req.path,
        orginalUrl : req.originalUrl,
        secure: req.secure

    })
})