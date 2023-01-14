// computer choice
function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}


function playRound(playerMove, computerSelection) {
    let computerMove = computerSelection();
    if ((playerMove == "rock") && (computerMove == "rock")) {
        console.log("It's a tie!");
        return "It's a tie!";
    }
    else if (playerMove == "paper" && computerMove == "rock") {
        console.log("Player wins!");
        return "Player wins!";
    }
    else if (playerMove == "scissors" && computerMove == "rock") {
        console.log("Computer wins!");
        return "Computer wins!";
    }
    else if (playerMove == "rock" && computerMove == "paper") {
        console.log("Computer wins!");
        return "Computer wins!";
    }
    else if (playerMove == "paper" && computerMove == "paper") {
        console.log("It's a tie!");
        return "It's a tie!";
    }
    else if (playerMove == "scissors" && computerMove == "paper") {
        console.log("Player wins!");
        return "Player wins!";
    }
    else if (playerMove == "rock" && computerMove == "scissors") {
        console.log("Player wins!");
        return "Player wins!";
    }
    else if (playerMove == "paper" && computerMove == "scissors") {
        console.log("Computer wins!");
        return "Computer wins!";
    }
    else if (playerMove == "scissors" && computerMove == "scissors") {
        console.log("It's a tie!");
        return "It's a tie!";
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let winner = playRound(playerSelection,getComputerChoice);
    if (winner == "player"){
        playerScore++;
    }
    else if (winner == "computer"){
        computerScore++;
    }
    
    if (playerScore > computerScore){
        console.log("Player wins!");
    }
    else if (playerScore > computerScore){
        console.log("Computer wins!");   
    }
    else{
        console.log("It's a tie!");
    }
}
   

rock_btn = document.getElementById("rock").addEventListener('click', (e) =>{
    move = e.target.id;
    gameResultDiv = document.getElementById("game-result");
    gameResultDiv.innerText = playRound(move,getComputerChoice);
});

paper_btn = document.getElementById("paper").addEventListener('click', (e) =>{
    move = e.target.id;
    gameResultDiv = document.getElementById("game-result");
    gameResultDiv.innerText = playRound(move,getComputerChoice);
});

scissors_btn = document.getElementById("scissors").addEventListener('click', (e) =>{
    move = e.target.id;
    gameResultDiv = document.getElementById("game-result");
    gameResultDiv.innerText = playRound(move,getComputerChoice);
});

