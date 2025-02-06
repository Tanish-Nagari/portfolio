
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container"); 
let button = document.querySelectorAll("button");

let Turn_O = true; //plr_X, plr_O
let count = 0;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (Turn_O) {
            box.innerText= "O";
            Turn_O = false;
            box.classList.add("color1");
            box.classList.remove("color2");
        } else {
            box.innerText = "X";
            Turn_O = true;
            box.classList.add("color2");
            box.classList.remove("color1");
        }
        box.disabled = true;
        count++;
        
        // let box_clr = boxColor();

        let isWinner = checkWinner();

        if(count === 9 && !isWinner) {
            gameDraw();

        }
    });
});

// const boxColor = () => {
//     if(Turn_O === true){
//         boxes.classList. = "black";
//     }
//     else {
//        boxes.style.color = "brown";
//     }
// }

// box.classList.add("style")

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}



const resetGame = () => {
    Turn_O = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const checkWinner = () => {
    for(let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos1Val != "" && pos1Val != "" ) {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

const showWinner = (winner) => {
    msg.innerText = `congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
};

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);