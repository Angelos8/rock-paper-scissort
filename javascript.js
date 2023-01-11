// computer choice
function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playerSelection(){
    let move = prompt("Enter your move: Rock, Paper, Scissors");
    move = move.toLowerCase();
    let correct = 0;
    while (correct == 0){
        if (move !== "rock" && move !== "paper" &&  move !== "scissors"){
            console.log("Please choose a correct move.");
            move = prompt("Enter your move: Rock, Paper, Scissors").toLowerCase();
        } else{
            correct = 1;
        }
    }
    return move;
}

function playRound(playerSelection, computerSelection) {
    let playerMove = playerSelection();
    let computerMove = computerSelection();
    if ((playerMove == "rock") && (computerMove == "rock")) {
        console.log("It's a tie!");
        return "tie";
    }
    else if (playerMove == "paper" && computerMove == "rock") {
        console.log("Player wins!");
        return "player";
    }
    else if (playerMove == "scissors" && computerMove == "rock") {
        console.log("Computer wins!");
        return "computer";
    }
    else if (playerMove == "rock" && computerMove == "paper") {
        console.log("Computer wins!");
        return "computer";
    }
    else if (playerMove == "paper" && computerMove == "paper") {
        console.log("It's a tie!");
        return "tie";
    }
    else if (playerMove == "scissors" && computerMove == "paper") {
        console.log("Player wins!");
        return "player";
    }
    else if (playerMove == "rock" && computerMove == "scissors") {
        console.log("Player wins!");
        return "player";
    }
    else if (playerMove == "paper" && computerMove == "scissors") {
        console.log("Computer wins!");
        return "computer";
    }
    else if (playerMove == "scissors" && computerMove == "scissors") {
        console.log("It's a tie!");
        return "tie";
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i=0; i<5; i++){
        let winner = playRound(playerSelection,getComputerChoice);
        if (winner == "player"){
            playerScore++;
        }
        else if (winner == "computer"){
            computerScore++;
        }
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
   