DROP TABLE IF EXISTS wand; DROP TABLE IF EXISTS character; DROP TABLE IF EXISTS altername;


CREATE TABLE wand ( wand_id SERIAL PRIMARY KEY, wood VARCHAR(100), core VARCHAR(100), length INTEGER);

CREATE TABLE character ( character_id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL, is_founder BOOLEAN NOT NULL, house VARCHAR(100) NOT NULL, wand_id INT REFERENCES wand(wand_id));

CREATE TABLE altername ( altername_id SERIAL PRIMARY KEY, altername VARCHAR(150), character_id INT REFERENCES character(character_id));


-- aqui se insertan los datos de la tabla de la varita:
INSERT INTO wand (wand_id, wood, core, length) VALUES (1, 'holly', 'phoenix tail feather', 11);
-- esta linea inserta dentro de wand, la id de la wand, el tipo de madera, el core, y el lenght.

INSERT INTO wand (wand_id, wood, core, length) VALUES (2, 'holly2', 'phoenix tail feather2', 22);
-- esta linea devuelve lo mismo que la anterior, pero con los datos de la segunda varita, por eso tiene '2' como id.


-- aqui se insertan los datos de la tabla de los personajes:
INSERT INTO character (character_id, name, is_founder, house, wand_id) VALUES (1, 'Harry Potter', false, 'Griffindor' ,1);
-- esta linea devuelve el id de un character, el nombre, el booleano de si es fundador, la casa a la que pertenece, y el id de la varita. 

INSERT INTO character (character_id, name, is_founder, house, wand_id) VALUES (2, 'Giovanni', false, 'Griffindor' , 2);
-- esta linea devuelve lo mismo que la anterior, pero con los datos de un segundo personaje, con id = 2 tanto para character_id, como para wand_id.


-- aqui se insertan los dato de la tabla de los alternames (apodos):
INSERT INTO altername (altername_id, altername, character_id) VALUES (1, 'The Boy Who Lived', 1);
-- esta linea devuelve el primer altername del character con id = 1.

INSERT INTO altername (altername_id, altername, character_id) VALUES (2, 'The Chosen One', 1);
-- esta linea devuelve el segundo altername del character con id = 1.

INSERT INTO altername (altername_id, altername, character_id) VALUES (3, 'Undesirable No. 1', 1);
-- esta linea devuelve el tercer altername del character con id = 1.

INSERT INTO altername (altername_id, altername, character_id) VALUES (4, 'Potty', 1);
-- esta linea devuelve el cuarto altername del character con id = 1.


UPDATE character SET wand_id = 2 where character_id = 2;
-- este update cambia el wand_id a 2, al character que tenga id = 2.

SELECT * FROM altername where character_id = 2;
-- este select devuelve los alternames del character con id = 2.

SELECT * FROM character where wand_id = 1;
-- este select devuelve los character que tengan una varita con id = 1.

select * from character;	
-- este select devuelve todo lo que encuentre en la tabla character.
