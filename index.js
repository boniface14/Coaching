//11.require and make all the packages / libraries to be used in this project
const express = require('express');
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/users",()=>{
    console.log("successfully connected")
});

const userSchema = new mongoose.Schema({
  username: {type:String,unique:true,required:"username"},  
  password: {type:String,required:"password"}  ,
  email: {type:String,required:"password"},
});
const userModel = mongoose.model("user",userSchema);
 //2. create a handler to listen to expresss features
let server = express();
const path = require('path');
 const bodyParser = require("body-parser");
 server.use(bodyParser.json())
 server.use(bodyParser.urlencoded({extended:true}))
 








// configure the server to be able to listen for requests
server.listen(4000, () => {
    console.log("server is listening................");
});

//3.set the engine that is to render files
server.set("view engine", "pug");

//4.specify where the engine is to pick views 
//compile them to html and then render them
//or serve them to the client application
let joinedpath = path.join(__dirname, "views");
server.set("views", joinedpath);


// generating paths/routes
// server.route('/',(req,res)=>{
//     res.send("hey,iam working")

// });
//sends the respons message in the browser
// server.get('/',(req,res)=>{
//     res.send("hey,iam working as a default")
// });

/*
1.products
2.services
3.aboutUs
4.contact
5.Home /index
*/


// for home page
server.get('/Home', (req, res) => {
    res.send("This is a home page")

});
// product page
server.get('/products', (req, res) => {
    res.send("This is a products page")

});
// services page
server.get('/services', (req, res) => {
    res.send("This is a services page")

});
server.get('/aboutUs', (req, res) => {
    res.send("AboutUs")
});


//gives u the form in the browser
server.get('/register',(req,res)=>{
    res.render('register_form')
})


//picks the data from the form
server.post('/register',(req,res)=>{
    res.json{
        "registration status","success"
        "developer","boni","firstname";req.body.firstname
    }
    res.send("you have been successfully registered")
    console.log(req.body.firstname)
})

/* >show databases or >show dbs  -shows you the databases
admin           0.000GB
config          0.000GB
images          0.000GB
local           0.000GB
node-demo       0.000GB
test-db         0.000GB
users           0.000GB
zooahackerthon  0.000GB

>use node-demo      -checks if u have that database and then adds it for use renders it ready for use else,
it will first create it
>show collections   -much like a table in sql
>db   -returns the name of the database currently being used

or db.createCollection(<<collectionName>>) - -creates a collection in a database eg { "ok" : 1 }
>show collections   -shows all collections in a database
>db.<<collectionName>>.insert({<<key>>:"<<value>>""}) -inserts properties in a collection 
 >db.student.find().pretty()
 >db.<<collectionName>>.find().pretty() -organises the fields in tablar n more organised way
