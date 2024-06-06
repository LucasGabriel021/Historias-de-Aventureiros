const express = require("express");
const app = express();
const path = require("path");

// Config do template engine
// Configuração do diretório de views e motor de template
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// Configuração para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

// Iniciar o servidor
const PORTA = 8080;
app.listen(PORTA, () => {
     console.log("Servidor rodando na porta: ", PORTA);
});