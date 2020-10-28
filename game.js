
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern=[];
var level= 0;

var gameStart = false;
$(document).keypress(function(){
  if(!gameStart){
$("#level-title").text("Level "+ level);
nextSequence();
gameStart=true;
}});

function playSlound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColour){

  $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
         $("#"+currentColour).removeClass("pressed");
    }, 100);
}


$(".btn").click(function (){
   var userChosenColour= $(this).attr("id");
   userClickedPattern.push(userChosenColour);
   playSlound(userChosenColour);
   animatePress(userChosenColour);

   checkAnswer(userClickedPattern.length-1);
});
function checkAnswer(currentLevel){

      if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        if(gamePattern.length === userClickedPattern.length){
          setTimeout(function(){
            nextSequence()
          },1000);
        }

    }  else{
      playSlound("wrong");
      $("body").addClass("game-over");
      setTimeout(function(){
           $("body").removeClass("game-over");
      }, 200);
      $("h1").text("Game Over, Press Any Key to Restart");
      startOver();
      }
}
function startOver(){
  level=0;
    gamePattern=[];
    gameStart = false;
}

function nextSequence(){
  userClickedPattern=[];
  level++;
  $("#level-title").text("Level "+ level);
var  randomNumber = Math.floor(Math.random()*4);

var randomChosenColour =buttonColours[randomNumber];
gamePattern.push(randomChosenColour);

$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playSlound(randomChosenColour);
animatePress(randomChosenColour);

}
