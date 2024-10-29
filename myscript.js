
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

console.log(getComputerChoice());








// human_choice -> given a user, having a prompt, take his input and store it 

/*function getHumanChoice(){


}
*/

// keep track of user and computer scores in vars humanScore, computerScore initialzed to 0



/*function playRound(humanChoice, computerChoice) {
    // your code here!
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);*/







  