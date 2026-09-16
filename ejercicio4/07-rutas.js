const { createServer } = require('node:http');

const hostname = 'localhost';
const port = 3000;
const server = createServer((request, response) => {
    response.statusCode = 200;
    
    response.setHeader('Content-Type', 'text/plain');
    
    if (request.url === '/') {
    response.end('Bienvenido a la página principal');
    }
    else if (request.url === '/alumnos') {
    response.end('Carlos, Maria, Juan');
    }
    else {
        response.end('No encontrado');
    }

});

server.listen(port, hostname, () => {
  console.log(`el link del servidor es: http://${hostname}:${port}/`);
});