$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
  	formData = $(this).serialize();
  	$.ajax({
      type: this.method,
      url: this.action,
      data: formData
  	}).done(function(serverResponse) {
      $('#grandma-says').empty();
      $('#grandma-says').append("Granny says: " + serverResponse);
    }).fail(function() {
      $('#grandma-says').empty();
      $('#grandma-says').append("Something went wrong. Please try again");
    })
  })
});
