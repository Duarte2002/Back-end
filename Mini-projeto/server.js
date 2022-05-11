const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));


var server = app.listen(8081, function(){
    var host = server.address().address;
    var port =server.address().port;

    console.log("example app listening at http://%s%s", host, port);
});


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'Products'
});

//parte a
//exercicio a
app.get('/product', function(request,response){
    connection.query("SELECT * FROM product", function (err, rows, fields) {
        response.send(rows);
    }) 
});
//exercicio b
app.post('/product', function(request,response){
    var product = request.body;
    connection.query("INSERT INTO product SET ? ",[product], function (err, rows, fields) {
        response.send("product inserted with id:"+ rows.insertId);
    }) 
});
//exercicio c

app.get('/product/seller_id', function(request,response){
    var seller = request.query.seller_id;
    connection.query("SELECT * FROM product WHERE seller_id = ?",[seller], function (err, rows, fields) {
        response.send(rows);
    }) 
});


//exercicio d

//exercicio e

app.get('/product/tags', function(request,response){
    var tagg = request.query.tags;
    connection.query("SELECT * FROM product WHERE tags = ? ",[tagg] ,function (err, rows, fields) {
        response.send(rows);
    })
});

//Parte b
//Exericio a
app.get('/product/id', function(request,response){
    var id = request.query.id;
    connection.query("SELECT * FROM product WHERE id =?",[id], function (err, rows, fields) {
        response.send(rows);
    }) 
});


//exercicio b

  app.delete('/product/:id', (request, response) => {
    var product = "DELETE FROM products WHERE id = ?";
    var id = request.params.id;

        connection.query(product, id, function (err, rows, fields) {
            if (error) throw error;
            response.send("Affected Rows:" + rows.affectedRows);
        }) 
  });


//exercicio c

//exercicio d
app.post('/product/id', function(request,response){
    var comments = request.query.body;
    connection.query("INSERT INTO product SET ? ",[comments], function (err, rows, fields) {
        response.send("comments inserted with id:"+ rows.insertId);
    }) 
});