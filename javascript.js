
const crock = "rock";
const cpaper = "paper";
const cscissors = "scissors";

let random = Math.floor(Math.random()*12)+1;
let compChoice;

const urock = "rock";
const upaper = "paper";
const uscissors = "scissors";



if (random <=4){
    compChoice = crock;
}else if (random > 4 && random <= 8){
    compChoice = cpaper
}else{
    compChoice = cscissors;
}

let user = prompt("Rock, Paper, or Scissors?");
user = user.toLowerCase();

if(user == "rock"){
 user = urock;
}else if(user == "paper"){
 user = upaper
}else if (user == "scissors"){
 user = uscissors;
}

console.log(user);
console.log(compChoice);


