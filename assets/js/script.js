var score = document.querySelector(".score");
var timerElement = document.querySelector(".timer");
var buttons = document.querySelector(".Choices");
var button1 = document.querySelector(".choice1");
var button2 = document.querySelector(".choice1");
var button3 = document.querySelector(".choice1");

var scoreCounter = 0;
var isWin = false;
var timer;
var timerCount;

// The init function is called when the page loads 
function init() {
  getScore();
}

// The startGame function is called when a button is clicked
function startGame() {
  isWin = false;
  timerCount = 10;
  startTimer()
}

// The winGame function is called when the win condition is met
function winGame() {
  wordBlank.textContent = "YOU WON!!! ";
  setWins()
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  wordBlank.textContent = "GAME OVER";
  setLosses()
}

function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

// Creates blanks on screen
function renderBlanks() {
  // Randomly picks word from words array
  chosenWord = words[Math.floor(Math.random() * words.length)];
  lettersInChosenWord = chosenWord.split("");
  numBlanks = lettersInChosenWord.length;
  blanksLetters = []
  // Uses loop to push blanks to blankLetters array
  for (var i = 0; i < numBlanks; i++) {
    blanksLetters.push("_");
  }
  // Converts blankLetters array into a string and renders it on the screen
  wordBlank.textContent = blanksLetters.join(" ")
}

// Updates win count on screen and sets win count to client storage
function setScore() {
  score.textContent = scoreCounter;
  localStorage.setItem("scoreCount", scoreCounter);
}

// These functions are used by init
function getScore() {
  // Get stored value from client storage, if it exists
  var storedScore = localStorage.getItem("scoreCount");
  // If stored value doesn't exist, set counter to 0
  if (storedScore === null) {
    scoureCounter = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    scoreCounter = storedScore;
  }
  //Render win count to page
  score.textContent = scoreCounter;
}
//Starts game on any button click
buttons.addEventListener("click", startGame);

function endGame() {
    setScore();
    timerCount = timerCount;
  }

// Calls init() so that it fires when page opened
init();

var timer;
var timerCount;