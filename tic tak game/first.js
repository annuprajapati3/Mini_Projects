let boxes = document.querySelectorAll(".container .game .box");
let turn = true;
let countX = 0;
let countO = 0;
let X = document.querySelector("#X");
let O = document.querySelector("#O");
let newGame = document.querySelector(".newGame");
let Reset = document.querySelector(".Reset");
const winnerPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            box.innerText = "O";
            turn = false;
        } else {
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disabledBox = ()=>{
    boxes.forEach((box) =>{
    box.disabled = true;
})
}
const enabledBox = ()=>{
    boxes.forEach((box) =>{
    box.disabled = false;
    box.innerText = "";
})
}
const showWinner = (pattern1)=>{
    if(pattern1 === "X"){
        countX++;
        X.innerText = countX;
    }else{
        countO++;
        O.innerText = countO;
    }
}
const checkWinner = () =>{
    for(let pattern of winnerPattern){
        let pattern1 = boxes[pattern[0]].innerText;
        let pattern2 = boxes[pattern[1]].innerText;
        let pattern3 = boxes[pattern[2]].innerText;
        if(pattern1 != "" && pattern2 != "" && pattern3 != ""){
            if((pattern1==pattern2) &&(pattern2==pattern3)){
                showWinner(pattern1);
                disabledBox();
            }
        }
        
    }
}
newGame.addEventListener("click", ()=>{
    enabledBox();

})
Reset.addEventListener("click" ,()=>{
    enabledBox();
    X.innerText = "0";
    O.innerText = "0";
})