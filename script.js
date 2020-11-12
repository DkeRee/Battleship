  var shipSunk = false;
  var hits = 0;
  var miss = 0;
  var answer;
  var guesses = 0;
  var guess = [];
  var location1 = Math.floor(Math.random() * 20 + 1);
  var location2 = Math.floor(Math.random() * 20 + 1);
  var location3 = Math.floor(Math.random() * 20 + 1);
  var location4 = Math.floor(Math.random() * 20 + 1);
  var location5 = Math.floor(Math.random() * 20 + 1);


function reset(){
  if(shipSunk == true){
    shipSunk = false;
    hits = 0;
      location1 = Math.floor(Math.random() * 20 + 1);
      location2 = Math.floor(Math.random() * 20 + 1);
      location3 = Math.floor(Math.random() * 20 + 1);
      location4 = Math.floor(Math.random() * 20 + 1);
      location5 = Math.floor(Math.random() * 20 + 1);
  }
}



function startPlay(){



  while(shipSunk == false){
    answer = prompt("Ready your aim and fire! Answer with a number, 1 through 20 to fire your cannon in!:");
    if(answer == null){
      break;
    }

    if(answer > 0 && answer < 21){
       guesses++;
        if(answer == guess){
        alert("Please do NOT fire in the same place that the enemy ship sunk in >:(")
        continue;
      }
     
      if(answer == location1 || answer == location2 || answer == location3 || answer == location4 || answer == location5){
        hits++;
        guess = guess + answer;
        alert("You hit a battleship! Good job!");
        if(hits == 5){
          shipSunk = true;
          alert("You sank the enemy! Nice work!");
        }
      } else {
        miss++;
        alert("You missed the battleship :(. Try again!");
      }
    } else {
      alert("Please enter a valid number.");
    }
  }

  var goodStats = "You missed " + miss + " times! You took " + guesses + " guesses to beat the game! Your accuracy is " + (5/guesses) + "! You did great! Play again by clicking on the Start button! Thanks for playing.";
  var badStats = "You missed " + miss + " times! You took " + guesses + " guesses to beat the game! Your accuracy is " + (5/guesses) + "! Better luck next time. Try again by clicking on the Start button! Thanks for playing.";

      if(guesses < 7 && guesses > 0){
      alert(goodStats);
    } else {
      alert(badStats);
    }



}





  

