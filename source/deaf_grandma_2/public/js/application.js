$(document).ready(function() {
  $("form").on("submit", function(event) {
    event.preventDefault();
    var userInput = $("input[type='text']").val();
    console.log(userInput)
    $.ajax({
      type: "POST",
      url: "/grandma",
      data: userInput,
    })
    .done(function() {
      if (userInput.match(/[a-z]/))
      {
        $(".container").prepend($("<p>Speak up, Sonny!</p>"));
      }
      else
      {
        $(".container").prepend($("<p>No, not since 1964!</p>"));
      }
    });
  })
});
