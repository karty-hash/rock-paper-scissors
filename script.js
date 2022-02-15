let player = 0;
let computer = 0;


const rock = document.querySelector("#rock");
rock.addEventListener("click", function playRound(playerSelection, computerSelection){

    if(player == 5 ){
        return;
        
    }else if (computer == 5 ) {
         return;
         
    }
    
    
    playerSelection = "ROCK";
    console.log(`player:${playerSelection}`);
    const sign = ["ROCK", "PAPER", "SCISSORS"];
    const  randomElement = sign[Math.floor(Math.random()* sign.length)];
    console.log(`computer:${randomElement}`);
    computerSelection = randomElement;

    let chance = document.querySelector(".chances");
    chance.createElement = "p";
    
    
   if(computerSelection === "ROCK"){
        chance.textContent = "It's a tie. You both chose rock";
        chance.appendChild = "chance";
    }else if(computerSelection == "PAPER"){
        chance.textContent = "You lose! paper beats rock";
        chance.appendChild = "chance";;
        computer = computer + 1;
    }else{
        chance.textContent = "You Win! rock beats scissors";
        chance.appendChild = "chance";;
        player = player + 1;
        
    }

    let pScore = document.querySelector(".player");
    pScore.createElement = "p";
    pScore.textContent = `Player Score: ${player}`;
    pScore.appendChild = "pScore";

    let cScore = document.querySelector(".computer");
    cScore.createElement = "p";
    cScore.textContent = `Computer Score: ${computer}`;
    pScore.appendChild = "pScore";

    
    let result = document.querySelector(".result");
    result.createElement = "p";

    if(player > 4 ){
        result.textContent = "You won the game!";
        result.appendChild = "result";
        
    }else if (computer  > 4 ) {
        result.textContent = "Computer won the game!";
        result.appendChild = "result";
         
    }

})


const paper = document.querySelector("#paper");
paper.addEventListener("click", function playRound(playerSelection, computerSelection){

    if(player == 5 ){
        return;
        
    }else if (computer  == 5 ) {
         return;
         
    }

    let chance = document.querySelector(".chances");
    chance.createElement = "p";
    
    
    playerSelection = "PAPER";
    console.log(`player:${playerSelection}`);
    const sign = ["ROCK", "PAPER", "SCISSORS"];
    const  randomElement = sign[Math.floor(Math.random()* sign.length)];
    console.log(`computer:${randomElement}`);
    computerSelection = randomElement;
    
     if(computerSelection === "ROCK"){
        chance.textContent = "You win! paper beats rock";
        chance.appendChild = "chance";;
        player = player + 1;
    
    }else if(computerSelection === "PAPER"){
        chance.textContent = "It's a tie. You both chose paper";
        chance.appendChild = "chance";
    }else{
        chance.textContent = "You lose! scissors beats paper";
        chance.appendChild = "chance";;
        computer = computer + 1;
    }

    let pScore = document.querySelector(".player");
    pScore.createElement = "p";
    pScore.textContent = `Player Score: ${player}`;
    pScore.appendChild = "pScore";

    let cScore = document.querySelector(".computer");
    cScore.createElement = "p";
    cScore.textContent = `Computer Score: ${computer}`;
    pScore.appendChild = "pScore";

    let result = document.querySelector(".result");
    result.createElement = "p";

    if(player > 4 ){
        result.textContent = "You won the game!";
        result.appendChild = "result";
        
    }else if (computer  > 4 ) {
        result.textContent = "Computer won the game!";
        result.appendChild = "result";
         
    }
    
})

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", function playRound(playerSelection, computerSelection){

    if(player == 5 ){
        return;
        
    }else if (computer  == 5 ) {
         return;
         
    }

    let chance = document.querySelector(".chances");
    chance.createElement = "p";
   
    
    playerSelection = "SCISSORS";
    console.log(`player:${playerSelection}`);
    const sign = ["ROCK", "PAPER", "SCISSORS"];
    const  randomElement = sign[Math.floor(Math.random()* sign.length)];
    console.log(`computer:${randomElement}`);
    computerSelection = randomElement;
    
   
   
    if(computerSelection === "ROCK"){
        chance.textContent = "You lose! rock beats scissors";
        chance.appendChild = "chance";
        computer = computer + 1;
    }else if(computerSelection == "SCISSORS"){
        chance.textContent = "It's a tie. You both chose scissors";
        chance.appendChild = "chance";
    }else{
        chance.textContent = "You Win! scissors beats paper";
        chance.appendChild = "chance";
        player = player + 1;
    }

    let pScore = document.querySelector(".player");
    pScore.createElement = "p";
    pScore.textContent = `Player Score: ${player}`;
    pScore.appendChild = "pScore";

    let cScore = document.querySelector(".computer");
    cScore.createElement = "p";
    cScore.textContent = `Computer Score: ${computer}`;
    pScore.appendChild = "pScore";


    let result = document.querySelector(".result");
    result.createElement = "p";

    if(player > 4 ){
        result.textContent = "You won the game!";
        result.appendChild = "result";
        
    }else if (computer  > 4 ) {
        result.textContent = "Computer won the game!";
        result.appendChild = "result";
         
    }

})


const refresh = document.querySelector("#refresh");
refresh.addEventListener("click", () => {
    window.location.reload();
})

   




