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


        if(botChoice === 1){
            document.querySelector(".generated").style.background= 'url(img/rock.png)'
        }else if(botChoice === 2){
            document.querySelector(".generated").style.background= 'url(img/paper.png)'
        }else if(botChoice === 3){
            document.querySelector(".generated").style.background= 'url(img/scissors.png)'
        }
    }
}

    let userScore=0
    let computScore=0
    let outcome = document.createElement('div')
    let userScoreText = document.createElement('div')
    let computScoreText = document.createElement('div')

        document.getElementById("choicesUI").addEventListener('click', e =>{

            if(userScore > 4 || computScore > 4){
                if(userScore === 5){
                    outcome.textContent = "You win"
                }else if(computScore === 5){
                    outcome.textContent = "You lose"
                }
                document.createElement
                gameOutcome = "draw"
            }else if(e.target.innerText === "Rock"){
                gameOutcome = computerPlay("rock")
                outcome.textContent = gameOutcome
            }else if(e.target.innerText === "Paper"){
                gameOutcome = computerPlay("paper")
                outcome.textContent = gameOutcome
            }else if (e.target.innerText === "Scissors"){
                gameOutcome = computerPlay("scissors")
                outcome.textContent = gameOutcome
            }

            if(gameOutcome === "win"){
                userScore ++
            }else if(gameOutcome ==="lose"){
                computScore ++
            }
            console.log(userScoreText)
            userScoreText.textContent = userScore
            computScoreText.textContent = computScore

        document.getElementById('outcome').appendChild(userScoreText);
        document.getElementById('outcome').appendChild(outcome);
        document.getElementById('outcome').appendChild(computScoreText);

        })