
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const rdmidx = Math.floor(Math.random()*3);
    return options[rdmidx];
}


const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate comp choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);


    if(userChoice === compChoice) {
        //Draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

const drawGame = () => {
    // console.log("Game was Draw!");
    msg.innerText = "Game was Draw! / Play Again";
    msg.style.backgroundColor = "#222222";
} 



const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#2E294E";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lose! ${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor = "#820263 ";
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("clicked", userChoice);
        playGame(userChoice);
    });
});


