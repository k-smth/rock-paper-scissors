

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'It is a tie! Both users chose rock.';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'Computer wins! Paper beats rock.';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats scissors.';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'It is a tie! Both users chose paper.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'Computer wins! Scissors beats paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'It is a tie! Both users chose scissors.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'Computer wins! Rock beats scissors.';
    } else {
        return 'You win! Scissors beat paper.';
    }
}


let playerSelection = ''
let playerScore = 0;
let computerScore = 0;
let draws = 0;

function game() {
   for (let i = 0; i < 100; i++) {
       let playerSelection = prompt('Rock, paper, or scissors?')
       const computerSelection = getComputerChoice();
       let roundResult = playRound(playerSelection, computerSelection);
       console.log(roundResult);
       /* gameScore(roundResult);
       console.log('Your score is ' + playerScore + '!');
       console.log("Computer's score is " + computerScore + '!');

       if (playerScore === 5 || computerScore === 5)
       break; */
   }
};

/* function gameScore(roundResult) {
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

console.log(game()); 
