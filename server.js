//create package json to save all dependencies first by typing the following in command line: (npm init --yes) to create default package
//then install express.js dependency (npm install -S express) or (npm install express --save) "-S" saves the dependency to json package
//then create gitignore file. refer to this link for how to create file in windows https://stackoverflow.com/questions/10744305/how-to-create-gitignore-file
//then install nodemon (npm install -g nodemom) "-g" means globally so it can be used no matter what project you are working on 
//then install socket.io (npm install -s socket.io)  socket allows you to connect both frontend and backend
//then install bodyparser (npm install body-parser)
//then install mongoose (npm install -s mongoose) Mongoose is a database that works with mongoDB
//for testing install jasmine (npm install -g jasmine), then create spec folder with (jasmine init). Then change the test to in package.json to "jasmine" and save. 
//run test with (npm test)
const fs = require('fs');
const express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Express 'Routes'
app.use(express.static('.'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
http.listen(process.env.PORT, process.env.IP, function(error){
    if(error){
        console.log("there is an error")
    }else{ console.log("OK")}
    
    console.log("Server has started");
});
// Server Config End