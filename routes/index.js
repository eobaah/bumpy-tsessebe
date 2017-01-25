const express = require('express');
const router = express.Router();
const path = require( 'path' )
const {getAllItems, getItem, addItem, removeBooks, updateItems} = require('../database');

router.get( '/', ( req, res, next ) => {
  getAllItems()
    .then( bookstore => {
      res.render( 'index', { bookstore, title: 'Bookstore App' })
    })
})

router.get('/:id', ( req, res, next ) => {
  getItem(req.params.id)
  .then( book => {
    res.json(book)
  })
})

router.post( '/', ( req, res, next ) => {
  const book = req.body
  addItem(book)
    .then(() => res.redirect('/'))
})

router.post( '/delete/:id', ( req, res, next ) => {
  const id = req.params.id
  db.removeBooks(id)
    .then((id) => res.redirect('/'))
})

router.post( '/edit/:id', ( req, res, next ) => {
  const id  = req.params.id
  const book  = req.body
  updateItems(id, book)
  .then(() => res.redirect( '/'))
})


module.exports = router;
