const express = require ("express");
const app = express();

const PORT = 8000;

app.get("/", function(req, res){
  res.send("Hello World");
});

app.get("/about", function (req, res){
  res.send("This is the about page.");
});

app.get("/:exit", function(req, res){
  res.send("This is another page that will work with any of these letters")
});

app.listen(PORT, function(){
  console.log("App listening on port " + PORT);
});