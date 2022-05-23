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
// app = instancia da aplicaçao
// get/post/delete = metodo http
// /product/... caminho endpoint 
// request= pedido   // response = resposta

app.get('/product', function(request,response){
    connection.query("SELECT * FROM product", function (err, rows, fields) {
        response.send(rows);
    }) 
});

//exercicio b
// SET = UPDATE DE UMA COLUDA EXPECIFICA 
//inser = adicionar 
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

//exercicio D

app.put('/product/:id/views', function(request,response){
    var id = request.params.id;              
    connection.query("UPDATE product SET views = views + 1 WHERE id = ?",  [id],function(err, rows, fields){
        response.send("Foi adicionado views ao produto " + id);
    });
});


//exercicio E
app.get('/product/tags', function(request,response){
    var tagg = request.query.tags;
    connection.query("SELECT * FROM product WHERE tags = ? ",[tagg] ,function (err, rows, fields) {
        response.send(rows);
    })
});



//Parte B
//Exericio A
app.get('/product/id', function(request,response){
    var id = request.query.id;
    connection.query("SELECT * FROM product WHERE id =?",[id], function (err, rows, fields) {
        response.send(rows);
    }) 
});


//exercicio b

  app.delete('/product/:id', (request, response) => {
    var id = request.params.id;
        connection.query("DELETE FROM product WHERE id = ?",[id], function (err, rows, fields) {
            if (err) throw err;
            response.send("Affected Rows:" + rows.affectedRows);
        }) 
});

//exercicio c
app.put('/product/:id/:images', function(request,response){
    var imagens = request.params.images;
    var id = request.params.id;

    connection.query("SELECT * FROM product WHERE id = ?",  [id],function(err, rows, fields){
        var nc = rows[0].images + ";" + imagens;
        if (err) throw err;


        connection.query("UPDATE product SET images = ? WHERE id = ?",  [nc,id],function(err, rows, fields){
            if (err) throw err;

            connection.query("SELECT * FROM product WHERE id = ?",  [id],function(err, rows, fields){
                response.send(rows)
            })
        })
    });
 })


//exercicio d
app.put('/product/id', function(request,response){
    var id = request.query.id;
    var comentario = request.query.comments;

    connection.query("SELECT * FROM product WHERE id = ?",  [id],function(err, rows, fields){
        var nc = rows[0].comments + ";" + comentario;
        if (err) throw err;


        connection.query("UPDATE product SET comments = ? WHERE id = ?",  [nc,id],function(err, rows, fields){
            if (err) throw err;

            connection.query("SELECT * FROM product WHERE id = ?",  [id],function(err, rows, fields){
                response.send(rows)
            })
        })
    });
 })

//exercicio e


app.get('/product/views', function(req, res){
    connection.query("SELECT * FROM product", function(err,rows,fields){
        rows.sort(function(b,a){
            return b.views - a.views;
        });
        res.send(rows);
    })
})
