const ObjectID = require('mongodb').ObjectId;
const {firewall,expressAccessToken} = require('../../config/access')

module.exports = function(app,db) {
    //http://localhost:8000/news/_id_ - GET (singl post)
    app.get('/news/:id', expressAccessToken, firewall,(req, res) => {
        const params = { '_id': new ObjectID(req.params.id) };
        db.collection('News').findOne(params, (err, result) => {
            if(err) {
                res.send({'error': err})
            } else {
                res.send(result)
            }
        })
    });

    //http://localhost:8000/news/ - GET  (all posts)
    app.get('/news/', expressAccessToken, firewall,(req, res) => {
        db.collection('News').find().toArray((err, result) => {
            if(err) {
                res.send({'error': err})
            } else {
                res.send(result)
            }
        })
    });

    //http://localhost:8000/news/ - POST (insert post)
    app.post('/news/', expressAccessToken, firewall,(req,res) => {
        const news = { text: req.body.body, title: req.body.title }
        db.collection('News').insert(news, (err, result) => {
            if(err) {
                res.send({'error': err})
            } else {
                res.send(result)
            }
        })
    });

    //http://localhost:8000/news/id - DELETE (delete post)
    app.delete('/news/:id', expressAccessToken, firewall,(req,res) => {
        const id = req.params.id;
        const params = { '_id': new ObjectID(id) };

        db.collection('News').remove(params, (err, result) => {
            if(err) {
                res.send({'error': err})
            } else {
                res.send('News ' + id + ' deleted!')
            }
        })
    });

    //http://localhost:8000/news/id - PUT (update post)
    app.put('/news/:id', expressAccessToken, firewall,(req,res) => {
        const id = req.params.id;
        const params = { '_id': new ObjectID(id) };
        const news = { text: req.body.body, title: req.body.title }

        db.collection('News').update(params, {$set: news}, (err, result) => {
            if(err) {
                res.send({'error': err})
            } else {
                res.send(news)
            }
        })
    });
}
