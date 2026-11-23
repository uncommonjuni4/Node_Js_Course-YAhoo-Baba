// Task 4 — Student Registration API
// New Practical Task
// Scenario: Aap Student Management System mein student registration API bana rahe hain. User form submit karega aur server uska data receive karke response dega.
// Concepts
// Is task mein hum practice karenge:
// - req.body — User ka bheja hua data receive karna.
// - express.json() — JSON body ko parse karna.
// - express.urlencoded() — Form data ko parse karna.
// - req.method — Request method check karna.
// Requirements
// Part A — Middleware
// - Express application create karein.
// - express.json() middleware configure karein.
// - express.urlencoded() middleware configure karein.
// Part B — POST /register
// User JSON data send karega:
// {
//   "name": "Juni",
//   "email": "juni@gmail.com",
//   "course": "Node.js",
//   "age": 22
// }


// Aapko:
// 1. req.body se complete data receive karna hai.
// 2. Student ka name, email aur course response mein return karna hai.
// 3. req.method bhi response mein show karna hai.

// Part C — POST /register-form
// Form data receive karein:
// - name
// - email
// - course
// In teeno values ko JSON response mein return karein.
// Testing
// - POST http://localhost:4000/register
// - POST http://localhost:4000/register-form
// Expected learning: JSON aur form data dono ko Express mein receive karna.






const  express = require('express');
const app = express();


////listen server first
app.listen(4000,()=>{
    console.log("Server SuccessFuly Run at 3000 Port");

})

// Requirements
// Part A — Middleware
// - Express application create karein.
// - express.json() middleware configure karein.
// - express.urlencoded() middleware configure karein.
 app.use(express.json());

 app.use(express.urlencoded({extended:false}));



 // Part B — POST /register
// User JSON data send karega:
// {
//   "name": "Juni",
//   "email": "juni@gmail.com",
//   "course": "Node.js",
//   "age": 22
// }


// Aapko:
// 1. req.body se complete data receive karna hai.
// 2. Student ka name, email aur course response mein return karna hai.
// 3. req.method bhi response mein show karna hai.


app.post('/register',(req, res)=>{
   
    

    res.json({
        data :req.body,
        method:req.method
    })
})




// Part C — POST /register-form
// Form data receive karein:
// - name
// - email
// - course
// In teeno values ko JSON response mein return karein.

app.post('/register-form',(req , res)=>{

   res.json({
    data :req.body
   })
})