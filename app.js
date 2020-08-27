
//console.log("hi");

const game=()=>{
    let pScore=0;
    let cScore=0;


const startGame=()=>{

const playbtn=document.querySelector('.intro button');
const introscreen=document.querySelector('.intro');
const match=document.querySelector('.match');

playbtn.addEventListener("click",()=>{
  introscreen.classList.add('fadeOut');
  match.classList.add('fadeIn');
});

};

const playMatch=()=>{
    const options=document.querySelectorAll('.options button');
    const playhand=document.querySelector('.player-hand');
    const computerhand=document.querySelector('.computer-hand');
    const hands=document.querySelectorAll(".hands img");
    hands.forEach(hand=>{

        hand.addEventListener('animationend',function(){

            this.style.animation="";
        });
    });


    const computerOptions=["rock","paper","scissors"];
    options.forEach(option=>{
        option.addEventListener("click",function(){
            const computernumber=Math.floor(Math.random()*3);
            const computerchoise=computerOptions[computernumber];

            setTimeout(()=>{
                compareHands(this.textContent,computerchoise);
                //console.log(computerchoise);  
                playhand.src = `./photo/${this.textContent}.png`;
                computerhand.src=`./photo/${computerchoise}.png`;
             


            },2000);

           
            playhand.style.animation="shakePlayer 2s ease";
            computerhand.style.animation="shakeComputer 2s ease"


        });

    });

};

const updatescore=()=>{
    const playerScore=document.querySelector(".player-score p");
    const computerScore=document.querySelector(".computer-score p");
    playerScore.textContent=pScore;
    computerScore.textContent=cScore;

}

const compareHands=(playerChoice,computerchoise)=>{
    const winner=document.querySelector('.winner');
    if(playerChoice===computerchoise){
        winner.textContent="It is a tie";
        return;
    }
    if(playerChoice==='rock'){
        if(computerchoise==='scissors'){
            winner.textContent='Player Wins';
            pScore++;
            updatescore();
            return;

        }else{
            winner.textContent='Computer Wins';
            cScore++;
            updatescore();
            return;
        }
    }

if(playerChoice==='paper'){
    if(computerchoise==='scissors'){
        winner.textContent='Computer Wins';
        cScore++;
        updatescore();
        return;

    }else{
        winner.textContent='Player wins';
        pScore++;
        updatescore();
        return;
    }
}


if(playerChoice==='scissors'){
    if(computerchoise==='rock'){
        winner.textContent='Computer Wins';
        cScore++;
        updatescore();
        return;

    }else{
        winner.textContent='Player Wins';
        pScore++;
        updatescore();
        return;
    }
}

}

startGame();
playMatch();

};
game();