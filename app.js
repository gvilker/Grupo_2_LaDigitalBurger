
const express = require("express");
const app = express();


const dotenv = require ("dotenv").config();
const port = process.PORT || 3010;

const mainRouter = require ("./routers/mainRouter.js")
const usersRouter = require ("./routers/usersRouter.js")
const productRouter = require ("./routers/productRouter.js")
const cartRouter = require ("./routers/cartRouter.js")

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use("/", mainRouter)

app.use("/users", usersRouter)

app.use("/product", productRouter)

app.use("/cart", cartRouter)




app.listen(port,  () => {
    console.log("Servidor escuchando en http://localhost:" + port);
});















