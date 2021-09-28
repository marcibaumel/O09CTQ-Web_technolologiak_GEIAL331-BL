//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req, res){
    var num1 =Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("Result of the calculation: "+result);
});

app.get("/fullCalculator", function(req, res){
    res.sendFile(__dirname+"/fullCalculator.html");
});

app.post("/fullCalculator",function(req, res){
    var num1 =Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var op = req.body.operator;

    var result = null;

    if(op === "+"){
        result = num1 + num2;
    }
    else if(op === "-"){
        result = num1 - num2;
    }
    else if(op === "*"){
        result = num1 * num2;
    }
    else{
        result = num1 / num2;
    }
    
    res.send("Result: "+result);
});



app.listen(3000, function(){
    console.log("Server started on port 3000");
});

