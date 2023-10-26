// Declaring variables--------------------------------
    var imageTeam1 = document.getElementById("image-1")
    var imageTeam2 = document.getElementById("image-2")
    var rockBtn = document.getElementById("rock")
    var paperBtn = document.getElementById("paper")
    var scissorsBtn = document.getElementById("scissors")
    var rockSrc = "./assets/rock-hand.png"
    var paperSrc = "./assets/paper-hand.png"
    var scissorsSrc = "./assets/scissors-hand.png"
    let choiceArray = [];
    var randomIndex;
    var playerScore = 0;
    var compScore = 0;
    var scoreTeam1 = document.getElementById("score-team-1")
    var scoreTeam2 = document.getElementById("score-team-2")
    scoreTeam1.textContent = playerScore
    scoreTeam2.textContent = compScore
    var gameOverDiv = document.getElementById("game-over");
    var gameOverMessage = document.getElementById("game-over-message");
    var playAgainBtn = document.getElementById("play-again-button");

//Creating a function to get random moves for computer
    function randomize(){
        choiceArray = [rockSrc, paperSrc, scissorsSrc]
        randomIndex = Math.floor(Math.random()*3)
        imageTeam2.src = choiceArray[randomIndex]
    }

// Creating a function to update the score
    function updateScore(){
        const playerChoice = imageTeam1.getAttribute("src");
        const computerChoice = imageTeam2.getAttribute("src");
        if(playerChoice==rockSrc && computerChoice==scissorsSrc){
            playerScore++;
        }
        else if(playerChoice==rockSrc && computerChoice==paperSrc){
            compScore++;
        }
        else if(playerChoice==paperSrc && computerChoice==scissorsSrc){
            compScore++;
        }
        else if(playerChoice==paperSrc && computerChoice==rockSrc){
            playerScore++;
        }
        else if(playerChoice==scissorsSrc && computerChoice==rockSrc){
            compScore++;
        }
        else if(playerChoice==scissorsSrc && computerChoice==paperSrc){
            playerScore++;
        }

        scoreTeam1.textContent = playerScore
        scoreTeam2.textContent = compScore

        if(playerScore==5 || compScore==5){
            rockBtn.style.display = "none";
            paperBtn.style.display = "none";
            scissorsBtn.style.display = "none";

            gameOverDiv.style.display = "block";
            if(playerScore==5){
                gameOverMessage.textContent = "You Won the Game!"
            }
            else if(compScore==5){
                gameOverMessage.textContent = "Computer Won the Game.";
            }

            playAgainBtn.onclick = ()=>{
                location.href = "./game.html";
            }

        }
    }



// Adding event listeners to buttons
    rockBtn.onclick = () =>{
        imageTeam1.src = rockSrc
        randomize()
        updateScore()
    }

    paperBtn.onclick = () =>{
        imageTeam1.src = paperSrc
        randomize()
        updateScore()
    }

    scissorsBtn.onclick = () =>{
        imageTeam1.src = scissorsSrc
        randomize()
        updateScore()
    }









