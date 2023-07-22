
const express = require("express");
const app = express();

const path = require("path");
const dotenv = require ("dotenv").config();
const port = process.env.PORT ||3010;

app.listen(port, () =>{
    console.log("El servidor esta escuchando en el puerto" + port + "http://localhost:" + port);
});

app.get("/", (req, res) => {
    const ruta = "./views/home.html";
    res.sendFile(path.resolve(__dirname, ruta))
});

app.get("/login", (req, res) => {
    const ruta = "./views/login.html";
    res.sendFile(path.resolve(__dirname, ruta))
});

app.get("/Register", (req, res) => {
    const ruta = "./views/register.html";
    res.sendFile(path.resolve(__dirname, ruta))
});

app.get("/carrito", (req, res) => {
    const ruta = "./views/carrito.html";
    res.sendFile(path.resolve(__dirname, ruta))
});

const publicFolder = path.resolve(__dirname, "./public");
app.use(express.static(publicFolder));

