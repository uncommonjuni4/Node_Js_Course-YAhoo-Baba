// Task 2 — Content Negotiation System
// Scenario:

// Aap ek API bana rahe hain jo check karegi ke user kis type ka response accept kar sakta hai aur user ne server ko kis type ka data send kiya hai.
// Part A — GET /content
// GET /content route create karein.

// Requirements:
// - req.accepts() use karein.
// - Agar user JSON accept karta hai, JSON response bhejein.
// - Agar user HTML accept karta hai, HTML response bhejein.
// - Agar dono accept nahi karta, suitable response bhejein.
// Expected behavior:
// Request preference	Response
// JSON	JSON object
// HTML	HTML heading
// Other	Unsupported response

// Part B — GET /headers
// GET /headers route create karein.

// Requirements:
// - req.get() use karein.
// - User ka host header read karein.
// - User ka user-agent header read karein.
// - Dono values res.json() mein return karein.
// Part C — POST /check-data
// POST /check-data route create karein.

// Requirements:
// - req.is() use karein.
// - Agar incoming data JSON hai to Valid JSON return karein.
// - Agar incoming data HTML hai to Valid HTML return karein.
// - Otherwise Invalid Data return karein.
// Testing hints

// Browser mein GET routes test karein. POST route ke liye Postman ya Thunder Client use kar sakte hain.
// GET http://localhost:4000/content
// GET http://localhost:4000/headers
// POST http://localhost:4000/check-data


// POST request mein JSON test karne ke liye:
// {
//   "name": "Juni",
//   "course": "Node.js"
// }


// Header Content-Type: application/json set karein.

// Rules
// - Khud code likhna hai.
// - Teeno routes aik hi Express project mein banane hain.
// - res.json() use karna hai jahan suitable ho.
// - Complete solution nahi milega; main hints aur code review dunga.
// Aapka target: Teeno routes complete karein aur apni JavaScript file bhejein. Main line-by-line review aur marks out of 10 dunga. 🚀const express = require('express');

const  express = require('express');
const app = express();


////listen server first
app.listen(4000,()=>{
    console.log("Server SuccessFuly Run at 3000 Port");

})



//partA

app.get('/content',(req, res)=>{

    if(req.accepts('json')){
        res.json({
            name :"Juni"
        })
    }
    else if (req.accepts('html')){
        res.send("<h1>Hello</h1>");

    }else{
        res.send("Invalid data ");
    }
})


// / Part B — GET /headers
// GET /headers route create karein.

app.get('/headers',(req,res)=>{
    const usergent = req.get('user-agent')
    const host =req.get("host")

    res.json({
        host : host,
        useragent :usergent
    })
})



// Part C — POST /check-data
// POST /check-data route create karein.

// Requirements:
// - req.is() use karein.
// - Agar incoming data JSON hai to Valid JSON return karein.
// - Agar incoming data HTML hai to Valid HTML return karein.
// - Otherwise Invalid Data return karein.


app.post('/check-data',(req,res)=>{
    if(req.is('html')){
        res.send("<h1>vaikd Hrml</h1>");
    }
    else if(req.is('json')){
        res.json({name :"Juni"});
    }

    else{
        res.send("invaild Data")
    }
})