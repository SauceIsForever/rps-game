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

function getHumanChoice(callback){

    
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
        const clickedElement = event.target;
        if (clickedElement.tagName === 'IMG'){
          callback(clickedElement.parentNode.id);
        }
        else if (clickedElement.id) {
        callback(clickedElement.id);
        }
        });
        }); 
 
}


function playRound(humanChoice, computerChoice) {
        
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        document.getElementById("outcome").textContent = "It's a tie!";
        document.getElementById("outcome").style.fontSize = "50px";

    }

    //Human win scenarios
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        document.getElementById("userScore").textContent = `User Score: ${humanScore}`;
        document.getElementById("outcome").textContent = "You win! Rock beats Scissors";
        document.getElementById("outcome").style.fontSize = "50px";

    }
    
    if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        document.getElementById("userScore").textContent = `User Score: ${humanScore}`;
        document.getElementById("outcome").textContent = "You win! Paper beats Rock";
        document.getElementById("outcome").style.fontSize = "50px";
    }
    
    if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        document.getElementById("userScore").textContent = `User Score: ${humanScore}`;
        document.getElementById("outcome").textContent =  "You win! Scissors beats Paper";
        document.getElementById("outcome").style.fontSize = "50px";
    }
    //Computer win scenarios
    if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++;
        document.getElementById("computerScore").textContent = `Computer Score: ${computerScore}`;
        document.getElementById("outcome").textContent = "You Lose! Rock beats Scissors";
        document.getElementById("outcome").style.fontSize = "50px";
    }
    
    if (computerChoice === "paper" && humanChoice=== "rock") {
        computerScore++;
        document.getElementById("computerScore").textContent = `Computer Score: ${computerScore}`;
        document.getElementById("outcome").textContent = "You Lose! Paper beats Rock";
        document.getElementById("outcome").style.fontSize = "50px";
    }
    
    if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        document.getElementById("computerScore").textContent = `Computer Score: ${computerScore}`;
        document.getElementById("outcome").textContent = "You Lose! Scissors beats Paper";
        document.getElementById("outcome").style.fontSize = "50px";
    }
}

function playGame() {
    getHumanChoice((humanChoice) => {
        console.log("Human choice:", humanChoice);
        let computerChoice = getComputerChoice();
        console.log("Computer choice:", computerChoice);
        console.log(playRound(humanChoice, computerChoice));
    });
}

playGame()





