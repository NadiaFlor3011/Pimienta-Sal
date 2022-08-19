var express = require('express');
var router = express.Router();
const { Home, Detail } = require('../controllers/indexController');

/* GET home page. */
router
    .get('/', Home)
    .get('/detalle', Detail);

module.exports = router;