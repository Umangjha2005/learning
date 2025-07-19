let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let renewBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

let turnX = true; // true -> X's turn, false -> O's turn

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.innerText = "X";
            box.style.color = "red";
        } else {
            box.innerText = "O";
            box.style.color = "blue";
        }
        turnX = !turnX;
        box.disabled = true;

        checkWinner();   
    });
});

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
    msgContainer.classList.add("hide");
};

const resetGame = () => {
    turnX = true;
    enableBoxes();
};

const newGame = () => {
    turnX = true;
    enableBoxes();
};

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return;
            }
        }
    }
};

resetBtn.addEventListener("click", resetGame);
renewBtn.addEventListener("click", newGame);
