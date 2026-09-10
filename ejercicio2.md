# Ejercicio 2:

# A.1 - 

La version de TLS que aparece es la siguiente: TLSv1.3

El código de status de la respuesta es el siguiente: 
* Request completely sent off
< HTTP/2 200 

3 headers de la respuesta:
< date: Thu, 10 Sep 2026 13:23:45 GMT
- Es la fecha de la petición.

< content-type: application/json; charset=utf-8
- Es el tipo de contenido de la respuesta.

< content-length: 292
- Es el largo de la respuesta.

# A.2 - 

https://jsonplaceholder.typicode.com/posts/1/comments
Devuelve 5 comentarios, con id distinta cada uno.

Para filtrarlos, usamos “?” al final y sacamos la id individual.
Use:
https://jsonplaceholder.typicode.com/comments?postId=1
Y devuelve el comentario con id 1.


# A.3 -

Realicé un post y devolvió HTTP/2 201.

El servidor le asignó la id 101.

El servidor le asigna una id pero no lo registra en la base de datos.


# A.4 -


curl -X PATCH https://jsonplaceholder.typicode.com/posts/1 \                         
     -H "Content-Type: application/json" \
     -d '{"title": "cambiando el titulo con patch"}'

PATCH modifica el elemento que estoy trabajando, mientras que PUT reemplaza el elemento que estoy modificando.




curl -X PUT https://jsonplaceholder.typicode.com/posts/1 \
     -H "Content-Type: application/json" \
     -d '{"title": "cambiando el titulo con put”}’

En el PATCH, muestra el objeto completo, incluyendo el elemento cambiado.
En el PUT, solo se muestra el elemento modificado y la id.


# A.5 - 

curl -i -X DELETE https://jsonplaceholder.typicode.com/posts/1

El DELETE devolvió un status: HTTP/2 200
No devuelve un body como contenido porque el ‘post/1’ fue eliminado.


# A.6 -

curl -i https://jsonplaceholder.typicode.com/posts/9999

Al pedir un post con id muy alto, devuelve un status 404, lo que equivale a ‘Not Found’
HTTP/2 404 
No posee body porque no encontró un post con esa id.
