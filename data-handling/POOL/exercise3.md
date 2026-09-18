# Con tus palabras, ¿qué es un ataque de SQL Injection? Dá un ejemplo simple (no hace falta que sea de tu proyecto) de un input que podría romper una query mal armada.

Cuando concatenamos un input, corremos un riesgo: Si alguien manda un input diseñado para para alterar la estructura de la consulta, puede lograr que la base de datos ejecute algo que nosotros no escribimos. Esto permite a un atacante manipular las consultas que una aplicación hace a su base de datos.

Este podria ser un ejemplo de un uso vulnerable:
$query = "SELECT * FROM usuarios WHERE user = '$usuario' AND pass = '$password'";



# ¿Qué diferencia concreta hay, a nivel de cómo se ejecuta la query, entre concatenar un string y usar un placeholder ($1, $2)?

Si pasamos un input por separado, como un valor asociado a un placeholder, la libreria se encarga de ejecutarlo como un dato y no como un codigo ejecutable dentro de SQL.
Si hacemos uso de esta práctica, evitamos que cualquier codigo toque la base de datos con datos externos.

# Elegí una ruta de tu propia API (o de starter-api) que reciba un dato del usuario (por ejemplo, un id o un nombre en el body). Si esa ruta armara su query concatenando ese dato directamente, ¿qué tendría que mandar alguien en ese campo para intentar alterar la consulta? (no hace falta ejecutarlo, alcanza con describirlo)

despues de buscar información en internet, llegué a este resultado:

SELECT * FROM characters WHERE name = 'Hari Pote' OR 1=1 --'

Si en mi api de harry potter, buscas "Harry", devuelve un personaje, Harry Potter. Si en el campo de busqueda literalmente escribimos: Hari Pote' OR 1=1 --, va a darme una condicion siempre verdadera, y va a darme todos los characters. Las dos lineas del final ("--"), hacen que lo que sigue en la linea de ejecucion, como por ejemplo alguna validacion de seguridad, sea ignorada.
