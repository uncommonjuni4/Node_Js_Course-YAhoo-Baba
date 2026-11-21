// Your practical task: Student Management Response System
// GET Methods Only
// Aap Express.js mein ek Student Management System banayein.

// Sirf ye 6 routes create karne hain:
// #	Route	Required method
// 1	/student	res.send()
// 2	/student/json	res.json()
// 3	/student/redirect	res.redirect()
// 4	/student/error	res.status()
// 5	/student/header	res.set() and res.get()
// 6	/student/end	res.end()

// Task requirements
// 1. Student route par HTML welcome message show karein.
// 2. JSON route par 2 students ka data return karein.
// 3. Redirect route ko JSON route par redirect karein.
// 4. Error route par 404 status return karein.
// 5. Header route par custom header create karke uski value console mein print karein.
// 6. End route par response properly finish karein.

const express = require('express');

const app = express();




//server listen 

app.listen(3000, ()=>{
    console.log("SuccessFully Run At Port 30000");
})




//step 1:

app.get('/student', (req,res)=>{
    res.send("<h1>Welcome To the Student Management System</h1>");

})



//step 2:


app.get('/student/json', (req,res)=>{
    const studentData = [
        {
            name: "JUni" , Id : 1
        },
        {
            name: "Ano" , Id : 2
        },

    ]

    res.json(studentData);
})



//step 3:

app.get('/student/redirect', (req, res)=>{
    res.redirect('/student/json');
})


//step 4:


app.get('/student/error',(req,res)=>{
    res.status(404).send("Error Page ");

})





//step5:

app.get('/student/header',(req, res)=>{
    res.set("customHeader","Cunstom Herder of Juni")
    res.setHeader("customHeader")
    
    console.log(res.get('customHeader'));

    res.send("Create Custom Heder");

})



// step6:
app.get('/student/end',(req,res)=>{
    res.end('');
})