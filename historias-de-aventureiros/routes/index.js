const express = require('express');
const router = express.Router();
const path = require('path');
const indexController = require("../controllers/indexController");

router.get("/", indexController.index);

// Rota para a página de login
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
});

// Rota para a página de cadastro
router.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'cadastro.html'));
});

module.exports = router;