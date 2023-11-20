//alert("JS file works, let's celebrate!")


var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

  $("btn").on("keydown", function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
  });

  // $(document).on("keydown", function(event){

  //   if (event.key)
  
  //   {
  
  //     nextSequence();
  
  //   }
  
  // });



  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
}

  nextSequence();