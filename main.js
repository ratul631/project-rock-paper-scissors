 let compScore=0;
 let playerScore=0;

 const moves= ["Rock", "Paper", "Scissors"];
  
function computerChoice (moves){
return  moves[Math.floor(Math.random()*moves.length)].toLowerCase();
}
  const playRound = (playerSelection, computerSelection)=>{
      if (playerSelection===computerSelection){
        return  `Tie! You both pick" ${playerSelection}`;
      }
      else if (playerSelection=="rock" , computerSelection=="scissors"){
        playerScore++
        return("You win Rock Crushes Scissors");
      }
    
      else if (playerSelection=="rock" , computerSelection=="paper"){
        compScore++
        return("You lose Paper cover Rock");
      }
      
      else if (playerSelection=="scissors" , computerSelection=="rock"){
        compScore++
        return("You lose Rock crushes Scissors");
      }
      
      else if (playerSelection=="scissors" , computerSelection=="paper"){
        playerScore++
        return("You win Scissors cut Paper");
      }
     
      else if (playerSelection=="paper" , computerSelection=="scissors"){
        compScore++
        return("You lose Scissors cut paper");
      }
      
      else if (playerSelection=="paper" , computerSelection=="rock"){
        playerScore++
        return("You win Paper covers Rock");
      
      }
  }
    
    function game (){

      const computerSelection=computerChoice(moves);
      
      playRound(playerSelection,computerSelection);
      
      if (playerScore>compScore){
      return  "You win! Hooray!"
      } else if (playerScore<compScore){
      return "You lose! Better Luck Next Time"}
       else {"You tied"}
  }
  game();
  const buttons=document.querySelectorAll('button');
  buttons.addEventListener("click",playRound);
  const playerSelection=document.querySelectorAll('button').value;
  console.log(playerSelection);