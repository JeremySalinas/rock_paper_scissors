function computerPlay(userChoice){
    let botChoice=Math.floor(Math.random() * 3) + 1;

    if(userChoice === "rock"){
        if(botChoice === 1){
            return "draw"
        }else if(botChoice === 2){
            return "lose"
        }else if(botChoice === 3){
            return "win"
        }
    }else if(userChoice === "paper"){
        if(botChoice === 1){
            return "win"
        }else if(botChoice === 2){
            return "draw"
        }else if(botChoice === 3){
            return "lose"
        }
    }else if (userChoice === "scissors"){
        if(botChoice === 1){
            return "lose"
        }else if(botChoice === 2){
            return "win"
        }else if(botChoice === 3){
            return "draw"
        }
    }
}

let outcome = document.createElement('p')
outcome.style.color = 'white'

document.getElementById("choice").addEventListener('click', e =>{
    if(e.target.matches('img.rock')){
        outcome.textContent = computerPlay("rock")
    }else if(e.target.matches('img.paper')){
        outcome.textContent = computerPlay("paper")
    }else if (e.target.matches('img.scissors')){
        outcome.textContent = computerPlay("scissors")
    }

document.getElementById('choice').appendChild(outcome);
})