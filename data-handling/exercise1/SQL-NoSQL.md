### BLOQUE 1


# ¿Cuál es la diferencia principal entre una base de datos relacional (SQL) y una no relacional (NoSQL)?

Una base de datos relacional (SQL) tiene relacion entre las tablas y sus elementos. Cada elemento esta en una tabla de manera organizada y estructural. En una base de datos no relacional (NoSQL), los elementos son flexibles y no estan relacionados al 100% con una estuctura fija. 
En una aplicacion compleja, sea de compras, datos bancarios, etc. Es conveniente optar por una base de datos relacional, para mantener un orden y estructura fija.
Si hablamos de una aplicacion que tenga mucho contenido con datos cambiantes, no sirve tener una estructura fija. Es conveniente tener NoSQL.



# Nombrá al menos dos motores de base de datos relacionales, y dos no relacionales (de categorías distintas: documentos, clave-valor, o columnar).

Base de datos SQL --> PostgreSQL, MySQL.

Base de datos NoSQL --> MongoDB (documento), Redis (clave-valor)



# Tomemos el ejemplo de biblioteca (authors, books, loans) que ya usaste en el MATERIAL. En una base relacional, esos datos viven en 3 tablas separadas, conectadas por claves foráneas. Si tuvieras que modelar ese mismo ejemplo como base de datos de documentos (tipo MongoDB), una opción posible sería tener un solo documento por libro, con los datos del autor "adentro" del documento (en vez de en otra tabla aparte). Con esa idea como referencia: elegí 2 o 3 entidades de tu propio proyecto (por ejemplo, personajes y su casa/facción) y describí brevemente cómo se verían como documentos, en vez de como tablas separadas.

Asi se veria mi archivo JSON con los datos del ejemplo del material.
Se maneja por id del libro, y dentro del libro tenemos un objeto "author".

[
  {
    "_id": 1,
    "title": "Cien años de soledad",
    "year": 1967,
    "available": true,
    "author": {
      "name": "Gabriel García Márquez",
      "nationality": "Colombian"
    },
    "loans": []
  },
  {
    // aca iria id: 2
  }
  {
    // aca iria id: 3
  }
]



En mi proyecto, tenia personajes de harry potter.

[
    {
        "id": "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
        "name": "Harry Potter",
        "alternate_names": [
        "The Boy Who Lived",
        "The Chosen One",
        "Undesirable No. 1",
        "Potty"
        ],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor"
    },
    {
        "id": "4c7e6819-a91a-45b2-a454-f931e4a7cce3",
        "name": "Hermione Granger",
        "alternate_names": [
        "Hermy",
        "Know-it-all",
        "Miss Grant",
        "Herm-own-ninny"
        ],
        "species": "human",
        "gender": "female",
        "house": "Gryffindor"
    }
]



# ¿En qué situación elegirías una base no relacional en vez de una relacional? Dame un ejemplo concreto (no tiene que ser de tu proyecto).

Elegiria una base no relacional por ejemplo, para Google Maps. Es una app que debe tener un funcionamiento instantaneo y debe tener registro de tus lugares visitados.