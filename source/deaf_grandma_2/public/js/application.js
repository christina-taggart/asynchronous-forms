$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

    // console.log("handler for .submit() called.");

    $("form").on("submit", function (event) {
      event.preventDefault();
      console.log(grandma_data = $(this).serialize())
      $.ajax({
        type: "POST",
        url: "/grandma",
        data: grandma_data,
      }).done(function(server_data){
        console.log("here is our data: " + server_data);
        $('#grandmasays').html(server_data)
      });
    });
  });


