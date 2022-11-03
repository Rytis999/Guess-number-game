 'use strict'


 //  console.log(document.querySelector('.message').textContent)

 //  document.querySelector('.message').textContent = 'Correct Number';

 //  document.querySelector('.number').textContent = 13;
 //  document.querySelector('.score').textContent = 20;
 //  document.querySelector('.guess').value = 666;






 let number = Math.trunc(Math.random() * 20) + 1
 let score = 20;
 let highScore = 0;


 //  document.querySelector('.again').addEventListener('click', function() {
 //      if (guess === number) {
 //          document.querySelector('.number').textContent = number;
 //          document.querySelector('.score').textContent = score;
 //          document.querySelector('body').style.backgroundColor = '#222';
 //          document.querySelector('.number').style.width = '15rem';



 //      }
 //  })

 document.querySelector('.check').addEventListener('click', function() {
     const guess = Number(document.querySelector('.guess').value);

     //console.log(guess);

     if (!guess) {
         document.querySelector('.message').textContent = 'No number'
     } else if (guess === number) {
         document.querySelector('.message').textContent = 'Correct Number';
         document.querySelector('.number').textContent = number;

         document.querySelector('body').style.backgroundColor = '#60b347';
         document.querySelector('.number').style.width = '30rem';

         if (score > highScore) {
             highScore = score;
             document.querySelector('.highscore').textContent = highScore;

         }








     } else if (guess > number) {
         if (score > 1) {

             document.querySelector('.message').textContent = 'Number too high';
             score--;
             document.querySelector('.score').textContent = score;
             document.querySelector('body').style.backgroundColor = '#d13b47';
             document.querySelector('.number').style.width = '30rem';
         } else {
             document.querySelector('h1').textContent = 'You lost game'
             document.querySelector('body').style.backgroundColor = '#901aeb'
         }









     } else if (guess < number) {
         if (score > 1) {

             document.querySelector('.message').textContent = 'Number too low';
             score--;
             document.querySelector('.score').textContent = score;
             document.querySelector('body').style.backgroundColor = '#d13b47';
             document.querySelector('.number').style.width = '30rem';

         } else {
             document.querySelector('h1').textContent = 'You lost game'
             document.querySelector('body').style.backgroundColor = '#901aeb';
         }



     }

 });


 document.querySelector('.again').addEventListener('click', function() {
     score = 20;
     number = Math.trunc(Math.random() * 20) + 1;
     document.querySelector('.message').textContent = 'Start guessing ... ';
     document.querySelector('.score').textContent = score;
     document.querySelector('.number').textContent = score;
     document.querySelector('.guess').value = '';
     document.querySelector('body').style.backgroundColor = '#222';
     document.querySelector('.number').style.width = '15rem';


 })