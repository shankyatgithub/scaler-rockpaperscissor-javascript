let icons = document.querySelectorAll(".icon-container .icon");
let selectionContainer = document.querySelector(".selection-container");
let result = document.querySelector(".result h1");

let selectArr = [['rock','fa-solid fa-hand-back-fist'],['paper','fa-solid fa-hand'],['scissor','fa-solid fa-hand-scissors']];

for(let i = 0; i < icons.length; i++)
{
    icons[i].addEventListener("click",function() {
        result.innerText = "";
        selectionContainer.innerHTML = "";
        setTimeout(gameLogic,1000,i)
    })
}

function gameLogic(i){
    let playerChoice = selectArr[i][0];
    let ran = Math.floor(Math.random()*3);
    let computerChoise = selectArr[ran][0];
    
    selectionContainer.innerHTML = `
        <div class="you"><h2>You</h2><div class="icon"><i class="${selectArr[i][1]}"></i></div></div>
        <div class="comp"><h2>COMPUTER</h2><div class="icon"><i class="${selectArr[ran][1]}"></i></div></div>          
    `

    if(playerChoice == computerChoise)
    {
        result.innerText = "DRAW";
    } else if ((playerChoice == "rock" && computerChoise == "scissor") || 
                (playerChoice == "paper" && computerChoise == "rock") ||
                (playerChoice == "scissor" && computerChoise == "paper")) {
                    result.innerText = "YOU WIN!";

    } else {
        result.innerText = "COMPUTER WINS!";
    }
}














/*<div class="you"><h2>You</h2><div class="icon"><i class="fa-solid fa-hand-scissors"></i></div></div>
            <div class="comp"><h2>COMPUTER</h2><div class="icon"><i class="fa-solid fa-hand-back-fist"></i></div></div>*/