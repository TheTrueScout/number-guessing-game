const playerGuess = document.querySelector('.player-guess');
const guessButton = document.querySelector('.guess')
const higherLower = document.querySelector('.higher-lower')
const highscore = document.querySelector('.highscore');
const score = document.querySelector('.score');
const playAgain = document.querySelector('.play-again');

const scores = {
  score: 20,
  highscore: 0
}

let num = randomNumber()

function randomNumber() {
  let num = Math.floor(Math.random() * 21);

  if (num === 0) {
    num++
  }

  console.log(num)

  return num;
}

guessButton.addEventListener('click', () => {

  if (Number(playerGuess.value) === num) {
    document.body.style.backgroundColor = 'green'
    higherLower.innerHTML = 'Correct! You win!'
    scores.highscore = scores.score
    score.innerHTML = `Score: ${scores.score}`;
    highscore.innerHTML = `Highscore: ${scores.highscore}`;

  } else if (Number(playerGuess.value) > num) {
    higherLower.innerHTML = 'Lower'
    scores.score--
    score.innerHTML = `Score: ${scores.score}`;
    highscore.innerHTML = `Highscore: ${scores.highscore}`;

  } else if (Number(playerGuess.value) < num) {
    higherLower.innerHTML = 'Higher'
    scores.score--
    score.innerHTML = `Score: ${scores.score}`;
    highscore.innerHTML = `Highscore: ${scores.highscore}`;

  }

  if (scores.score === 0) {
    higherLower.innerHTML = "Man... just check the console... the answer's there..."
    document.body.style.backgroundColor = 'red'
  }
  
});

playAgain.addEventListener('click', () => {
  num = randomNumber()
  document.body.style.backgroundColor = '#1d1d1d'
  scores.score = 20
  score.innerHTML = `Score: ${scores.score}`;
  playerGuess.value = ''
})

  