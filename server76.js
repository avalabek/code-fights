const express = require("express");
const app = express ();

const PORT = 8000;

app.get("/", function(req, res){
  res.send("Home page");
})
app.listen(PORT, function(){
  console.log("App listening on port " + PORT);
})