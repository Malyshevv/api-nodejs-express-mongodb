const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const db = require('./config/db')
const cookieParser = require('cookie-parser')

const sitemap = require('express-sitemap-html')

const app = express();
const port = 8000;

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect(db.url, (err, client) => {
    if (err) throw err;

    const db = client.db('ruvemru');

    require('./app/routes')(app,db);

    app.get('/sitemap', sitemap(app))
    sitemap.swagger('My API', app)

    app.listen(port, () => {
        console.log('Server Api is UP on port '+ port)
    })
})
