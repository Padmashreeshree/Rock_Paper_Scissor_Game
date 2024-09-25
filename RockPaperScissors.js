let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const myMsg=document.querySelector("#msg");

const Uscore=document.querySelector("#user-score");
const Cscore=document.querySelector("#comp-score");


const showWinner=(userWin,userChoice,compChoice)=>{
    if (userWin){
        userScore++;
        Uscore.innerText=userScore;
        console.log("you win!");
        myMsg.innerText=`You win!! your ${userChoice} beats ${compChoice}` ;
        myMsg.style.backgroundColor="green";
    }
    else{
        compScore++;
        Cscore.innerText=compScore;
        console.log("you lose!"); 
        myMsg.innerText=`You lose!! ${compChoice} beats your ${userChoice}`;
        myMsg.style.backgroundColor="red";
    }
}
const drawGame=()=>{
    console.log("Game was draw");
    myMsg.innerText="Game was draw play again.";
    myMsg.style.backgroundColor="purple"
};

const genComputerChoice=()=>{   // to generate computer choice
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3); //( it will show value till n-1..toExponential.ie 3-1 =2)
    return options[randIdx];
};

const playGame=(userChoice)=>{    //to print choices
    const compChoice=genComputerChoice(); 
   
    if (userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if (userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice)=>{  //to generate user choice
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })

})
