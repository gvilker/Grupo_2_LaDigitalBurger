
const express = require("express");
const app = express();


const dotenv = require ("dotenv").config();
const port = process.env.PORT ||3010;

const mainRouter = require ("./routers/main.js")

app.use(express.static("public"));

app.listen(port,  () => {
    console.log("Servidor escuchando en http://localhost:${port}");
});

app.use("/", mainRouter)

/*
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

app.get("/producto", (req, res) => {
    const ruta = "./views/producto.html";
    res.sendFile(path.resolve(__dirname, ruta))
});*/









