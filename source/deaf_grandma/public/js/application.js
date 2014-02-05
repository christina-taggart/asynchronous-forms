$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  $('form').on('submit', function(event) {
    form_params = $( this ).serialize()
    event.preventDefault()
    $.post("/grandma",  form_params)
      .done(function( grandma_response ) {
        $('#grandma_says').text(grandma_response)
      })
  });
});

