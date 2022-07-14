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

function playgame(){
    let outcome = document.createElement('p')
    outcome.style.color = 'black'
    outcome.style.fontFamily = 'tom hand'
    outcome.style.fontSize = "45px"
    outcome.style.textAlign = 'center'

        document.getElementById("choicesUI").addEventListener('click', e =>{
            for(let i=0; i<3;i++){
            if(e.target.innerText === "Rock"){
                outcome.textContent = computerPlay("rock")
            }else if(e.target.innerText === "Paper"){
                outcome.textContent = computerPlay("paper")
            }else if (e.target.innerText === "Scissors"){
                outcome.textContent = computerPlay("scissors")
            }
            console.log(i)
            }

        document.getElementById('outcome').appendChild(outcome);
        })

}

for(let i=0; i<3; i++){
    playgame()
}