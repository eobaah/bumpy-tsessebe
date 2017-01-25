$(document).ready( function ( ) {
  $('.delete-book').on('click', () => {
    const id = $(this).data.id
    console.log("id from script",id)
    let url = '/delete/'+ id
    if(confirm('Delete Book?')) {
      $.ajax({
        url: url,
        type: 'POST',
        success: function(result){
          console.log('Deleting Book...')
          window.location.href='/'
        },
        error: function(err){
          console.log(err)
        }
      })
    }
  })

  $('.edit-book').on('click', (event) => {
    const id = $(event.currentTarget).data('id')

    $.get('/' + id, (book) => {
      $('#edit-form-name').val(book.title)
      $('#edit-form-author').val(book.author)
      $('#edit-form-description').val(book.description)
      $('#edit-form-genre').val(book.genre)
      $('#edit-form-image').val(book.image_url)
    })
  })



});
