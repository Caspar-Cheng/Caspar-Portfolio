const express = require("express");
const app = express();
const ejs = require("ejs")

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("about");
});

app.get("/js-projects", function(req, res){
    res.render("js-projects");
});

app.get("/py-projects", function(req, res){
    res.render("py-projects");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server started on port 3000");
})