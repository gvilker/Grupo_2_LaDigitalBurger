
const express = require("express");
const methodOverride = require('method-override');
const dotenv = require ("dotenv").config();
const port = process.env.PORT || 3010;
const path = require('path');
const session = require('express-session')
const cookieParser = require('cookie-parser');
const logMiddleware = require('./middlewares/logMiddleware');
const maintenanceMiddleware = require('./middlewares/maintenanceMiddleware');
const cookieAuthMiddleware = require('./middlewares/cookieAuthMiddleware');

const app = express();


const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');





const mainRouter = require ("./routers/mainRouter.js")
const usersRouter = require ("./routers/usersRouter.js")
const productRouter = require ("./routers/productRouter.js")
const cartRouter = require ("./routers/cartRouter.js");
const { cookie } = require("express-validator");

/*
const modificarRouter = require ("./routers/modificarRouter.js")
*/

app.set("view engine", "ejs");

app.set('views', [
    path.join(__dirname, './views')
]);

app.use(session({
    secret: 'No me comprenden', // cadena de texto secreta
    resave: false, // para que se guarde solo si se hicieron cambios
    saveUninitialized: true
  }));
app.use(userLoggedMiddleware);
app.use(maintenanceMiddleware);
app.use(logMiddleware);
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.json());
app.use(methodOverride('_method'));


app.use(cookieAuthMiddleware);  
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


// npm i express-session,
// npm i bcrypt,



// adicionales: carrito de compras y pago con mercado pago












