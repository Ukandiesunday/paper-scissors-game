 

 //using 'object' to save  multiple values
      
      /*const score ={
        wins:0,
        losses:0,
        ties:0,
      }*/ 

      let score =  JSON.parse(localStorage.getItem('score')) ||{
        wins:0,
        losses:0,
        ties:0
        }
  
        updateScoreElement(); //get score in to <p> 
      
          let isAutoplaying = false;
          let intervalId;
  
          function autoPlay(){
            if(!isAutoplaying){
              intervalId = setInterval( () => {
            const playerMove = pickcomputerMove();
            playGame(playerMove);
            },1000);
            isAutoplaying = true;
  
            }else{
              clearInterval(intervalId);
              isAutoplaying = false;
            }
  
          }
  
        document.querySelector('.js-rock-btn').addEventListener('click', () => {
            playGame('rock');
        });
  
        document.querySelector('.js-paper-btn').addEventListener ('click', () => {
          playGame('paper');
        });
  
        document.querySelector('.js-scissors-btn').addEventListener('click', () => {
          playGame('scissors');
        });
  
        document.body.addEventListener('keydown', (event) => {
         if(event.key === 'r'){
          playGame('rock');
         }else if(event.key === 'p'){
          playGame('paper');
         }else if (event.key === 's'){
          playGame('scissors');
         }
        });
  
        function playGame(playerMove){
            const computerMove =  pickcomputerMove();
            let result = '';
          if(playerMove ==='scissors'){
          if(computerMove ==='rock'){
          result = 'You lose.';
          }else if(computerMove ==='paper'){
            result = 'You win.';
          }else if (computerMove ==='scissors'){
            result = 'Tie.';
          }
  
          }else if(playerMove ==='paper'){
            if(computerMove ==='rock'){
            result = 'You win.';
            }else if(computerMove ==='paper'){
              result = 'Tie.';
            }else if (computerMove ==='scissors'){
              result = 'You lose';
            }
  
          }else if(playerMove ==='rock'){
            if(computerMove ==='rock'){
            result = 'Tie.';
            }else if(computerMove ==='paper'){
              result = 'You win.';
            }else if (computerMove ==='scissors'){
              result = 'You lose.';
            }
          }
  
          if(result === 'You win.'){
            score.wins += 1 
          }else if(result === 'You lose.'){
            score.losses += 1
          }else if(result === 'Tie.'){
            score.ties += 1
          }
        
                /* alert(`You picked ${playerMove}. computer picked ${computerMove}. ${result}
          wins:${score.wins}, losses:${score.losses}, draws:${score.ties}`);*/
  
          localStorage.setItem('score',JSON.stringify(score));
  
          updateScoreElement();//updating score
  
          document.querySelector('.js-result')
          .innerHTML = result;
  
          document.querySelector('.js-moves').innerHTML = `You  ${playerMove} - Computer  ${computerMove}`;
  
        }
  
        function updateScoreElement(){
            document.querySelector('.js-scoreUpdate')
          .innerHTML = `wins:${score.wins}, losses:${score.losses}, ties:${score.ties}`;
        }
  
  
        function pickcomputerMove() {
  
          let computerMove = "";
  
          const randomNumber = Math.random();
          if (randomNumber >= 0 && randomNumber < 1 / 3) {
              computerMove = "rock";
            } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
              computerMove = "paper";
            } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
              computerMove = "scissors";
            }
  
            return computerMove;
        }
      