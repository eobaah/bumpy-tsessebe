const express = require('express');
const router = express.Router();
const path = require( 'path' )
const {getAllItems, getItem, addItem} = require('../database');

router.get( '/', function( req, res, next ) {
  getAllItems()
    .then( bookstore => {
      console.log(bookstore);
      res.render( 'index', { bookstore, title: 'Bookstore App' })
    })
})

router.post( '/', function( req, res, next ) {
  const { item } = req.body
  addItem(item)
    .then(() => res.redirect( '/'))
})

module.exports = router;
