$(document).ready(function() {
  $('#grandma').on("submit", function(e) {
    e.preventDefault();
    $.ajax({
      type: 'post',
      url: '/grandma',
      data: $(this).serialize()
    }).done( function(erb) {
      $('#grandma_words').empty()
      $('#grandma_words').append(erb)
      $('#words').val("")
    })
  })
});

