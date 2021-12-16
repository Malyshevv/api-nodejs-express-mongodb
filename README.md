# 💭 API about
- api url - http://localhost:8000/
- api docs - http://localhost:8000/api-docs/  (auto gen. swagger sitemap)

# 🥸 API files settings
- /config/db.js
- /config/access.js

# 🤖 API methods
- /news/id - method: GET, info: singl post
- /news/ - method: GET,  info: all posts
- /news/ - method: POST,  info: insert post
- /news/id - method: DELETE,  info: delete post
- /news/id - method: PUT,  info: update post

# 💬 Info
- MongoDB Community Server - https://www.mongodb.com/try/download/community
- Postman - https://www.postman.com/downloads/
- для работы с json - https://www.json-generator.com/

# 🔌 Troubleshooting
Fix corss error

- Step 1
```
npm install cors
```
- Step 2 
add in server.js after ```require('./app/routes')(app,db);```
```
app.use(cors());
```
- Step 3

add in function sendQuery 
```
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
res.setHeader('Access-Control-Allow-Credentials', true); // If needed
```

