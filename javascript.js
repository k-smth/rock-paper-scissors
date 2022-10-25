// let playerSelection = '';

let playerScore = 0;
let computerScore = 0;
let draws = 0;


function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}


function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    console.log(computerSelection); 

    if((playerSelection === 'rock' && computerSelection === 'scissors') ||
       (playerSelection === 'paper' && computerSelection === 'rock') ||
       (playerSelection === 'scissors' && computerSelection === 'paper')) {
            return `You win! ${playerSelection} beats ${computerSelection}!`; 

    } else if (playerSelection === computerSelection) {
        return `It is a tie! Both users chose ${playerSelection}!`;

    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }

}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', function(){   
      console.log(playRound(button.value));
    })
});


/* function game() {
   for (let i = 0; i < 100; i++) {
       //let playerSelection = '';
       const computerSelection = getComputerChoice();
       let roundResult = playRound(playerSelection, computerSelection);
       console.log(roundResult);
        gameScore(roundResult);
       console.log('Your score is ' + playerScore + '!');
       console.log("Computer's score is " + computerScore + '!');

       if (playerScore === 5 || computerScore === 5)
       break; 
   }
}; 

 function gameScore(roundResult) {
   if (roundResult === 'Computer wins! Paper beats rock.' || roundResult === 'Computer wins! Scissors beats paper.' || roundResult === 'Computer wins! Rock beats scissors.') {
       computerScore++;
   } else if (roundResult === 'You win! Rock beats scissors.' || roundResult === 'You win! Paper beats rock.' || roundResult === 'You win! Scissors beat paper.') {
       playerScore++;
   } else {
       draws++;
   }

   if (playerScore === 5) {
       console.log('You are the winner!')
       return;
   };

   if (computerScore === 5) {
       console.log('The computer is the winner!')
       return;
   }
}; */
