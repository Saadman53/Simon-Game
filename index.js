var buttonColors=["red","blue","green","yellow"];var started=!1;var gamePattern=[];var userClickedPattern=[];var level=0;var score=0;function animatePress(currentColor){$("."+currentColor).addClass("pressed");setTimeout(function(){$("."+currentColor).removeClass("pressed")},100)}
function playSound(name){var sound=new Audio("sounds/"+name+".mp3");sound.play()}
function newSequence(){level++;$("#level-title").text("Level "+level);var randomNumber=Math.floor(Math.random()*4);var randomChosenColor=buttonColors[randomNumber];gamePattern.push(randomChosenColor);playSound(randomChosenColor);$("."+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)}
function gameOver(){$("#level-title").text("GAMEOVER!!");$("#score-title").text("Your Score is: "+score.toString());setTimeout(function(){$("#score-title").addClass("hide");$("#level-title").text("Press A Key to Start")},2000);level=0;started=!1;gamePattern=[];userClickedPattern=[];score=0}
function checkAnswer(currentLevel){if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){console.log("success");score+=5;$("#score-title").text("Score: "+score.toString());setTimeout(function(){newSequence()},1000)}
else{console.log("wrong");var wrongsound=new Audio("sounds/wrong.mp3");$("body").addClass("game-over");setTimeout(function(){$("body").removeClass("game-over")},200);gameOver()}}
$(".btn").click(function(e){if(started){var userChosenColor=e.target.id;userClickedPattern.push(userChosenColor);playSound(userChosenColor);animatePress(userChosenColor);checkAnswer(userClickedPattern.length-1);console.log(userClickedPattern)}})
$("body").keydown(function(event){if(!started){started=!0;$("#score-title").removeClass("hide");$("#score-title").text("Score: 0");newSequence()}})
