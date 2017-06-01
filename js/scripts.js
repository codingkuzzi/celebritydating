$(document).ready(function() {
  $("form#user").submit(function(event) {
    event.preventDefault();
    console.log("submitted");
    var name = $("#name").val();
    var age = $("#age").val();
    var color = $("#color").val();

    if (color === "red"){
      var celebrity = "Leonardo DiCaprio";
    } else if (color === "blue"){
      var celebrity = "Skeletor";
    } else if (color === "yellow"){
      var celebrity = "Skeletor again";
    } else {
      $(".celebritydate").empty().append();
    }
    //$(".celebritydate").empty().append(celebrity);
    $(".skeletor").toggle();
  });
});
