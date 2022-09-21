

const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.urlencoded({extended: false}));

app.listen(process.env.PORT || 3000,() => console.log("servidor corriendo en el puerto 3000"));

app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./src/views/home.html"));
});



app.get("/register", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./src/views/register.html"));
});

app.post('/register', (req,res)=>{ 
    res.redirect('/');
});

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname, "src/views/login.html"));
});

app.post('/login', (req,res)=>{
    res.redirect('/');
});