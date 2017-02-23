console.log("Loading app.js..")
var maxScore = document.getElementById('maxScore').value
var gameOver = false;
var winningScore = 5;

// array of players
players = [
  player1 = new Player('p1', 'p1Display'),
  player2 = new Player('p2', 'p2Display')
]

// Player object constructor
function Player(buttonID, displayID) {
  this.button = document.getElementById(buttonID);
  this.display = document.getElementById(displayID);
  this.score = 0;

  this.updateScore = function() {
    if(!gameOver) {
      this.score += 1;
      if(this.score >= winningScore) {
        gameOver = true;
        this.display.classList.add("winner")
      }
      this.display.textContent = this.score
    }
}
  // bind allows the addEventListener to maintain the Player context for 'this'
  this.button.addEventListener('click', this.updateScore.bind(this))
}

// Reset the game
document.getElementById('reset').addEventListener('click', resetGame)
function resetGame() {
  players.forEach(function(player) {
    player.score = 0;
    player.display.textContent = player.score;
    player.display.classList.remove('winner')
  });
  gameOver = false;
}

// Change the score for winning the game
document.getElementById('maxScore').addEventListener('change', changeWinningScore)
function changeWinningScore() {
 winningScore = parseInt(document.getElementById('maxScore').value)
 document.getElementById('defaultWinningScore').textContent = winningScore
}
