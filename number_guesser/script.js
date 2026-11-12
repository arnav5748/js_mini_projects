const min = 1;
const mxm = 100;
const answer = Math.floor(Math.random()*(mxm - min +1)) + min ;

const start_btn = document.getElementById("start_btn");
const player_name = document.getElementById("name");
const leaderboard = document.getElementById("leaderboard");

let attempts = 0;
let guess;
let running = false;
let forename = "";

let scores = JSON.parse(localStorage.getItem("leaderboard")) || [];    //js array made from local stored data

function display(){  //scores simply being displayed and being stored in leaderboard list(html item not local storage)
    scores.sort((a, b) => a.tries - b.tries);
    leaderboard.innerHTML = "";
    scores.forEach(function(player){
        let li = document.createElement("li");
        li.textContent = `${player.title} : attempts = ${player.tries}`;
        leaderboard.appendChild(li);
    });
}

function savescores(){
    scores.push({
        title: forename,
        tries: attempts
    });

    localStorage.setItem("leaderboard", JSON.stringify(scores));   //local data being stored so that we can retireve scores array for the next time
    attempts = 0;
    display();
}

function startgame(){
    running = true;
    console.log("Game started!");

    forename = player_name.value.trim();

    if(forename == ""){
        alert("please enter the name");
        return;
    }

    alert(`Welcome ${forename}! Let's play.`);

    while(running){
        guess = window.prompt(`guess a number between ${min} and ${mxm}`);
        guess = Number(guess);

        if(isNaN(guess)){
            window.alert(`enter an integer`);
        }

        if(guess<min || guess>mxm){
            window.alert(`enter a valid intger`);
        }

        if(guess<answer){
            window.alert(`guess too low`);
            attempts++;
        }

        else if(guess>answer){
            window.alert(`guess too high`);
            attempts++;
        }

        else{
            window.alert(`congrats, you guessed the right number, attempts = ${attempts}`);
            running = false;
            savescores();
        }  
    }
}

start_btn.onclick = function(){
    startgame();
}


