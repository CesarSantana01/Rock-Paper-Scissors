
const crock = "rock";
const cpaper = "paper";
const cscissors = "scissors";

let random = Math.floor(Math.random()*12)+1;
let compChoice;

if (random <=4){
    compChoice = crock;
}else if (random > 4 && random <= 8){
    compChoice = cpaper
}else{
    compChoice = cscissors;
}


