const express = require('express')
const app = express()
const path = require('path')
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error')

// set the view (template) engine
app.set('view engine', 'ejs')

// khn sy milna hy issy content view directory sy 
app.set('views', 'views')

// serve the file statically
// give permission Grant read access to website of public folder 
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false })); // form fill kalya kaam ata json ma data convert krta

app.use('/admin', adminRoute)
app.use(shopRoute)


// yeh endpoint run hoga jb url ky endpoint match nh krenga mtlb errorPage 404 
app.use(errorController.errorPage)
// app.get('*',errorController.errorPage)


app.listen(8000, () => {
    console.log('Listen Server');
})