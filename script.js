"use strict";


// ! check button

let NU = Math.trunc( Math.random()*20)+1;
console.log(NU);
let sCore = 20;
let highscore = 0;


// const messagefunction = function (mess){
//      document.querySelector('.message').textContent =
// }






document.querySelector('.check').addEventListener('click', function(){
    const gg = Number (document.querySelector('.guess').value);
    
    if (sCore > 1){

        if (gg !== NU){
            document.querySelector('.message').textContent = gg > NU ? "Number is too high" : "Number is too low";
            sCore --;
            document.querySelector('.score').textContent=sCore
        }
   
        else if(gg === NU){
            document.querySelector('.message').textContent="Number is correct";
            document.querySelector('.number').textContent = NU;
            document.querySelector('body').style.backgroundColor = ' #60b347';
            document.querySelector('.number').style.width = '30 rem';
            
            if ( sCore >= highscore){
                highscore = sCore ;
                document.querySelector('.highscore').textContent= highscore;

            }


        }
    } 

    
    else{
        document.querySelector('.message').textContent="You loose the hame";
        document.querySelector('.score').textContent= 0;
    }
      
      
})



// ! again button

document.querySelector('.again').addEventListener('click', function () {
    NU = Math.trunc( Math.random()*20)+1;
    console.log(NU);
     sCore = 20;
     document.querySelector('.score').textContent = sCore;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').style.width = '15 rem';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '' ;

})

