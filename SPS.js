
  function computerPlay(){
    options = ['stone','paper','scissor'];
    var x = options[Math.floor(Math.random()*3)];
    return x;}


//playRound

function playRound(playerSelection, computerSelection) {
	if (playerSelection==computerSelection) {
    return("DRAW!");

  }
  else if(
  (playerSelection=='stone'&&computerSelection=='scissor')||
  (playerSelection=='scissor'&&computerSelection=='paper')||
  ( playerSelection=='paper'&&computerSelection=='stone'))
  return 'Win!';
  else return 'Loose!';

}
var playerScore = 0;
var computerScore = 0 ;
var ps = document.getElementById('playerScore');
var cs = document.getElementById('computerScore');
//scissor
var scissor = document.getElementById('scissor');
scissor.onclick = function()
{

  var computerChoice = computerPlay();
var a =   playRound('scissor',computerChoice);

var result = document.getElementById('result');
if (a ==='DRAW!')
{
   result.innerHTML = 'DRAW';
}
else if (a=='Win!') {
   result.innerHTML = 'You win';
    ps.innerHTML = `Player score: ${++playerScore}`;

}else {
  result.innerHTML = 'You lost';
  cs.innerHTML = `Computer score: ${++computerScore}`;
}
if(playerScore==5 || computerScore==5)
 {

               if (confirm("Do you want to play again?") == true) {
                 location.reload();
               } else {
                 window.close();
               }

 }
}
//paper
var paper = document.getElementById('paper');
paper.onclick = function()
{  var computerChoice = computerPlay();
var a =   playRound('paper',computerChoice);

var result = document.getElementById('result');
if (a ==='DRAW!')
{
   result.innerHTML = 'DRAW';
}
else if (a=='Win!') {
   result.innerHTML = 'You win';
    ps.innerHTML = `Player score: ${++playerScore}`;

}else {
  result.innerHTML = 'You lost';
  cs.innerHTML = `Computer score: ${++computerScore}`;
}
if(playerScore==5 || computerScore==5)
 {
   var x;
               if (confirm("Do you want to play again?") == true) {
                 location.reload();
               } else {
                 window.close();
               }


 }
}

//STONE
var stone = document.getElementById('stone');
stone.onclick = function()
{  var computerChoice = computerPlay();
var a =   playRound('stone',computerChoice);

var result = document.getElementById('result');
if (a ==='DRAW!')
{
   result.innerHTML = 'DRAW';
}
else if (a=='Win!') {
   result.innerHTML = 'You win';
    ps.innerHTML = `Player score: ${++playerScore}`;

}else {
  result.innerHTML = 'You lost';
  cs.innerHTML = `Computer score: ${++computerScore}`;
}
 if(playerScore==5 || computerScore==5)
  {

                if (confirm("Do you want to play again?") == true) {
                  location.reload();
                } else {
                  window.close();
                }


  }

}
