import { getRandomThrow, checkResult } from './get-random-throw.js';

const button = document.getElementById('button');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const drawsDisplay = document.getElementById('draws');
const resultDisplay = document.getElementById('result-display');
const computerChoiceDisplay = document.getElementById('computer-choice');

let wins = 0;
let losses = 0;
let draws = 0;

button.addEventListener('click', () => {
    // const isRockPaperSissors = Math.round(Math.random() * 3);
    // let howItLanded;

    const userInput = document.querySelector('input:checked');
    const userChoice = userInput.value;
    const computerChoice = getRandomThrow();
    const result = checkResult(userChoice, computerChoice);
    console.log('user', userChoice);
    console.log('computer', computerChoice);
    console.log(result);
    console.log(winsDisplay);
    console.log(lossesDisplay);
    console.log(drawsDisplay);
    console.log(resultDisplay);

    computerChoiceDisplay.textContent = computerChoice;

    if (result === 'win') {
        wins++;
        winsDisplay.textContent = wins;
        resultDisplay.textContent = 'You win!';
    } else if (result === 'lose') {
        losses++;
        lossesDisplay.textContent = losses;
        resultDisplay.textContent = 'You lose!';
    } else {
        draws++;
        drawsDisplay.textContent = draws;
        resultDisplay.textContent = 'Draw!';
    }
});

// console.log(clickFunction);
console.log(wins);
console.log(losses);
console.log(draws);



