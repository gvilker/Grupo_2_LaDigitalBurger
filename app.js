
const express = require("express");
const app = express();


const dotenv = require ("dotenv").config();
const port = process.PORT || 3010;

const mainRouter = require ("./routers/mainRouter.js")
const usersRouter = require ("./routers/usersRouter.js")

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use("/", mainRouter)

app.use("/", usersRouter)
app.use("/", usersRouter)



app.listen(port,  () => {
    console.log("Servidor escuchando en http://localhost:" + port);
});















