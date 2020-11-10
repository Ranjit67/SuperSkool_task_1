const express = require("express");
const bodyParser = require("body-parser");

const app= express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");



app.use(require("./router/duplicatevalue.js"));     //first task.
app.use(require("./router/uniquevalue.js"));        //second task.

app.listen(process.env.PORT ||3000,()=>{
    console.log("The port is ready to start.");
})
