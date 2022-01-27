const computerPlay = () => {
    let options = ['rock','paper','scissors'];
    return options[Math.floor(Math.random() * options.length)];
} // function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.



// Write a function that plays a single round of Rock Paper Scissors.
//  The function should take two parameters - the playerSelection and computerSelection - 
//  and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
const playRound = () => {
    let playerSelection = "rock";
    let computerSelection = computerPlay();
    if (playerSelection === computerSelection){
        return "try again";
    }else if(computerSelection === 'scissors'){
        return "you won";
    }else{
        return 'you lose';
    }
  }

  //the final showdown

const game = () =>{

    for (let i = 0; i < 5; i++) {
        return playRound(i);
    }
}

  
