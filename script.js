function getComputerChoice(){
    const computerChoice = ["rock", "paper", "scissors"];
    const computerRandomChoice = computerChoice[Math.floor(Math.random()*3)];
    return computerRandomChoice;
}


var computerScore = 0;
var playerScore = 0;

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
        if(playerSelection == "rock" && computerSelection == "rock") {
            return "Tie! Rock <=> Rock";
        } else if (playerSelection == "rock" && computerSelection == "paper"){
            computerScore++;
            return "You Lose! Rock <=> Paper.";
            
        } else if (playerSelection == "rock" && computerSelection == "scissors"){
            playerScore++;
            return "You Win! Rock <=> Scissors.";

        } else if (playerSelection == "paper" && computerSelection == "rock"){
            playerScore++;
            return "You Win! Paper <=> Rock.";

        } else if (playerSelection == "paper" && computerSelection == "paper"){
            return "Tie! Paper <=> Paper";

        } else if (playerSelection == "paper" && computerSelection == "scissors"){
            computerScore++;
            return "You Lose! Paper <=> Scissors.";

        } else if (playerSelection == "scissors" && computerSelection == "rock"){
            computerScore++;
            return "You Lose! Scissors <=> Rock.";

        } else if (playerSelection == "scissors" && computerSelection == "paper"){
            playerScore++;
            return "You Win! Scissors <=> Paper.";

        } else if (playerSelection == "scissors" && computerSelection == "scissors"){
            return "Tie! Scissors <=> Scissors";

        } else {
            return "Please enter correct option.";
        }
}


function game(){
    for (var i = 0; i < 5; i++){
        const playerSelection = prompt("What's your move?");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (computerScore > playerScore){
        console.log("Computer Wins!");
    } else if (playerScore > computerScore) {
        console.log("Player Wins!");
    } else {
        console.log("It's a Tie!");
    }
}

game();