const express = require('express');



const app = express();




///linsten server


app.listen(4000, ()=>{
    console.log("SuccessFully Run at Port 3000");

})



//Diffrent Resoone method in Node js 


//Method 1 : Res.send() // its can return Html , Json , Object , Array , and simple Text

   app.get('/', (req , res)=>{
    //   res.send("Hello"); // return  text 

    // res.send("<h1>Hello</h1>") //retunr Html
    
    // res.send([  12 , 13 , 14 ])  /// return   arrray in Json File

    // res.send({Name :"Juni" , Id :2})  //retunr object in json file


   })



   ///2nd Method : Res.Json() //It retunr Data in Jason Form

   app.get('/json', (req, res)=>{
 
    // res.send([  12 , 13 , 14 ])  /// return   arrray in Json File

    res.send({Name :"Juni" , Id :2})  //retunr object in json file

    // const User =[
    //     {Name : "Juni" , id:1},
    //     {Name : "Ali" , id:2}
    // ]


    // res.json(User);  // retuen arrqay of object in json fle

         
   })



   //3rd Mthid : Res.jsonP():  same to the methid 2


   //4th Methid :res.redirect() // move to other url

   app.get("/redirect", (req,res)=>{

    // res.redirect(301,'/json');  // 301 parment move
    // res.redirect(302,'/json');  // 302 Temoory  move
    // res.redirect(303,'/json');  // 303 Temoory  move in operation put and update


   })




   //5th method :Res.render() // to return whole Html file

      //steps  feloow
    //   1:  intall any teaplate engine in your project?
    //2: set the  view templaet engin (ejs)
    //3: the html file must be in the  folder nmae of views
 
    // set engine 

    app.set("view engine","ejs");

    app.get("/render", (req,res)=>{
        // res.render("user");
    })



    //6th method : res.download()


    app.get("/download", (req, res)=>{
        // res.download('./file/file.text', "Doucment.Text")
    })


//7th nethod : res.sendfile()


app.get('/sendFile', (req, res)=>{
    // res.sendFile(__dirname+'./file/file.pdf');
})





///8th: res.end()

app.get('/end', (req,res)=>{
    res.send("Hi");

    res.end();

    res.send("ali");
})


//9th : res.status()


app.get('/status', (req,res)=>{
    res.status(404);
})



//10thb; sendhereder



// app.get('/header', (req,res)=>{
    
//     console.log(res.sendheader);
    
// })





//method 11 : set and get method 

app.set('/Set' , (req, res)=>{
res.set("customHeader", "Juni Your Cunstom Header Here");
console.log(res.get("customHeader"));

res.send("Hello Juni ");

})
