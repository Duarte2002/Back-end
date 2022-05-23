const express = require('express');
var fs = require('fs');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));


var server = app.listen(8083, function(){
    var host = server.address().address;
    var port =server.address().port;

    console.log("example app listening at http://%s%s", host, port);
});

function readFile(fileName) {
    var file = fs.readFileSync(fileName, 'utf-8');
    return file;
}


app.get('/', (req, res) => {
    var body = "hello world";
    res.writeHead(200, {
        "Content-Length": Buffer.byteLength(body),
        "Content-Type": "text/plain"
    });
    res.end(body);
})

app.get('/html', (req, res) => {
    var body = "<html><h1>boas</h1></html>";
    res.writeHead(200, {
        "Content-Length": Buffer.byteLength(body),
        "Content-Type": "text/html"
    });
    res.end(body);
})

app.get('/html2', (req, res) => {
    var body = fs.readFileSync('./index.html');
    res.writeHead(200, {
        "Content-Length": Buffer.byteLength(body),
        "Content-Type": "text/html"
    });
    res.end(body);
})

app.get('/html3', (req, res) => {
    var body = fs.readFileSync('./index.html', "utf-8");
    var date = new Date();
    body = body.replace("ola", date.toDateString());

    res.writeHead(200, {
        "Content-Length": Buffer.byteLength(body),
        "Content-Type": "text/html"
    });
    res.end(body);
})

app.get('/user/:name', (req, res) => {
    var name = req.params.name;

    var body = readFile('./index.html', "utf-8");
    body = body.replace('send', name)
    res.writeHead(200, {
        "Content-Length": Buffer.byteLength(body),
        "Content-Type": "text/html"
    });
    res.end(body);
  })


