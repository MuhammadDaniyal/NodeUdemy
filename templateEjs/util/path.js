const path = require('path')

// main => refers where your application started -> app.js
// filename => we put in dirname to get a path to that directory
module.exports = path.dirname(require.main.filename)