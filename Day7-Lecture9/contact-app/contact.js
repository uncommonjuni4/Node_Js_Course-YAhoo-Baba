const express = require('express');

const app = express();




///listen server 


app.listen(3000, ()=>{
    console.log("SucessFully Run at Port 3000");
    
})



app.set('view engine', 'ejs')
app.use(express.static('public'));



app.get('/',(req, res)=>{

   res.render('home')
})

// 2nd route;
app.get('/add-contact',(req,res)=>{
    res.render('add-contact');
})

//for get data of update 

app.post('/add-contact',(req,res)=>{
   
})




//for show singe user data
app.get('/show-contact',(req,res)=>{
    res.render('show-update');
})




///for uPDATE contec


app.get('/update',(req,res)=>{
    res.render('update');
})


app.post('/update',(req,res)=>{
    
})


//for elete user


app.get('/delete',(req,res)=>{
    res.send('welcome to Delete ')
})