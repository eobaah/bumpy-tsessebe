const promise = require( 'bluebird')
const options = { promiseLib: promise }
const pgp = require( 'pg-promise' )( options )
const CONNECTION_STRING = `pg://${process.env.USER}@localhost:5432/bumpy-tsessebe-db`
const db = pgp( CONNECTION_STRING )

const getAllItems = () =>
  db.any( "SELECT * FROM booksbt ORDER BY title" )

const getItem = (id) =>
    db.one( "SELECT * FROM booksbt where id=$1", [id] )

const addItem = ({ title, author, description, genre, image }) =>
  db.oneOrNone( "INSERT INTO booksbt (title, author, description, genre, image_url) VALUES ($1, $2, $3, $4, $5)", [title, author, description, genre, image] )

const updateBook = (id, book) => {
  return db.oneOrNone("UPDATE booksbt SET title=$2, author=$3, description=$4, genre=$5, image_url=$6 WHERE id=$1", [id, book.title, book.author, book.description, book.genre, book.image_url])
}


const removeBooks = id =>
  db.none( "DELETE FROM booksbt WHERE id=$1", [ id ] )

// const updateItems = ( item } ) =>
//   db.oneOrNone( "UPDATE item SET $1 WHERE id=$2", item )

module.exports = {getAllItems, getItem, addItem, removeBooks, updateBook}
