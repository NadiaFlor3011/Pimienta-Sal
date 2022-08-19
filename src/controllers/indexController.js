const products = require('../data/products');




module.exports = {
    home: (req, res) => {

        res.render('index', {
            products
        })
    },
    detail: (req, res) => {
        const { id } = req.params;
        const product = products.find(product => product.id === +id);

        res.render('detalleMenu', {
            product
        })

    }
}