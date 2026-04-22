function computerChoice(){
    let chosen = Math.floor(Math.random()*3);
    switch(chosen){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
    }
}
function humanChoice(){
    let human_choice;
    while (true){
        let choice_of_human = prompt('Enter rock, paper, or scissor');
        if(!choice_of_human){ //if the user input is null
            console.log('Enter an input');
            continue;
        }
        human_choice = choice_of_human.toLowerCase();
        if (!['rock', 'paper', 'scissor'].includes(human_choice)) console.log('Wrong Input');// if the user inputs anything other than rock,....
        else break;
    }
    return human_choice;
}

let final_human = 0;
let final_comp = 0;

function round(){

    let compChoice = computerChoice();
    let humChoice = humanChoice();

    console.log(`Computer chose ${compChoice}`);
    console.log(`You chose ${humChoice}`);

    if (compChoice === humChoice) {
    console.log("Round drawn");
    }
else if (
    (humChoice === "rock" && compChoice === "scissor") ||
    (humChoice === "paper" && compChoice === "rock") ||
    (humChoice === "scissor" && compChoice === "paper")
) {
    final_human++;
    console.log("You won this round");
}
else {
    final_comp++;
    console.log("Computer won this round");
}
}
function rps(){
    for(let i = 1; i<=5; i++){
        round();
    }
    if(final_comp > final_human) console.log(`Final winner is Computer with ${final_comp} points`);
    else if(final_comp === final_human) console.log(`It is a Draw`);
    else console.log(`Final winner is You with ${final_human} points`);
}