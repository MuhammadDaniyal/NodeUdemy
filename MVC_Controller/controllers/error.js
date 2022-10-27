
exports.errorPage = (req, res) => {
    res.status(404).render('error404', {
        pageTitle: "Shop Website",
        content: 'Page Are NOt Found',
        path: '*'
    })
}