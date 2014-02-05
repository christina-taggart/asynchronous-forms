$(document).ready(function() {
  $('#granny_talk').on('submit', function(e) {
    e.preventDefault();
    $('#submit_button').prop('disabled', true);
    $.ajax({
      type: "POST",
      url: '/grandma',
      data: $('#user_input').serialize()
    }).done(function(server_response) {
      $('#granny_response').text(server_response)
    }).fail(function() {
      $('#granny_response').text("Something went wrong! Please try again");
    }).always(function() {
      $('#user_input').val("");
      $('#submit_button').prop('disabled', false);
    })
  });
});
