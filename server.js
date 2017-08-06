var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
 'article-one': {
    title : "Article One | Suyash Pawar",
    heading: "Article One",
    date: "Jun 5,2015",
    content: "This is my first content"
        },
        'article-two': {
    title : "Article Two | Suyash Pawar",
    heading: "Article two",
    date: "Jun 10,2015",
    content: "This is my second content"
        },
        'article-three': {
    title : "Article Three | Suyash Pawar",
    heading: "Article Three",
    date: "Jun 15,2015",
    content: "This is my third content"
        },
};
function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content =data.content;

var htmlTemplate =`
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width,initial-scaled=1">
    </head>
    <body>
        <div>
            <a href="/">home</a>
        </div>
        <hr/>
        <h3>
              ${heading}
        </h3>
        <div>
              ${date}
        </div>
        <div>
            <p>
                ${content}
            </p>
        </div>
    </body>
</html>`;    
}

app.get('/:articleName', function (req, res) {
    
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
