const products = require('../data/products');

module.exports = {
    Home: (req, res) => {
        res.render('index', {
            products
        })
    },
    Detail: (req, res) => {
        res.render('detalleMenu')
    }
}