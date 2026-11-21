////Day 3 with Lecture 4 

//What we leaen toDay:  we learn today how many types of routes in Node js . 
// 1 Signle urls , 
// 2 : single routes but nestetd  ,
//  3: Route with single parameters ,
//   4: routes with multi parameters value
//  5 : router with sing query parameters
//  5 : router with miltiple query parameters




const express = require('express'); // get express js in our project

const app  = express(); /// make object to use all properties and method of express js using app constant




// /make server where all request come
app.listen('3000', ()=>{
    console.log("SuccessFuly Run at Port 3000");
});



///1:Now we start with single parameters

app.get('/home', (req, res)=>{
  res.send(`<h1>Welcome to Home Page </h1>`)
})



// ///2:Now we start with multi single parameters (nested Routes)

// app.get('/home/deatil' , (req,res)=>{
//     res.send(`<h1>Welcome to Deatail Pages</h1>`);
// })

// app.get('/home/contact' , (req,res)=>{
//     res.send(`<h1>Welcome to contact Pages</h1>`);
// })


//  3: Route with single parameters


app.get('/home/:userid', (req, res)=>{

    res.send(req.params);
})



//   4: routes with multi parameters value


app.get('/home/:userid/book/:bookId', (req, res)=>{

    res.send(req.params);

   


//     ///if see one by one


//   res.send(req.params.userId);
    //  res.send(req.params.bookId);


})






//  5 : router with sing query parameters

app.get('/about', (req,res)=>{
    res.send(req.query)
});


//  6 : router with miltiple query parameters


app.get('/about', (req,res)=>{

    
    res.send(req.query)


});

