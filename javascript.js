



const crock = "rock";
const cpaper = "paper";
const cscissors = "scissors";

const urock = "rock";
const upaper = "paper";
const uscissors = "scissors";


let play = confirm("Do you want to play Rock, Paper, Scissors?");

if (play == true){
    RPS();
}else{
    alert("Have a great day!");
}



function RPS(){

    let compScore = 0;
    let userScore = 0
 
for (let i = 1; i <=5; i++){
    
    let user = prompt("Rock, Paper, or Scissors?");
    user = user.toLowerCase();

    let compChoice;
    let random = Math.floor(Math.random()*12)+1;
    if (random <=4){
        compChoice = crock;
    }else if (random > 4 && random <= 8){
        compChoice = cpaper
    }else{
        compChoice = cscissors;
    }
    
    
    if(user == "rock"){
     user = urock;
    }else if(user == "paper"){
     user = upaper
    }else if (user == "scissors"){
     user = uscissors; 
    }

    if(user == urock && compChoice == cpaper){
        alert("Computer won this round!");
        compScore++;

    }else if (user == urock && compChoice == cscissors){
        alert("You won this round!");
        userScore++;
    }else if(user == upaper && compChoice == crock){
        alert("You won this round!");
        userScore++;
    }else if(user == upaper && compChoice == cscissors){
        alert("Computer won this round!");
        compScore++;
    }else if(user == uscissors && compChoice == crock){
        alert("Computer won this round!");
        compScore++;
    }else if(user == uscissors && compChoice == cpaper){
        alert("You won this round!");
        userScore++;
    }else{
        alert("This round was a tie.");
    }

    alert("Games won: \n You: " + userScore + "\n Computer: "+compScore)
    console.log("computer: "+compChoice);
    console.log("User: "+user);
}
if(userScore > compScore){
    alert("You won the game!")
}else if (userScore < compScore){
    alert("Sorry, you lost the game.")
}else{
    alert("The game is a tie!");
}

let playAgain = confirm("Do you want to play again?");

if (playAgain == true){
    RPS();
}else{
    alert("Thank you for playing :)");
    
}

}
