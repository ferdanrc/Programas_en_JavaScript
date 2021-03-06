/*const http = require("http");
const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.end('<html><body><h1>This is HTML</h1></body></html>');
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`); 
});

//res.setHeader("Content-Type", "text/html");
//'<html><body><h1>This is HTML</h1></body></html>'

console.log("hola mundo");*/


/*var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hola Mundo');
});

app.get('/saludo', function (req, res) {
   res.send('Solicitud de saludo recibida');
});

app.listen(8000, function () {
  console.log('Servidor corriendo en el puerto 8000');
});*/

var express = require('express');
var app = express();
const path = require('path');
app.use(express.json());       
app.use(express.urlencoded()); 

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/html/index.html'));
 
});

app.get('/saludo', function (req, res) {
    res.send('Solicitud de saludo recibida');
});

app.post('/respuesta', function (req, res) {
    res.send("Nombre ingresado: "+req.body.nombre);
    console.log("Información enviada");
});

app.listen(8000, function () {
    console.log('Servidor corriendo en el puerto 8000');
 });
