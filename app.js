const express = require("express");
const app = express();
const path = require("path");

// Config do template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware para servir arquivos estaticos
app.use(express.static(path.join(__dirname, "public")));

// Rotas
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

// Iniciar o servidor
const PORTA = 8080;
app.listen(PORTA, () => {
     console.log("Servidor rodando na porta: ", PORTA);
});