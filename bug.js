var timeLeft = 20; // seconds
  var score = 0;
  var bugImg = 1;
  var isGamePlaying = false;

  function startGame() {

    timeLeft = 21;
    score = 0;
    updateOutput();

    document.getElementById("gameOverPanel").style.visibility = "hidden";
    document.getElementById("scoreLabel").style.visibility = "";
    document.getElementById("theBug").style.visibility = "";

    isGamePlaying = true;
    countDownTimer();
    animateBug();
  }

  function countDownTimer() {
    // reduce time by 1 second
    timeLeft--;
    if (timeLeft > 0) {
      updateOutput();
      setTimeout("countDownTimer();", 1000);
    } else {
      gameOver();
    }
  }

  function gameOver() {

    isGamePlaying = false;
    document.getElementById("gameOverPanel").style.visibility = "";
    document.getElementById("scoreLabel").style.visibility = "hidden";
    document.getElementById("theBug").style.visibility = "hidden";
    document.getElementById("finalScorePanel").innerHTML = "<p>Your score was " + score + " !</p>";
  }

  function updateOutput() {
    document.getElementById("scoreLabel").innerHTML = "Score: " + score + " Time:" + timeLeft;
  }

  function moveBug() {
    var x = parseInt(Math.random() * 600);
    var y = parseInt(Math.random() * 600);
    document.getElementById("theBug").style.left = x + "px";
    document.getElementById("theBug").style.top = y + "px";
  }

  function animateBug() {
    if (isGamePlaying) {

      if (bugImg == 1)
        bugImg = 2;
      else
        bugImg = 1;
      document.getElementById("bugImg").src = "bug2_" + bugImg + ".jpg";
      if (Math.random() < 0.1)
        moveBug();
      setTimeout("animateBug();", 100);
    }
  }

  function clickedBug() {
    moveBug();
    score++;
    updateOutput();
  }
