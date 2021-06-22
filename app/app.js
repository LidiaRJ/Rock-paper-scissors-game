let userScore = 0;
let compScore = 0;
const userScoreSpan = document.getElementById("user__score");
const compScoreSpan = document.getElementById("comp__score");
const scoreBoard = document.querySelector(".main__score");
const resultP = document.querySelector(".result > p");
const scissorsButton = document.getElementById("scissors");
const paperButton = document.getElementById("paper");
const rockButton = document.getElementById("rock");

function getComputerChoice() {
    const choices = ["scissors", "paper", "rock"];
    const randomNum = Math.floor(Math.random() * 3); //Built-in object in JS
    return choices [randomNum];
}

//Make result message more readable
function convertToUpper(letter) {
    if (letter == "rock") return "Rock";
    if (letter == "scissors") return "Scissors";
    if (letter == "paper") return "Paper";
}


//Function to display message
function wins(user, computer) {
    userScore++;
    userScoreSpan.innerHTML = userScore; //To modify the html markup
    compScoreSpan.innerHTML = compScore;
    resultP.innerHTML = convertToUpper(user) + " beats " + computer + ". You Won!";
    document.getElementById(user).classList.add('green__glow'); //Add a class to user choice 
    setTimeout(() => document.getElementById(user).classList.remove('green__glow'), 1500); //Set timer for the glow
}


function loses(user, computer) {
    compScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    resultP.innerHTML = convertToUpper(user) + " loses against " + computer + ". You Lost!";
    document.getElementById(user).classList.add('red__glow');
    setTimeout(() => document.getElementById(user).classList.remove('red__glow'), 1500);
}

function draw(user, computer) {
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    resultP.innerHTML = convertToUpper(user) + " equals " + computer + ". It's a draw!";
}

function game(userChoice) {
    const compChoice = getComputerChoice();
    console.log("user choice => " + userChoice);
    console.log("computer choice =>" + compChoice);

    switch(userChoice + compChoice) { //Instead of if statements
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            wins(userChoice, compChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            loses(userChoice, compChoice);
            break;   
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, compChoice);
            break; 
    }
}

function main() {
    scissorsButton.addEventListener('click', () => {
        game("scissors")
    })
    
    paperButton.addEventListener('click', () => {
        game("paper")
    })
    
    rockButton.addEventListener('click', () => {
        game("rock")
    })
}


main();
