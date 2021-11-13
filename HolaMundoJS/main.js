/*console.log("Hola mundo");
var json = '{"nombre":"Manuel","edad":23,"nacionalidad":"Mexicana","hobbies":["ajedrez","video juegos","comics"],"mascota":{ "especie":"perro", "nombre":"dui", "edad":1 } }'; 
var obj = JSON.parse(json); 
var nombreMascota = obj.mascota.nombre;
console.log(nombreMascota);

var buffer1 = Buffer.alloc(20);
var buffer2 = Buffer.from('Hola este es un buffer');

console.log('Este es un Buffer vacio');
console.log(buffer1);
console.log('Este es el buffer creado con la cadena de caracteres');
console.log(buffer2);
console.log(buffer2[0]);

buffer2[0] = 23;buffer2[1] = 45;buffer2[2] = 10;buffer2[3] = 80;*/

//console.log(buffer2.toString());

//process.stdin.resume();
//process.stdin.setEncoding('ascii');
/*process.stdin.resume();
process.stdin.setEncoding('ascii');
process.stdin.on('data', function(line){  process.stdout.write(line);});*/

/*const fs = require('fs');
fs.writeFileSync('archivo.txt', "Hola, este es un archivo nuevo, creado de manera sincrónica");
fs.writeFile('archivo2.txt', "Hola, este es un archivo nuevo, creado de manera asincrónica", (err) => {   if (err)       console.log(err);   else {   }});


fs.readFileSync('info.txt', 'utf8');
let informacion = fs.readFileSync('info.txt', 'utf8');
console.log(informacion);
fs.unlinkSync('archivo.txt');*/

process.stdin.resume(); 
process.stdin.setEncoding('ascii'); 
function saludar(nombre) { 
console.log('Hola ' + nombre); 
} 
function pedirNombre(callback) { 
console.log("Escribe tu nombre: "); 
process.stdin.on('data', function (line) { 
callback(line); 
process.exit(); 
}); 
} 
pedirNombre(saludar); 