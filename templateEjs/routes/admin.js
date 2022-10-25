const express = require('express')
const path = require('path')
const router = express.Router()
const rootDir = require('../util/path')

const products = []

router.get('/add-product', (req, res) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html')) // we add manullay too by concating but we use path module to isi trhn krta hen segment wise
    res.render('add-product',{
        pageTitle: "Add Product",
        path: "/admin/add-product"
    })
})

router.post('/add-product', (req, res) => {
    products.push({ title: req.body.title })
    // console.log(req.body.title);
    // console.log(products);
    res.redirect('/')
})

exports.routes = router;
exports.products = products;
