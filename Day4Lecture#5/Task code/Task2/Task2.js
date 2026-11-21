// Juni – Final Practical Task
// Student Management API – Response Methods
// Final Task
// GET Only
// 10 Marks

// Project: Student Management System

// Aapko ek Express.js application banani hai jismein different routes par different response methods use hon.
// Task requirements
// #	Route	Method	Expected work
// 1	/	res.send()	HTML welcome page
// 2	/students	res.json()	3 students ka data
// 3	/students/list	res.jsonp()	Students list
// 4	/home	res.redirect()	/ par redirect
// 5	/profile	res.render()	EJS profile page
// 6	/download	res.download()	Ek text file download
// 7	/document	res.sendFile()	Ek PDF ya text file browser mein show
// 8	/finish	res.end()	Response properly finish
// 9	/error	res.status()	404 status with message
// 10	/header	res.set() and res.get()	Custom header set aur read

// Project structure
// Aapka project kuch is tarah hona chahiye:
// StudentManagement/
// │
// ├── app.js
// ├── package.json
// │
// ├── views/
// │   └── profile.ejs
// │
// └── files/
//     ├── student.txt
//     └── student.pdf




const express = require('express');

const app =express();

//listen the server

app.listen(3000, ()=>{
    console.log("Server Run at Port 3000");
})


//step 1:

app.get('/',(req,res)=>{
    res.send("<h1>Welcom to Student Management System Home Page </h1>" )
})



// step 2:


app.get('/student',(req, res)=>{

    const data = [
        {name :"Muhammad Junaud Hassan", id :1},{name :"Zain hassan", id : 2},{name: "Ali hassan", id : 3}
    ]

    res.json(data);
})


//step 3

app.get('/student/list',(req, res)=>{

    const data = [
        {name :"Muhammad Junaud Hassan", id :1},{name :"Zain hassan", id : 2},{name: "Ali hassan", id : 3}
    ]

    res.jsonp(data);
})



// step 4:


app.get('/Student/home',(req,res)=>{
    res.redirect('/');
})



// step5:

app.set('view engine', 'ejs');

app.get('/Student/profile',(req,res)=>{

    res.render('Profile');

})



// step6:


app.get('/Student/download',(req,res)=>{
    res.download('./Files/TextFile.text',"Doucment.Text");
    res.send("File Doenload Succesuflyy")
})


// step7:


app.get('/Student/document',(req,res)=>{
    res.sendFile('./Notes/Phase_1_Multi_Channel_AI_Agent_Complete_Learning_Notes.pdf')
})



//step8:
app.get('/Student/end',(req,res)=>{
    res.end();
})



//step 9 :
app.get('/Student/error',(req,res)=>{
    res.sendStatus(404).send("Error Page")
   
})



// step 10:


app.get('/header',(req,res)=>{
    res.set('custom-Header',"Hdeadrer done");

    res.send(res.get('custom-Header'));
  
})

