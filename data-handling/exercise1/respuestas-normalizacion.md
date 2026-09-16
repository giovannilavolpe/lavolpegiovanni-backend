### BLOQUE 2

# ¿Qué problema concreto tiene una tabla única que repite datos de un mismo autor en cada fila de libro (en vez de separar autores y libros en dos tablas)?

El problema que tendra una tabla unica que repite datos de un mismo autor en cada fila de libro, es la redundancia de datos. Si un autor cambia de datos o tuvo un error de tipografia, tendremos que modificar todas y cada una de las columnas donde este ese autor. Claramente no es una buena practica, perdemos tiempo y optimizacion.



# ¿Qué es la normalización, con tus propias palabras?

La normalizacion es el proceso de organizar datos dentro de una base de datos, para tener una mejor optimizacion. Con esto logramos eliminar la redundancia que hablamos en el punto anterior, mejoramos el tiempo de repuesta y vemos mejor organizadas y de manera mas sencilla las tablas.



# La normalización tiene niveles formales llamados 1FN, 2FN y 3FN, cada uno más estricto que el anterior. Investigá qué es la 1FN (Primera Forma Normal). Explicá con tus propias palabras qué regla exige.

La Primera Forma Normal (1FN) es la regla básica de la normalización de bases de datos que exige que cada celda de una tabla contenga un único valor atómico (indivisible) y que no existan grupos de datos repetidos.

Notas:
'Valores atómicos' significa que debe almacenar un solo dato que no se pueda dividir más. No se permiten listas o varios elementos separados por comas en una misma celda.

Entidad es el nombre que le damos a cada "cosa" distinta que modelamos como su propia tabla (por ejemplo, en el ejemplo de biblioteca, "autor" es una entidad y "libro" es otra entidad). Pensá en el dominio de tu propio proyecto de React: nombrá 2 entidades distintas que tenga tu dominio, y para cada una, un dato que le pertenece SOLO a esa entidad (por ejemplo: la nacionalidad le pertenece al autor, no al libro).



# Entidad es el nombre que le damos a cada "cosa" distinta que modelamos como su propia tabla (por ejemplo, en el ejemplo de biblioteca, "autor" es una entidad y "libro" es otra entidad). Pensá en el dominio de tu propio proyecto de React: nombrá 2 entidades distintas que tenga tu dominio, y para cada una, un dato que le pertenece SOLO a esa entidad (por ejemplo: la nacionalidad le pertenece al autor, no al libro).


A casa casa le pertenece su fundador.
A cada personaje le pertenece su casa.

casa: fundador
personaje: casa