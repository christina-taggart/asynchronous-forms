$(document).ready(function() {
  $("#grandma").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      type: this.method,
      url:  this.action,
      data: $(this).serialize()
    }).done(function(response){
      $("#grandma-response").html(response);
    }).fail(function(){
      console.log("shitty");
    });

  });
});
