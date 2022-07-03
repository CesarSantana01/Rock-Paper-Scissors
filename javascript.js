
    const buttons = document.querySelectorAll("button");
    const buttons_array = Array.from(buttons);

    const playerPara = document.querySelector("#playerPara");
    const compPara = document.querySelector("#compPara");

    const playerScoreBox = document.querySelector("#playerScoreBox");
    const computerScoreBox = document.querySelector("#computerScoreBox");

    let playerSelection = null;


let compChoice = null;
    
function getCompChoice(){

let crock = "rock"
let cpaper = "paper"
let cscissors = "scissors"


    let random = Math.floor(Math.random()*12)+1;
    if (random <=4){
        compChoice = crock;
    }else if (random > 4 && random <= 8){
        compChoice = cpaper
    }else{
        compChoice = cscissors;
    }
    return compChoice;
}

let playerScore = 0;
let compScore = 0;
let round = 0;

const results = document.querySelector("#resultshd");

function getWinner(){
    if(round==5){
        if(playerScore>compScore){
        winner = "You win!"
    }else if(playerScore<compScore){
        winner = "Computer Wins!"
    }else{
        winner = "This game was a tie!"
    }
    return [
        results.textContent=winner,
        round = 0,
        playerScore = 0,
        compScore = 0
    ];
    }else{
        return;
    }
}

function getSelection(){
    playerPara.textContent= ("You selected: "+ playerSelection)
    compPara.textContent= ("Computer selected: "+ compChoice)

}
function displayScore(){
    if(playerScore === 1){
        playerScoreBox.textContent = ("You have "+playerScore+" point!" );
    }else{
    playerScoreBox.textContent = ("You have "+playerScore+" points!" );
    }
    if(compScore === 1){
        computerScoreBox.textContent = ("Computer has "+compScore+" point!" );
    }else{
    computerScoreBox.textContent = ("Computer has "+compScore+" points!" );
    }
}
function play(){
    getCompChoice();
  
    if(playerSelection == "rock" && compChoice == "scissors"){
        results.textContent="You won this round!"
        playerScore++;
    }else if(playerSelection == "rock" && compChoice == "paper"){
        results.textContent="Computer won this round!"
        compScore++;
    }else if(playerSelection == "scissors" && compChoice == "paper"){
        results.textContent="You won this round!"
        playerScore++;
    }else if(playerSelection == "scissors" && compChoice == "rock"){
        results.textContent="Computer won this round!"
        compScore++;
    }else if(playerSelection == "paper" && compChoice == "rock"){
        results.textContent="You won this round!"
        playerScore++;
    }else if(playerSelection == "paper" && compChoice == "scissors"){
        results.textContent="Computer won this round!"
        compScore++;
    }else{
        results.textContent="This round was a tie";
    }

    
console.log(playerSelection);
console.log(compChoice);

}
function getWinner(){
    if(playerScore>compScore){
        winner = "You win!"
    }else if(playerScore<compScore){
        winner = "Computer Wins!"
    }else{
        winner = "This game was a tie!"
    }
}
   
    let winner;
    
buttons_array.forEach( button => {
    button.addEventListener("click", e =>{
        playerSelection = button.dataset.choices;
        play()
        getSelection();
        displayScore();
        round++;

        
        if(round==5){
            if(playerScore>compScore){
            winner = "You win!"
        }else if(playerScore<compScore){
            winner = "Computer Wins!"
        }else{
            winner = "This game was a tie!"
        }
        return [
            results.textContent=winner,
            round = 0,
            playerScore = 0,
            compScore = 0
        ];
        }else{
            return;
        }
        
    });      
    })

