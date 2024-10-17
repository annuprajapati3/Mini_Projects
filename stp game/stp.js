let choices = document.querySelectorAll(".choices .img");
let user = document.querySelector("#user");
let comp = document.querySelector("#comp");
let message = document.querySelector("#message");
let user_score = 0;
let comp_score = 0;
const generateComp_choice = ()=>{
    arr = ["rock" , "paper","scissor"];
    arrIndx = Math.floor(Math.random()*3);
    comp_choice = arr[arrIndx];
}
const showWinner = (userwin)=>{
    if(userwin){
        user_score++;
        user.innerText = user_score;
        message.innerText = "Congratulation , You Win !!!!"
        message.style.color = "black";
        message.style.backgroundColor = "green";

    }
    else{
        comp_score++;
        comp.innerText = comp_score;
        message.innerText = "You loose!!"
        message.style.color = "black";
        message.style.backgroundColor = "red";
    }
}
const draw = ()=>{
    message.innerText = "Game draw  !!!!"
    message.style.color = "black";
    message.style.backgroundColor = "blue";
}
const playGame = (user_choice)=>{
    generateComp_choice();
    if(comp_choice==user_choice){
        draw();
    }else {
        const userwin = (
            (user_choice==="rock" && comp_choice ==="scissor")||
            (user_choice==="paper" && comp_choice==="rock")||
            (user_choice==="scissor" && comp_choice ==="paper")
        )
        showWinner(userwin);
    }
}
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        let user_choice = choice.getAttribute("id");
        playGame(user_choice);
    })
});