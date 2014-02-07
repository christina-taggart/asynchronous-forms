$(document).ready(function() {
  $('#talk').on('submit', function(e){
    e.preventDefault();
    $('#submit_button').prop('disabled', true);
    $.ajax({
      method: "POST",
      url: "/grandma",
      data: $('#user_input').serialize(),
    }).done(function(response_from_ruby){
      $('#response').text(response_from_ruby)
    }).fail(function(){
      $('#response').text("ERROR!")
    }).always(function(){
      $('#user_input').val("")
      $('#submit_button').prop('disabled', false);
    })
  });
});
