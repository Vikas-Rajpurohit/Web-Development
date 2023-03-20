var buttonColors = ["red","blue","green","yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keydown(function(){
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
      }
});

$(".btn").click(function (event){
    var userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);

    makeSound(userChosenColor);
    makeAnimate(userChosenColor);

    var last_idx = userClickedPattern.length-1;
    checkAnswer(last_idx);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      makeSound("sounds/wrong.mp3");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}

function nextSequence(){
    userClickedPattern = [];

    level++;
    $("#level-title").text(`Level ${level}`);

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor);

    $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
    makeSound(randomChosenColor);
}

function makeAnimate(key){
    $(`#${key}`).addClass("pressed");

    setTimeout(function(){
        $(`#${key}`).removeClass("pressed");
    },100);
}

function makeSound(key){
    var audio = new Audio(`sounds/${key}.mp3`);
    audio.play();
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}

