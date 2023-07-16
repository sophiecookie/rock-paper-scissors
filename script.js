var computerScore = 0;
var playerScore = 0;

const playerScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const message_div = document.querySelector(".message");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const result_div = document.querySelector(".result");


rock_div.addEventListener('click', function(){
    playerMove = "rock";
    game();
    computerScore_span.textContent = computerScore;
    playerScore_span.textContent = playerScore;
}
)

paper_div.addEventListener('click', function(){
    playerMove = "paper";
    game();
    computerScore_span.textContent = computerScore;
    playerScore_span.textContent = playerScore;
}
)

scissors_div.addEventListener('click', function(){
    playerMove = "scissors";
    game();
    computerScore_span.textContent = computerScore;
    playerScore_span.textContent = playerScore;
}
)


function getComputerChoice(){
    const computerChoice = ["rock", "paper", "scissors"];
    const computerRandomChoice = computerChoice[Math.floor(Math.random()*3)];
    return computerRandomChoice;
}

function playRound(playerSelection, computerSelection){
        if(playerSelection == "rock" && computerSelection == "rock") {
            return "Tie! Rock <=> Rock";
            
        } else if (playerSelection == "rock" && computerSelection == "paper"){
           computerScore++;
           result_div.textContent =  "You Lose! Rock <=> Paper.";
              
        } else if (playerSelection == "rock" && computerSelection == "scissors"){
            playerScore++;
            result_div.textContent =  "You Win! Rock <=> Scissors.";
            
        } else if (playerSelection == "paper" && computerSelection == "rock"){
            playerScore++;
            result_div.textContent =  "You Win! Paper <=> Rock.";

        } else if (playerSelection == "paper" && computerSelection == "paper"){
            result_div.textContent = "Tie! Paper <=> Paper";

        } else if (playerSelection == "paper" && computerSelection == "scissors"){
            computerScore++;
            result_div.textContent = "You Lose! Paper <=> Scissors.";

        } else if (playerSelection == "scissors" && computerSelection == "rock"){
            computerScore++;
            result_div.textContent = "You Lose! Scissors <=> Rock.";

        } else if (playerSelection == "scissors" && computerSelection == "paper"){
            playerScore++;
            result_div.textContent = "You Win! Scissors <=> Paper.";

        } else if (playerSelection == "scissors" && computerSelection == "scissors"){
            result_div.textContent = "Tie! Scissors <=> Scissors";

        } else {
            result_div.textContent = "Please enter correct option.";
        }
}

function game(){
    
    computerMove = getComputerChoice();
    playRound(playerMove, computerMove);

    if(playerScore == 5 || computerScore == 5){
        if(playerScore > computerScore){
            message_div.textContent = "Human beats AI!";
        } else if (playerScore < computerScore) {
            message_div.textContent = "AI beats human!";
        }
    }
}