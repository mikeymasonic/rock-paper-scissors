// function getRandomThrow() {
//     const randomNumber = Math.floor(Math.random() * 3);
//     return getThrowFromNumber(randomNumber);
// }

// function getThrowFromNumber(number) {
//     if (number === 0) return 'rock';
//     if (number === 1) return 'paper';
//     if (number === 2) return 'scissors';
// }

function getRandomThrow(){ 
    const arrayRockPaperScissors = ['rock','paper','scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return arrayRockPaperScissors[randomNumber];

}
function checkResult(player, computer) {
    if (computer === player) return 'draw';
    else if (computer === 'scissors' && player === 'rock') return 'win';
    else if (computer === 'paper' && player === 'scissors') return 'win';
    else if (computer === 'rock' && player === 'paper') return 'win';
    // else if (computer === 'rock' && player === 'paper') return 'win';
    else return 'lose';
}

export {
    getRandomThrow,
    checkResult
};