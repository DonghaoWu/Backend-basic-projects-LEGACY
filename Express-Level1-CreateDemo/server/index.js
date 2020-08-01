//to run this file, run command 'node server/index.js'
//console.log(" ==================================================> Listening");
let key = process.env.React_APP_API_KEY;
//In frontend, this is similar to **import {Component} from 'react';**
const express = require("express");
//Invoke express function, return a new server.
const app = express();
const port = 3000;

//Middleware part, make sure to include these lines every time you set up a server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const morgan = require(`morgan`);
app.use(morgan("dev"));

/*
example 1: how to set up a get route

//set up a get request route and the callback on the new server
//Every callback function you write to create a route will always have at least
//TWO arguments, a request(req) and a response(res), similar to handleChange(e)
//These represent the actual request your api will recieve, and what you will send back.

app.get("/puppies", (req, res) => {
  res.send("Here is a puppy!");
});
//using the parameter from request
app.get("/puppies/:puppy", (req, res) => {
  const name = req.params.puppy;
  res.send(`This is ${name}`);
});
*/

/*
example 2:how to implement route tree, originally we can add our routes to
server/index.js, but we can organize things alot better by separating them.

step 1: create a api folder, with a index.js file inside of it.
step 2: create a new route to api folder
*/
app.use("/api", require("./api"));

//set up the port of the new server, make it alive;
const server = app.listen(port, () => {
  console.log(`Port ${port} is listening now.==============>`);
});

// const express = require('express')
// const app = express()
//
// const server = app.listen(3000, function(){
//     console.log('listening ...')
// })
//
// const morgan = require('morgan')
// app.use(morgan('dev'))
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
//
// app.use('/api',require ('./api'))
