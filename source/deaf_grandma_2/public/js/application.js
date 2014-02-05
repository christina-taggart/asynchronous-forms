$(document).ready(function() {
  $('#the_form').submit(function(event){
    event.preventDefault()
    myRequest = $.ajax({
      type: "POST",
      url: '/grandma',
      data: $(this).serialize() //Creates a jquery object
    })
    myRequest.done(function(server_data) {
      console.log("This worked" + server_data)
      // select element on the page
      // change the text of that element to show
      // the server data
      $('#someid').text("Grandma says: " + server_data)
    })
    myRequest.fail(function(server_data) {
      alert("this failed")
    })
  })
});