# Ejercicio 2:


# PARTE A

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

curl -i -Xf DELETE https://jsonplaceholder.typicode.com/posts/1

El DELETE devolvió un status: HTTP/2 200
No devuelve un body como contenido porque el ‘post/1’ fue eliminado.


# A.6 -

curl -i https://jsonplaceholder.typicode.com/posts/9999

Al pedir un post con id muy alto, devuelve un status 404, lo que equivale a ‘Not Found’ (No encontrado):
HTTP/2 404 
No posee body porque no encontró un post con esa id.



# PARTE B

POSTMAN:


# A.1 -

{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}

# A.2 -


[
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
  {
    "postId": 1,
    "id": 3,
    "name": "odio adipisci rerum aut animi",
    "email": "Nikita@garfield.biz",
    "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  },
  {
    "postId": 1,
    "id": 4,
    "name": "alias odio sit",
    "email": "Lew@alysha.tv",
    "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
  },
  {
    "postId": 1,
    "id": 5,
    "name": "vero eaque aliquid doloribus et culpa",
    "email": "Hayden@althea.biz",
    "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
  }
]