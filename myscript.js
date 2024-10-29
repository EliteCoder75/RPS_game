
//console.log("hello wold");


// getComputerChoice -> using math.random function, we generate a number (0-1) with three probabilities, using simple if link result (rock, paper, scissors) 


function getComputerChoice(){
    let ch = Math.floor(Math.random() * 3);

    if (ch == 0) {
        return "rock"
    }
    else if (ch == 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}



// human_choice -> given a user, having a prompt, take his input and store it 

function getHumanChoice(){
    let u = prompt("What's your choice between the follwing : rock, paper, scissors ?");
    return u.toLowerCase();
}


// keep track of user and computer scores in vars humanScore, computerScore initialzed to 0

let humanScore = 0;
let computerScore = 0;

// playRound function  paper -> rock
//                           -> scissors   rock -> paper
//                                              -> scissors   
//                                                  

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore ++;
        return "You lose! Paper beats Rock"
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore ++;
        return "You winnnnnnnnnnn, rock beats scissors"
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore ++;
        return "You winnnnnnnnnnn, Paper beats Rock"
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore ++;
        return "You winnnnnnnnnnn, scissors beats paper"
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore ++;
        return "You lose, scissors beats paper"
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore ++;
        return "You lose, rock beats scissors"
    }

  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
 console.log(playRound(humanSelection, computerSelection));







  