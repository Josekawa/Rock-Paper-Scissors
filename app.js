const computerPlay = () => {
    const options = ['rock','paper','scissors'];
    return options[Math.floor(Math.random() * options.length)];
} // function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.



// Write a function that plays a single round of Rock Paper Scissors.
//  The function should take two parameters - the playerSelection and computerSelection - 
//  and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
const playRound = () => {
    if (playerSelection === computerSelection){
        return "try again";
    }else if((computerSelection === 'scissors' && playerSelection === 'rock') 
            || (computerSelection === 'rock' && playerSelection === 'paper')
            || (computerSelection === 'paper' && playerSelection === 'scissors')){
        return "you won";
    }else if((computerSelection === 'rock' && playerSelection === 'scissors') 
            || (computerSelection === 'scissors' && playerSelection === 'paper') 
            || (computerSelection === 'paper' && playerSelection === 'rock')){
        return 'you lose';
    }else{
        return 'what the fuck you did there?'
    };
  };

  //the final showdown

    let playerSelection = 'rock';
    let computerSelection = computerPlay();

    
const game = () =>{

    for (let i = 0; i < 5; i++) {
        return playRound();
    };
};



