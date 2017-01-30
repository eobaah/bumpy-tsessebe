DROP TABLE booksBT;

CREATE TABLE IF NOT EXISTS booksBT(
  id SERIAL PRIMARY KEY,
  title VARCHAR( 3000 ),
  author VARCHAR( 3000 ),
  description VARCHAR( 3000 ),
  genre VARCHAR( 3000 ),
  image_url VARCHAR( 3000 )
);

INSERT INTO booksBT( title, author, description, genre)
VALUES ( 'Where the wild things are', 'Maurice Sendak', 'Where the Wild Things Are is fifty years old! Let the wild rumpus with Max and all the wild things continue as this classic comes to life as never before with new reproductions of Maurice Sendak', 'Fiction, Fantasy, Children Literature');
