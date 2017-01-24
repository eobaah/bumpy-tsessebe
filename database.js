const promise = require( 'bluebird')
const options = { promiseLib: promise }
const pgp = require( 'pg-promise' )( options )
const CONNECTION_STRING = `pg://${process.env.USER}@localhost:5432/bumpy-tsessebe-db`
const db = pgp( CONNECTION_STRING )

const getAllItems = () =>
  db.any( "SELECT * FROM booksbt ORDER BY title" )

const getItem = (id) =>
    db.one( "SELECT * FROM booksbt where id=$1", [id] )

const addItem = (title, author, description, genre, image) =>
  db.oneOrNone( "INSERT INTO booksbt (title, author, description, genre, image_url) VALUES ($1, $2, $3, $4, $5)", [title, author, description, genre, image] )

module.exports = {getAllItems, getItem, addItem}
