const express = require('express');
const fs = require ('fs');
const app = express();
const port = 3000;


const bodyParser = require('body-parser');
const { response } = require('express');
const { json } = require('express/lib/response');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));






function readFile(path){
    var fileContent = fs.readFileSync(path, "utf-8");
    return fileContent;
}
console.log(readFile('./person.json'));

function writeFile(path, data){
  fs.writeFileSync(path, data)
}



//endpoint
//reponde a um pedido http
// 1 é o rota/path do endpoint
// 2 é o codigo que vai ser executado quando esta endpoint for invocado

app.get('/', (req, res) => {
  res.send('teste , teste')
});


app.get('/users/:id', (req, res) => {

  var id = req.params.id;
  var person = personObject["person" + id];

  if(person == undefined){
    res.send("this id not exist");
  } else{
    res.send(person);
  }


});

app.post('/users', (req, res) => {
  // person que vem do body pedido
  var person = req.body;

  // selecionar as chaves no array e obter o seu tamanho
  var size = Object.keys(personObject).length;

  //incrementar 1 valor
  size++;
  //atribuir id igual ao tamanho
  person.id = size; 

  var str ='person';
  var personid = str + size;
    

  personObject[personid] = person;
  res.send(personObject);

  writeFile('./person.json', JSON.stringify(personObject));
  
});

app.put('/users/:id', (req, res) => {
  var id = req.params.id;
  var personfromBody = req.body;
  var person = personObject["person" + id];

  if(person == undefined){
    res.send("this person dont exist!");
  } else{
  personfromBody.id = parseInt(id);
  personObject["person" + id] = personfromBody;
  writeFile('./person.json', JSON.stringify(personObject));
  res.send(personfromBody);
    
  }
});

app.delete('/users/:id', (req, res) => {
  var id = req.params.id;
  var person = personObject["person" + id];

  if(person == undefined){
    res.send("this id not exist");
  } else{
    delete personObject["person" + id];
    writeFile('./person.json', JSON.stringify(personObject));
    res.send("this id" + " was delete");
    
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

var personsString = readFile('./person.json');
var personObject = JSON.parse(personsString);