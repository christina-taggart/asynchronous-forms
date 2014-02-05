$(document).ready(function() {
  $("#grandma").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      type: this.method,
      url:  this.action,
      data: $(this).serialize()
    }).done(function(response){
      $("#grandma-response").append(response);
    }).fail(function(){
      console.log("shitty");
    });

  });
});
