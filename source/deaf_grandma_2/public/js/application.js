$(document).ready(function() {
  $('#grandma-text').hide();
  $('#grandma-form').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      type: 'post',
      url: '/grandma',
      data: $(this).serialize()
    }).done(function(server_data){
      $('#grandma-says').html(server_data);
      $('#grandma-text').show()
    })
  })
});
