// import express from 'express';


const express = require('express')


const app  = express();

// "tell browzweer we use  ejs"


app.set('view engine', 'ejs');


app.listen(3000,()=>{
    console.log('ScueeewFylky run ata oort 3000');

});




///simpke howe  we use eje  tag firt withiut these taga

app.get('/',(req, res)=>{

    res.send("Welcome to Home Page")
});


//KNOW WITH HELP OF EJs how we render  file 

app.get('/about',(req,res)=>{
    res.render('about')
})



/////how we pass dynmaic valy in  render mwrhid with ekje file,

app.get('/dynmaic',(req,res)=>{
    res.render("dynmic" , {title:"Duyniac page",message:"This is and synmic page with hrlp of ejs "})
})




////help to   use of of  loop in ejs

app.get('/loops',(req,res)=>{

    res.render('loops' , {name :"JUniad hassas", id : 12})

})





///how we paass data as object an arry in   EJs


app.get('/array',(req,res)=>{

    let user = [
        {
            name :"Juni",
            id:2
        }

        , 
        {
            name :"zian",
            id :4
        }
    ]

    res.render('arry',{user })

})