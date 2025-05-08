let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    let choice = Math.random() * 3;

    if (choice >=  0 && choice <= 1){
        return "rock";
    }

    else if (choice >= 1 && choice <= 2) {
        return "paper";
    }

    else{
        return "scissors";
    }
}

function getHumanChoice(){
    let user_choice = window.prompt("Type Rock, Paper or Scissors: ");
    return user_choice   
}

function playRound(humanChoice, computerChoice) {
        
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    //Human win scenarios
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win! Rock beats Scissors";
    }
    
    if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! Paper beats Rock";
    }
    
    if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win! Scissors beats Paper";
    }
    //Computer win scenarios
    if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++;
        return "You Lose! Rock beats Scissors";
    }
    
    if (computerChoice === "paper" && humanChoice=== "rock") {
        computerScore++;
        return "You Lose! Paper beats Rock";
    }
    
    if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        return "You Lose! Scissors beats Paper";
    }
}

function playGame(){
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelecton = getComputerChoice();
        
        console.log("Human choice: " + humanSelection);
        console.log("Computer choice: " + computerSelecton);
        console.log(playRound(humanSelection, computerSelecton))
        console.log(`Human Score: ${humanScore} : Computer Score: ${computerScore}`)  
    }
}

console.log(playGame())





