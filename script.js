function chance(){
    let x = prompt("Please choose the weapon of your choice: ");
    const player = x.toUpperCase();
    console.log(player);
    return player;
}
                                                                                                                 

function computerPlay(){
    const sign = ["ROCK", "PAPER", "SCISSORS"];
    const  randomElement = sign[Math.floor(Math.random()* sign.length)];
    console.log(randomElement);
    return randomElement;
} 

let player = 0;
let Computer = 0;

function playRound(playerSelection,  computerSelection){
    if(playerSelection === computerSelection){
        console.log("Match draw");
        console.log("No change in score");
    } else if (playerSelection == "ROCK" && computerSelection == "PAPER"){
        console.log("Computer Wins.");
        Computer = Computer + 1;
        console.log(Computer);
        return Computer;
    }else if (playerSelection =="PAPER" && computerSelection == "SCISSORS"){
        console.log("Computer Wins");
        Computer = Computer + 1;
        console.log(Computer);
        return Computer;
    }else  if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        console.log("Computer Wins")
        Computer = Computer + 1;
        console.log(Computer);
        return Computer;
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
        console.log("Wrong weapon. Computer wins");
        Computer = Computer + 1;
        console.log(Computer);
        return Computer
    }
}


function game (){
    for (i = 0; i < 5; i++){
        const playerSelection = chance();
        const computerSelection = computerPlay();
        playRound(playerSelection,  computerSelection);

    }
    alert(`Your score ${player}`);
    alert(`Computer score ${Computer}`);
    if (player<Computer){
        alert("YOU LOST");
    }else if(player>Computer){
        alert("YOU WON");
    }else{
        alert("DRAW, PLAY AGAIN");
    }
}

game();





