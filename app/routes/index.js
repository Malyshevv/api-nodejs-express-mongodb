const newsRoutes = require('./newsRoutes')

module.exports = function(app,db) {
    newsRoutes(app,db)
}
