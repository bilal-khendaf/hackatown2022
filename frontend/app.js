const express = require("express");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static("public"));

app.get("/inscription", (req,res) =>{
    res.sendFile(__dirname +"/public/forms/signup/signup.html")
})

app.get("/connexion", (req,res) =>{
    res.sendFile(__dirname +"/public/forms/login/login.html")
})

app.get("/page1", (req,res) =>{
    res.sendFile(__dirname + "/public/FirstPage.html")
})
app.get("/page2", (req,res) =>{
    res.sendFile(__dirname + "/public/SecondPage.html")
})
app.listen(PORT, () => {
    console.log(`Mon application frontale roule sur http://localhost:${PORT}`);
})
