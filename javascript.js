let playerScore = 0;
let computerScore = 0;
let draws = 0;
const buttons = document.querySelectorAll('.button');


function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
};

function disableButtons() {
    buttons.forEach(e => {
        e.disabled = true;
    })
};


function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let results = '';
    console.log(computerSelection); 

    if((playerSelection === 'rock' && computerSelection === 'scissors') ||
       (playerSelection === 'paper' && computerSelection === 'rock') ||
       (playerSelection === 'scissors' && computerSelection === 'paper')) {
            playerScore += 1;
            results = `You win! ${playerSelection} beats ${computerSelection}!
            <br><br>Player Score: ${playerScore} Computer Score: ${computerScore}`;

            if(playerScore == 5) {
                results += `<br>You won the game! Refresh the page and play again!`
                disableButtons();
            }

    } else if (playerSelection === computerSelection) {
        draws += 1;
        results = `It is a tie! Both users chose ${playerSelection}!
        <br><br>Player Score: ${playerScore} Computer Score: ${computerScore}`;

    } else {
        computerScore += 1;
        results = `You lose! ${computerSelection} beats ${playerSelection}!
        <br><br>Player Score: ${playerScore} Computer Score: ${computerScore}`;

        if(computerScore == 5) {
            results += `<br>The computer won the game! Refresh the page to play again!`
            disableButtons();
        }
    }
    document.getElementById('results').innerHTML = results
    return
}

buttons.forEach(button => {
    button.addEventListener('click', function(){   
      console.log(playRound(button.value));
    })
});