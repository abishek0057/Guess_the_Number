let formBtn = document.querySelector(".form-btn");
let genNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector(".score").innerText += score;
formBtn.addEventListener("click", () => {
    const inputNumber = Number(document.querySelector(".num-input").value);
    if (!inputNumber) {
        document.querySelector('.guessing').innerText = "No number";
        document.querySelector('.guessing').style = "color:red";
        score--;
        document.querySelector(".score").innerText = score;
    }
    else if (inputNumber === genNumber) {
        document.querySelector('.guessing').innerText = "Congratulation, Correct";
        document.querySelector('.guessing').style = "color:green";
        document.querySelector(".hidden").innerText = genNumber;
        document.querySelector(".num-input").disabled = true;
        document.querySelector(".btn-again").classList.add("btn-again-animation");
    }

    else if(inputNumber > genNumber){
        document.querySelector('.guessing').innerText = "Guessed too high!";
        document.querySelector('.guessing').style = "color:yellow";
        score--;
        document.querySelector(".score").innerText = score;
        if(score===0){
            document.querySelector('.guessing').innerText = "You lose the game";
            document.querySelector(".hidden").innerText = genNumber;
            formBtn.disabled=true;
            document.querySelector(".btn-again").classList.add("btn-again-animation");
        }
    }

    else if(inputNumber < genNumber){
        document.querySelector('.guessing').innerText = "Guessed too low!";
        document.querySelector('.guessing').style = "color:yellow";
        score--;
        document.querySelector(".score").innerText = score;
        if(score===0){
            document.querySelector('.guessing').innerText = "You lose the game";
            document.querySelector(".hidden").innerText = genNumber;
            formBtn.disabled=true;
            document.querySelector(".btn-again").classList.add("btn-again-animation");
        }
    }

});

let playAgain = document.querySelector(".btn-again");
playAgain.addEventListener("click", () =>{
    window.location.reload()
});