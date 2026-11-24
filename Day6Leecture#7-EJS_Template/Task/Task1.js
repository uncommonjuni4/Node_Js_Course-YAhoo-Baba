// Task 1 — Student Management EJS Page
// Today's Practical
//  60 Minutes


// Scenario: Aap Student Management System ka Students Page bana rahe hain. Server se students ka data EJS template mein send hoga aur browser par display hoga.


// Requirements
// Part A — Express Setup (10 minutes)
// - Express application create karein.
// - EJS install karein.
// - app.set('view engine', 'ejs') configure karein.
// - views folder create karein.
// Part B — Dynamic Data (15 minutes)

// /students route banayein.

// Server se ye data EJS file ko send karein:
// - Page title: Student Management
// - Message: Welcome to Student Portal
// - Total students: 3
// Part C — Students Array (20 minutes)

// 3 students ka array banayein. Har student mein:
// - Name
// - ID
// - Course
// EJS mein forEach() use karke students ko HTML list mein display karein.

// Part D — Conditional Statement (15 minutes)

// EJS mein if/else use karein:
// - Agar students available hain to message show karein: Students Available
// - Otherwise: No Students Found
// Expected Browser Output
// Student Management
// Welcome to Student Portal
// Students Available

// ID	Name	Course
// 1	Juni	Node.js
// 2	Ayesha	Express.js
// 3	Hamza	MERN



// Requirements
// Part A — Express Setup (10 minutes)
// - Express application create karein.
// - EJS install karein.
// - app.set('view engine', 'ejs') configure karein.
// - views folder create karein.

const express = require('express');

const app = express();


app.listen(3000);
// ejs install done

app.set('view engine', 'ejs');

//view foder create done 

// Part B — Dynamic Data (15 minutes)

// /students route banayein.

// Server se ye data EJS file ko send karein:
// - Page title: Student Management
// - Message: Welcome to Student Portal
// - Total students: 3

app.get('/students',(req, res)=>{

    res.render('student',{title : "Student Management", message: "Welcome to Student Portal", total: 3})
})



// Part C — Students Array (20 minutes)

// 3 students ka array banayein. Har student mein:
// - Name
// - ID
// - Course
// EJS mein forEach() use karke students ko HTML list mein display karein.
app.get('/studentArray',(req,res)=>{
 
    let data = [
        {name : "JUni", id :1, course: "Computer"},
        {name : "Zain", id :2, course: "Computer"},
        {name : "Baber", id :3, course: "Computer"},

    ]

    res.render('studentArray', {data})
})





// Part D — Conditional Statement (15 minutes)

// EJS mein if/else use karein:
// - Agar students available hain to message show karein: Students Available
// - Otherwise: No Students Found

app.get('/check',(req,res)=>{
    res.render('check',{student:1})
})