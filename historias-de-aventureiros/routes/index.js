const express = require('express');
const router = express.Router();
const path = require('path');
const indexController = require("../controllers/indexController");

router.get("/", indexController.index);

// Rota para a página de cadastro
router.get('/entrarConta', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'entrarConta.html'));
});

module.exports = router;