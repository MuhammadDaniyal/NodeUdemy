const path = require('path')
const express = require('express')
const router = express.Router()
const rootDir = require('../util/path')
const adminData = require('./admin')

router.get('/',(req, res)=>{
    // res.sendFile(path.join(rootDir,'views','shop.html')) // we add manullay too by concating but we use path module to isi trhn krta hen segment wise
    res.render('shop',{
        prods: adminData.products, // dynamic data 
        pageTitle:"Shop Website",
        path:'/'
    })
})

module.exports = router;