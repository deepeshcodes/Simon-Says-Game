let gameSeq = [];
let userSeq = [];

let body = document.querySelector("body");

let btns = ["red","yellow","purple","green"];

let started = false;
let level = 0;
let highestScore = 1;

let highestScoreElement = document.getElementById("highest-score");

let h2 = document.querySelector("h2");

newGame(level,started,userSeq,gameSeq);

function newGame(){
    document.addEventListener("keypress",function(){
        if(started == false){
            console.log("game is started");
            started = true;
    
            levelUp();
        }
    });
}

function gameFlash(btn){
   btn.classList.add("gameflash");
   setTimeout(function () {
    btn.classList.remove("gameflash")
   },250);
};

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
     btn.classList.remove("userflash")
    },150);
 };

function levelUp(){
    userSeq = [];
   level++;
//    let highestScore = level;
//    highestScore++;
   h2.innerText = `Level ${level}`;
   

   let randIndx = Math.floor(Math.random() * 3);
   let randColor = btns[randIndx];
   let randBtn = document.querySelector(`.${randColor}`);

//    console.log(randIndx);
//    console.log(randColor);
//    console.log(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq);
   gameFlash(randBtn);
};

function checkAns(idx) {
    // console.log("Curr level:",level);

    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else{
        h2.innerHTML = `Game Over! Your score was <b> ${level}</b> <br> Press any key to start.`
        if(highestScore < level) {
            highestScore = level
        }
        highestScoreElement.innerText = `Highest Score = ${highestScore}`;
        //  let hS = highestScore;
        // if(level > hS){
        //     hS = level;
        // } ;
        
        body.style.backgroundColor = "red";

        setTimeout(() => {
            body.style.backgroundColor = "white";
        },150);

        reset();
    }
}

function btnPress() {
    let btn = this;
     userFlash(btn);
    //  console.log(this);

     userColor = btn.getAttribute("id");
     userSeq.push(userColor);
     checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn"); for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    
    // if(level > highestScore){
    //     highestScore =  level;
    // }
    
    // highestScore = 0;
//    let highScore = document.createElement("h1");
   
//     highScore.innerHTML = `Highest Score is ${highestScore}`;

//       highScore.classList.add("high");
    
//       let score = document.querySelector(".score");
//       score.append(highScore);

// let score = document.querySelector(".score");
// // score.classList.add(".high");
// score.innerText = `Highest score is ${hS}`;

//    if(level >highestScore) {
//     highestScore = level;
//     updateHighestScore();
//    }



let value = highestScoreElement.innerText;
let intValue = parseInt(value);

if(intValue < level){
    intValue = level;
    updateHighestScore(intValue);

}

level = 0;

newGame(level,started,userSeq,gameSeq);

}

// function updateHighestScore(intValue) {
    

//     highestScoreElement.innerText = `${intValue}`;


// }