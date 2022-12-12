const Product = require('../models/product.model')

module.exports.getProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(product => {
            console.log(product)
            res.json(product)
        })
        .catch(err => {
            console.error(err)
            res.json(err)
        })
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    .then((product) => res.json(product))
    .catch((err) => res.json(err))
}