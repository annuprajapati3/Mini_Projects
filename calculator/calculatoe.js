let buttons = document.querySelectorAll(".numbers");
let answer = document.querySelector(".answer");
let equal = document.querySelector("#equal")
let expression = ''
buttons.forEach((button) =>{
    button.addEventListener("click",() =>{
        let element = button.innerText;
        if(element === "="){
            expression = eval(expression)
            answer.innerText = expression;
        }else if(element === "AC"){
            expression = " ";
            answer.innerText = expression;
        }
        else if(element === "X"){
            if(expression !== ""){
                expression = expression.slice(0,-1);
                answer.innerText = expression;
            }
        }
        else{
            expression = expression + element;
            answer.innerText = expression;
        }
        
    })
})
document.addEventListener("keydown" , (event)=>{
    let key = event.key;
    console.log(key);
    console.log(typeof(key));
    if(/[0-9+\-*/.=]/.test(key)){
        if(key=="Enter"){
            expression = eval(expression)
            answer.innerText = expression;
        }else if(key=== "X"|| key ==="x"){
            expression = " ";
            answer.innerText = expression;
        }
        else if(key=== "Backspace"){
            if(expression !== ""){
                expression = expression.slice(0,-1);
                answer.innerText = expression;
            }
        }
        else{
            expression= expression+ key;
            answer.innerText = expression;
        }

    }
})
