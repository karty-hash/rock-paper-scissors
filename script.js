/* function asking the user for the prefered item */
function chance(){
    let x = prompt("Please choose the weapon of your choice: ");
    const player = x.toUpperCase();
    console.log(player);
    return player;
}
                                                                                                                 
/*function to randomly select the computer's prefered choice of  item */
function computerPlay(){
    const sign = ["ROCK", "PAPER", "SCISSORS"];
    const  randomElement = sign[Math.floor(Math.random()* sign.length)];
    console.log(randomElement);
    return randomElement;
} 
/* variable for scorecard*/
let player = 0;
let computer = 0;

/*game play of rock paper scissors */
function playRound(playerSelection,  computerSelection){
    if(playerSelection === computerSelection){
        console.log("Match draw");
        console.log("No change in score");
    } else if (playerSelection == "ROCK" && computerSelection == "PAPER"){
        console.log("computer Wins.");
        computer = computer + 1;
        console.log(computer);
        return computer;
    }else if (playerSelection =="PAPER" && computerSelection == "SCISSORS"){
        console.log("computer Wins");
        computer = computer + 1;
        console.log(computer);
        return computer;
    }else  if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        console.log("computer Wins")
        computer = computer + 1;
        console.log(computer);
        return computer;
    }else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
        console.log("You Win.");
        player = player + 1;
        console.log(player);
        return player;
    }else if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        console.log("You Win.");
        player = player + 1;
        console.log(player);
        return player;
    }else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        console.log("You Win.");
        player = player + 1;
        console.log(player);
        return player;
    }else{
        console.log("Wrong weapon. computer wins");
        computer = computer + 1;
        console.log(computer);
        return computer
    }
}


function game (){
    for (i = 0; i < 5; i++){
        const playerSelection = chance();
        const computerSelection = computerPlay();
        playRound(playerSelection,  computerSelection);

    }
    alert(`Your score ${player}`);
    alert(`computer score ${computer}`);
    if (player<computer){
        alert("YOU LOST");
    }else if(player>computer){
        alert("YOU WON");
    }else{
        alert("DRAW, PLAY AGAIN");
    }
}

game();





