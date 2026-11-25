const express = require('express');

const app =  express();



//listen  server
app.listen(3000,()=>{
    console.log("Server Successfully Run At Port 3000");
})


//set eje to tell our project access of ejs
app.set("view engine","ejs");

////

app.get('/form',(req,res)=>{

    res.render('form');
})

//teell our project to use 
 
app.use(express.urlencoded({extended:false}));


app.post('/submit',(req,res)=>{

    const message = req.body.myname;


    res.render('form',{message:message});
})

app.set(express.static('public'));

/////HOW WE  add   partial sin  or poryject