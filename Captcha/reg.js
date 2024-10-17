    let button = document.querySelector("button");
    let cick = document.querySelector(".captch i");
    let captcha = document.querySelector(".background");
    let answer = document.querySelector(".answer");
    let status = document.querySelector(".status");
    let generateCaptcha = ()=>{
    let random = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
        let charchater = "";
        for(let i=0;i<6;i++){
            let index = Math.floor(Math.random()*random.length);
            charchater = charchater +random[index];
        };
        captcha.innerText = charchater;
    };
    generateCaptcha();
    cick.addEventListener("click" , ()=>{
        generateCaptcha();
        answer.value="";
    })
    button.addEventListener("click", () => {
        let user = answer.value.trim();
        let comp = captcha.innerText;
        if (user === comp) {
            status.innerText = "✔️";
        } else {
            status.innerText = "❌";
            generateCaptcha();
            answer.value = "";
        }
    });
    
