
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
                                              

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        return "same choice, play again !!"
    }

    if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore ++;
        let message = "You lose! Paper beats Rock " + humanScore + ', ' +computerScore;
        //console.log(message);
        return message;
        //return console.log("You lose! Paper beats Rock", humanScore, computerScore);
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore ++;
        let message = "You winnnnnnnnnnn, rock beats scissors " + humanScore + ', ' +computerScore;
        //console.log(message);
        return message;
        //return console.log("You winnnnnnnnnnn, rock beats scissors", humanScore, computerScore);
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore ++;
        let message = "You winnnnnnnnnnn, Paper beats Rock " + humanScore + ', ' +computerScore;
        return message;
        //return console.log("You winnnnnnnnnnn, Paper beats Rock", humanScore, computerScore);
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore ++;
        let message = "You lose, scissors beats paper " + humanScore + ', ' +computerScore;
        return message;
        //return console.log("You lose, scissors beats paper", humanScore, computerScore);
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore ++;
        let message = "You winnnnnnnnnnn, scissors beats paper " + humanScore + ', ' +computerScore;
        return message;
        //return console.log("You winnnnnnnnnnn, scissors beats paper", humanScore, computerScore);
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore ++;
        let message = "You lose, rock beats scissors " + humanScore + ', ' +computerScore;
        return message;
    }
    

  }


window.addEventListener("DOMContentLoaded", (event) => {
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
    
    const list = document.getElementById('list');
    
    event_listener(rock);
    event_listener(paper);
    event_listener(scissors);
     
});

function Click_function_core (name){
    let compchoice = getComputerChoice();
            const result = playRound(name.id, compchoice);
            console.log(result);
            const li = document.createElement('li');
            li.textContent = result; 
            list.append(li);}


function event_listener (name){
    if (name) {
        name.addEventListener('click', function() {
            if  ((humanScore < 5) && (computerScore < 5)){
                Click_function_core (name);}
            else if (humanScore > computerScore){
                alert("congrats !!!!!!!!!!! you win! ");
            }
            else {
                alert("you lose, bye bye");
            }
          });
    }
}
           
