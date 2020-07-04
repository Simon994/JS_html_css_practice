let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


const generateTarget = () => {
    return Math.floor(Math.random()*10)

}


const compareGuesses = (human, comp, target) => {

    let humanDiff = Math.abs((human-target));
    let compDiff = Math.abs(comp-target);

    return (humanDiff < compDiff || humanDiff === compDiff) ? true : false;
    
}



const updateScore = (str) => {
    if(str === 'human') {
        humanScore += 1;
    }
    if(str === 'computer') {
        computerScore += 1;
    }

}

const advanceRound = () => {

    currentRoundNumber += 1;

}