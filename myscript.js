
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
    let compIsWinner = false;
    let userIsWinner = false;
    if (humanChoice === "rock" && computerChoice === "paper"){
        compIsWinner = true;
        computerScore ++;
        console.log("You lose! Paper beats Rock", humanScore, computerScore);
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore ++;
        userIsWinner = true;
        console.log("You winnnnnnnnnnn, rock beats scissors", humanScore, computerScore);
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore ++;
        userIsWinner = true;
        console.log("You winnnnnnnnnnn, Paper beats Rock", humanScore, computerScore);
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore ++;
        userIsWinner = true;
        console.log("You winnnnnnnnnnn, scissors beats paper", humanScore, computerScore);
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore ++;
        compIsWinner = true;
        console.log("You lose, scissors beats paper", humanScore, computerScore);
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore ++;
        compIsWinner = true;
        console.log("You lose, rock beats scissors", humanScore, computerScore);
    }
    

  }
  

/* playGame function:  loop (5times) 
                      that call playground each 
                      if computerScore > humanScore (you lose)
                      else ( you win congrats)
 

*/ 

function playGame(){

    
   //console.log(playRound(humanSelection, computerSelection));
    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore){
        console.log("congrats !!!!!!!!!!! you win! ");
    }
    else {
        console.log("you lose, bye bye");
    }

}

playGame();




  