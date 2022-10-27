
const products = []

exports.getAddProductPage = (req, res) => {
    res.render('add-product',{ // returning a view
        pageTitle: "Add Product",
        path: "/admin/add-product"
    })
}

exports.postAddProduct = (req, res) => {
    products.push({ title: req.body.title })
    res.redirect('/')
}

exports.getProducts = (req, res)=>{
    res.render('shop',{ // returning a view
        prods: products, // dynamic data 
        pageTitle:"Shop Website",
        path:'/'
    })
}
