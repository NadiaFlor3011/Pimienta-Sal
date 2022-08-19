var express = require('express');
var router = express.Router();
const { home, detail } = require('../controllers/indexController');

/* GET home page. */
router
    .get('/', home)
    .get('/detalle/:id', detail);

module.exports = router;