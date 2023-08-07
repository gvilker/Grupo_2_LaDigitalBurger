
const express = require("express");
const methodOverride = require('method-override');
const dotenv = require ("dotenv").config();
const port = process.PORT || 3010;
const path = require('path');

const app = express();





const mainRouter = require ("./routers/mainRouter.js")
const usersRouter = require ("./routers/usersRouter.js")
const productRouter = require ("./routers/productRouter.js")
const cartRouter = require ("./routers/cartRouter.js")
/*
const modificarRouter = require ("./routers/modificarRouter.js")
*/

app.set("view engine", "ejs");

app.set('views', [
    path.join(__dirname, './views')
]);



app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(methodOverride('_method'));

app.use("/", mainRouter)

app.use("/user", usersRouter)

app.use("/products", productRouter)

app.use("/cart", cartRouter)

app.use((req, res) => {
    res.render('404');
});
/*
app.use("/modificar", modificarRouter)
*/


app.listen(port,  () => {
    console.log("Servidor escuchando en http://localhost:" + port);
});















