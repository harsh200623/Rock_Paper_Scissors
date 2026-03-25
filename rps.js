function getComputerChoice(){
    let val = Math.floor(Math.random() * 3);
    switch(val){
        case 0:
            return "rock";//in switch statement, we usually have break at the end but since we are using return here, we don't need it
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
function getHumanChoice(){
    let choice = prompt("Enter the choice : ", '');
    let ans = choice.toLowerCase();
    console.log(`Your choice is : ${ans}`);
    return ans;
}
let humanScore = 0, computerScore = 0;
//current_humanScore = 0, current_computerScore = 0;

function playRound(){
    let compChoice = getComputerChoice();//store the value of computer and human choice once, if you call them again and again then the 
    let humanChoice = getHumanChoice();//browser will ask for Enter the choice multiple times.

    let current_humanScore = 0, current_computerScore = 0;
    if(compChoice == "scissors" && humanChoice == "rock") current_humanScore++;
    else if(compChoice == "rock" && humanChoice == "paper") current_humanScore++;
    else if(compChoice == "rock" && humanChoice == "scissors") current_computerScore++;
    else if(compChoice == "paper" && humanChoice == "rock") current_computerScore++;
    else if(compChoice == "paper" && humanChoice == "scissors") current_humanScore++;
    else if(compChoice == "scissors" && humanChoice == "paper") current_computerScore++;

    if(current_humanScore > current_computerScore) console.log("You won this round!");
    else if(current_humanScore < current_computerScore) console.log("You lost this round!");
    else console.log("This match is a Draw!");

    humanScore += current_humanScore;
    computerScore += current_computerScore;
}
function playGame(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    
    humanScore > computerScore ? console.log("You have won the tournament") : console.log("The computer has won the tournament");
    return;
}
playGame();