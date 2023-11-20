var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var hasStarted = false;
var level = 0;

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  userClickedPattern = [];
}

$(".btn").on("click", function() {
  if (!hasStarted) {
    hasStarted = true;
    nextSequence();
    level = level + 1;
    $("#level-title").text("Level " + level);
  } else {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    
    setTimeout(function() {
      $("#" + userChosenColor).removeClass("pressed");
    }, 100);
  }
});

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      level++;
      $("#level-title").text("Level " + level);
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 100);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function playSound(soundName) {
  var audio = new Audio("sounds/" + soundName + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
}

function startOver() {
  hasStarted = false;
  level = 0;
  gamePattern = [];
}