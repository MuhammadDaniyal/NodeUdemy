const express = require('express')
const app = express()
const path = require('path')
const adminRoute = require('./routes/admin');
const bodyParser = require('body-parser');

// set the view (template) engine
app.set('view engine', 'ejs')

// khn sy milna hy issy content view directory sy 
app.set('views', 'views')

// serve the file statically
// give permission Grant read access to website of public folder 
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: false})); // form fill kalya kaam ata json ma data convert krta

app.use('/admin', adminRoute)
app.use(require('./routes/shop'))


// yeh endpoint run hoga jb url ky endpoint match nh krenga mtlb errorPage 404 
app.use((req, res)=>{
    // res.status(404).sendFile(path.join(__dirname,'views','error404.html')) // we add manullay too by concating but we use path module to isi trhn krta hen segment wise
    res.status(404).render('error404',{
        pageTitle: "Shop Website",
        content: 'Page Are NOt Found'
    })
})


app.listen(8000, () => {
    console.log('Listen Server');
})