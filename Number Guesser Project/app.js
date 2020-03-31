//Game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI Elements

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

//Assign UI Min And Max

minNum.textContent = min;
maxNum.textContent = max;

//Play Again eventListner
//Because classes were added after script loaded so we have to use event delegation
game.addEventListener("mousedown", function(e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

//Listen For Guess

guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);

  //Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please Enter a Number Between ${min} and ${max}`, "red");
  }

  //Check If won

  if (guess === winningNum) {
    // Gamme Over -won
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    //wrong Number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      //Game Over Lost
      gameOver(
        false,
        `Game Over , you lost . The correct number was ${winningNum}`
      );
    } else {
      //Game Continus - answer wrong

      // Tel users its wrong answer
      setMessage(
        `${guess} is not correct , ${guessesLeft} guesses left`,
        "red"
      );
      // Change border Color
      guessInput.style.borderColor = "red";

      //clear input
      guessInput.value = "";
    }
  }
});

//Game Over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  // Disable Input
  guessInput.disabled = true;
  // Change border Color
  guessInput.style.borderColor = color;
  // Set Message
  setMessage(msg, color);
  // Play Again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

//Get Random Num
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
