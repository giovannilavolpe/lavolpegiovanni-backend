# node version: v24.19.0

# EJERCICIO 1 --> 01-hola.js


console.log(document) --> no funciona
console.log(window) --> no funciona

Node.js es un entorno de ejecución que permite ejecutar codigo JavaScript fuera del navegador web, directamente en el servidor o en tu propia computadora.

Node.js se enfoca en la logica del sistema, mientras que el navegador, al tener acceso al DOM, se centra en gestionar los elementos visuales del usuario. 

El navegador usa objetos globales como document o window. Node.js no posee los mismos, pero si tiene un objeto similar, llamado "global". Su funcionamiento es parecido a 'window' en navegador.

Node.js tiene como ventaja el acceso total al sistema operativo y un control total del entorno.


# EJERCICIO 6 --> 06-servidor.js

Un servidor HTTP es un programa informático que procesa solicitudes web utilizando el protocolo HTTP (Hypertext Transfer Protocol), actuando como un intermediario que escucha de forma constante las peticiones de los clientes (como un navegador web) y les devuelve una respuesta (como páginas HTML, o datos en forma de JSON). 
El módulo HTTP de Node.js es una biblioteca integrada que permite crear servidores web y comunicarse con otras API mediante el protocolo HTTP.

En un servidor de Node, 'req' es 'request', que representa las peticiones del cliente. 'res' es 'response', procesa la solicitud y devuelve el resultado. Este mismo puede tener varios status code, siendo 200 el ok, 404 si no existe, entre otros.

Un puerto es una dirección lógica dentro de una computadora que sirve como una puerta de entrada específica para que viajen los datos a través de una red. Que un servidor "escuche" significa que mantiene antención esperando a que llegue tráfico de red dirigido específicamente al numero de puerto.

Localhost es un nombre de dominio que se utiliza para referirse a la dirección IP de loopback en un dispositivo local, como un ordenador personal. 

Curl nos permite: Enviar solicitudes web directamente desde la terminal de comandos, recibir respuestas de servidores y APIs sin necesidad de una interfaz gráfica, nos permite definir métodos HTTP (como GET, POST, PUT, DELETE)y enviar encabezados (headers) personalizados, cookies o datos de autenticación. 
Es util para probar un servidor sin usar el navegador, debido a que devuelve respuestas rapidas, sin estilos ni imagenes. Podemos utilizar metodos HTTP donde en un navegador puede no ser lo mas comodo.