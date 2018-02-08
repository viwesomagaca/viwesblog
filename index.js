const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const flash = require('express-flash');
const session = require('express-session');
const Models = require("./models")
const personalBlogRoutes = require("./personalBlog");
const blog = Models(process.env.MONGO_DB_URL || "mongodb://localhost/myblog");
const personalBlogroutes = personalBlogRoutes(blog);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.engine('handlebars',exphbs({defaultLayout : 'main'}) );
app.set('view engine', 'handlebars');
app.use(session({
    secret:'keyboard cat',
    cookie: { maxAge: 60000 *30 },
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    return res.status(200).json({});
  }
  next();
});

app.get("/api/blogpost" ,personalBlogroutes.index);
app.post("/api/blogpost", personalBlogroutes.myPosts);


let portNumber =process.env.PORT || 3009;
app.listen(portNumber, function(){
    console.log('Web application started on port ' + portNumber);
});
