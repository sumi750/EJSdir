const express = require("express");

const app = express();
const path = require("path");

let port = 8001;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); 

app.listen(port, ()=>{
    console.log("Port Has Started ", port);
})

app.get("/", (req,res)=>{
    res.render("home.ejs");  // By default search views directory
})
app.get("/rollDice", (req,res)=>{
    let diceVal = Math.floor(Math.random()*6) +1;  // let comes from db
    res.render("rollDice.ejs", {num: diceVal});  // By default search views directory
})

app.get("/hello", (req,res)=>{
    res.send("Hello");
})
app.get("/ig/:username", (req,res)=>{
    const inData = require("./data.json");
    // const follower = ["adam","sumit","kumar"];
    let {username }= req.params;
    let data = inData[username]

    console.log(data);
    // res.render("insta.ejs", {username, follower} );
    res.render("insta.ejs", {data});
});
