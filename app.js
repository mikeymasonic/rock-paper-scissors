import { getRandomThrow, checkResult } from './get-random-throw.js';

const button = document.getElementById('button');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const drawsDisplay = document.getElementById('draws');
const resultDisplay = document.getElementById('result-display');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resetButton = document.getElementById('reset-button');

let wins = 0;
let losses = 0;
let draws = 0;

//determines what image to show for computer choice
function showComputerImage(computerChoice){
    if (computerChoice === 'rock') {
        document.querySelector('.computer-image').style.display = 'block';        
    } else if (computerChoice === 'paper') {
        document.querySelector('.computer-image2').style.display = 'block';
    } else {
        document.querySelector('.computer-image3').style.display = 'block';
    }
}

//Win Loss Draw display
function displayResult(result){
    if (result === 'win') {
        wins++;
        winsDisplay.textContent = wins;
        resultDisplay.textContent = 'You won!  Great job!';
    } else if (result === 'lose') {
        losses++;
        lossesDisplay.textContent = losses;
        resultDisplay.textContent = 'You lost! Bummer!';
    } else {
        draws++;
        drawsDisplay.textContent = draws;
        resultDisplay.textContent = 'Draw! Try again!';
    }

}
button.addEventListener('click', () => {
    //resets computer's previous selection
    document.querySelector('.computer-image').style.display = 'none';
    document.querySelector('.computer-image2').style.display = 'none';
    document.querySelector('.computer-image3').style.display = 'none';

    const userInput = document.querySelector('input:checked');
    const userChoice = userInput.value;
    const computerChoice = getRandomThrow();
    const result = checkResult(userChoice, computerChoice);

    //displays computer's choice via text (disabled)
    computerChoiceDisplay.textContent = computerChoice;
    
    showComputerImage(computerChoice);
   
    displayResult(result);

    
});

//reset button
resetButton.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    draws = 0;

    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    drawsDisplay.textContent = draws;

    document.querySelector('.computer-image').style.display = 'none';
    document.querySelector('.computer-image2').style.display = 'none';
    document.querySelector('.computer-image3').style.display = 'none';

    resultDisplay.textContent = '';
});
