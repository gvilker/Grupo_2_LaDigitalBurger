const { log } = require("console");
const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
    const ruta = path.join(__dirname, "./views/home.html");
    res.sendFile(ruta);
});

app.get("/login", (req, res) => {
    const ruta = path.join(__dirname, "./views/login.html");
    res.sendFile(ruta);
});

app.get("/Register", (req, res) => {
    const ruta = path.join(__dirname, "./views/register.html");
    res.sendFile(ruta);
});

app.get("/carrito", (req, res) => {
    const ruta = path.join(__dirname, "./views/carrito.html");
    res.sendFile(ruta);
});

const publicFolder = path.resolve(__dirname, "./public");
app.use(express.static(publicFolder));

app.listen(3010, () =>{
    console.log("El servidor esta escuchando en el 3010");
});