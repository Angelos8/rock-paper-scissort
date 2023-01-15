let playerScore = 0;
let computerScore = 0;
let gameResultDiv = document.getElementById("output");
gameResultDiv.innerText = `player score = ${playerScore} ---- computer score = ${computerScore}\nLet's play!`;


// // computer choice
function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playRound(playerMove,  computerSelection) {
    let computerMove = computerSelection();
    console.log(`round starts! player = ${playerMove} vs computer = ${computerMove}`);

    if ((playerMove == "rock") && (computerMove == "rock")) {
        console.log("It's a tie!\n");
        gameResultDiv.innerText = `player score = ${playerScore} ---- computer score = ${computerScore}\nIt's a tie!`;
    }
    else if (playerMove == "paper" && computerMove == "rock") {
        console.log("Player wins!");
        gameResultDiv.innerText = `player score = ${playerScore++} ---- computer score = ${computerScore}\nPlayer wins!`;
    }
    else if (playerMove == "scissors" && computerMove == "rock") {
        console.log("Computer wins!");
        gameResultDiv.innerText = `player score = ${playerScore} ---- computer score = ${computerScore++}\nComputer wins!`;
    }
    else if (playerMove == "rock" && computerMove == "paper") {
        console.log("Computer wins!");
        gameResultDiv.innerText = `player score = ${playerScore} ---- computer score = ${computerScore++}\nComputer wins!`;
    }
    else if (playerMove == "paper" && computerMove == "paper") {
        console.log("It's a tie!");
        gameResultDiv.innerText = `player score = ${playerScore} ---- computer score = ${computerScore}\nIt's a tie!`;
    }
    else if (playerMove == "scissors" && computerMove == "paper") {
        console.log("Player wins!");
        gameResultDiv.innerText = `player score = ${playerScore++} ---- computer score = ${computerScore}\nPlayer wins!`;
    }
    else if (playerMove == "rock" && computerMove == "scissors") {
        console.log("Player wins!");
        gameResultDiv.innerText = `player score = ${playerScore++} ---- computer score = ${computerScore}\nPlayer wins!`;
    }
    else if (playerMove == "paper" && computerMove == "scissors") {
        console.log("Computer wins!");
        gameResultDiv.innerText = `player score = ${playerScore} ---- computer score = ${computerScore++}\nComputer wins!`;
    }
    else if (playerMove == "scissors" && computerMove == "scissors") {
        console.log("It's a tie!");
        gameResultDiv.innerText = `player score = ${playerScore} ---- computer score = ${computerScore}\nIt's a tie!`;
    }
}

let rock_btn = document.getElementById("rock").addEventListener('click', (e) =>{
            let move = e.target.id;
            console.log("rock button was pressed");
            playRound(move,getComputerChoice);
        });

let paper_btn = document.getElementById("paper").addEventListener('click', (e) =>{
    let move = e.target.id;
    console.log("paper button was pressed");
    playRound(move,getComputerChoice);
});

let scissors_btn = document.getElementById("scissors").addEventListener('click', (e) =>{
    let move = e.target.id;
    console.log("scissors button was pressed");
    playRound(move,getComputerChoice);
});









