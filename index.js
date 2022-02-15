// Main DOM sections
const mainData = document.querySelector('.main__content');
const resultsData = document.querySelector('.main__content--results');
const choices = mainData.getElementsByTagName('button');

// Player
const player = document.querySelector('.player');
const playerChoice = player.getElementsByTagName('button')[0];
const playerChoiceIcon = player.getElementsByTagName('img')[0];

// House
const house = document.querySelector('.house');
const houseValue = house.getElementsByTagName('button')[0];
const houseChoiceIcon = house.getElementsByTagName('img')[0];
const houseChoice = choices[Math.floor(Math.random() * choices.length)];

// Result and score elements
const result = document.getElementById('result');
const scoreText = document.getElementById('score');

// Get score value from localStorage
let score = JSON.parse(localStorage.getItem('score'));
scoreText.innerText = score;

// Set score to 0 on initial load
if (scoreText.innerText === '') scoreText.innerText = 0;

// Compare choices, declare winner and save score in localStorage
const declareWinner = (yourChoice, houseChoice) => {
  const player = playerChoice;
  const house = houseValue;

  switch (yourChoice + ' ' + houseChoice) {
    case 'scissors paper':
    case 'rock scissors':
    case 'paper rock':
    case 'lizard paper':
    case 'spock scissors':
    case 'rock lizard':
    case 'paper spock':
    case 'spock rock':
    case 'scissors lizard':
    case 'lizard spock':
      ++score;
      localStorage.setItem('score', score);
      house.classList.remove('winner');
      player.classList.add('winner');
      result.innerText = 'You Win';
      scoreText.innerText = score;
      break;
    case 'paper scissors':
    case 'scissors rock':
    case 'rock paper':
    case 'paper lizard':
    case 'scissors spock':
    case 'lizard rock':
    case 'spock paper':
    case 'rock spock':
    case 'lizard scissors':
    case 'spock lizard':
      --score;
      localStorage.setItem('score', score);
      house.classList.add('winner');
      player.classList.remove('winner');
      result.innerText = 'You Lose';
      scoreText.innerText = score;
      break;
    case 'rock rock':
    case 'paper paper':
    case 'scissors scissors':
    case 'lizard lizard':
    case 'spock spock':
      score += 0;
      localStorage.setItem('score', score);
      house.classList.remove('winner');
      player.classList.remove('winner');
      result.innerText = 'Draw';
      scoreText.innerText = score;
      break;
  }
};

// Listen for player click event, set value of player choice and a random value for house choice
for (const choice of choices) {
  choice.addEventListener('click', function () {
    this.dataset.selected = true;
    if (this.dataset.selected) {
      // Main DOM sections
      mainData.classList.remove('d-grid');
      mainData.classList.add('d-none');
      resultsData.classList.remove('d-none');
      resultsData.classList.add('d-grid');

      // Player
      playerChoice.classList.remove('d-none');
      playerChoice.classList.add(this.value);
      playerChoiceIcon.src = `images/icon-${this.value}.svg`;

      // House
      houseValue.classList.remove('d-none');
      houseValue.classList.add(houseChoice.value);
      houseChoiceIcon.src = `images/icon-${houseChoice.value}.svg`;

      // Compare choices
      declareWinner(this.value, houseChoice.value);
    }
  });
}

// New Game
const newGame = document.getElementById('new-game');
newGame.addEventListener('click', function () {
  window.location.reload();
});

// Toggle rules and brightness
const header = document.getElementById('header');
const main = document.getElementById('main');
const footer = document.getElementById('footer');
const rules = document.getElementById('rules');

const toggleRules = () => {
  header.classList.toggle('dark');
  main.classList.toggle('dark');
  footer.classList.toggle('dark');
  rules.classList.toggle('d-grid');
};

const openBtn = document.getElementById('open--rules');
openBtn.addEventListener('click', toggleRules);

const closeBtn = document.getElementById('close--rules');
closeBtn.addEventListener('click', toggleRules);
