const express = require("express");
const path = require("path");
const app = express();
const port = 3030;

app.use(express.static("public"));

//view

app.get("/", (req, res)=> res.sendFile(path.join(__dirname, "views", "home.html")));

//listen

app.listen(port, ()=>console.log("Servidor funcionando en http://localhost:" + port));