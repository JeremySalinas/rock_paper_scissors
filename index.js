function computerPlay(userChoice){
    let botChoice=Math.floor(Math.random() * 3) + 1;
    console.log(botChoice)
    if(userChoice === "Rock"){
        if(botChoice === 1){
            return "draw"
        }else if(botChoice === 2){
            return "lose"
        }else if(botChoice === 3){
            return "win"
        }
    }else if(userChoice === "Paper"){
        if(botChoice === 1){
            return "win"
        }else if(botChoice === 2){
            return "draw"
        }else if(botChoice === 3){
            return "lose"
        }
    }else if (userChoice === "Scissors"){
        if(botChoice === 1){
            return "lose"
        }else if(botChoice === 2){
            return "win"
        }else if(botChoice === 3){
            return "draw"
        }
    }
}

let userChoice =prompt("Rock Paper or Scissors?")

console.log(computerPlay(userChoice))