const buttons = document.getElementById("buttons")
var noisey = document.getElementById("sounds")
var score = 0
var scoreText

buttons.addEventListener("click",()=>{
   var randomNumber = Math.floor(Math.random() * 6) + 1
   var dimages = "dice/"+randomNumber +".png"
   document.querySelector(".piccy").setAttribute('src', dimages)
   score += randomNumber;
   document.querySelector("h3").innerHTML = score
   
      if (randomNumber == 1){ 
         document.querySelector("h1").innerHTML = "You Rolled a One You Lose"
         score = 0
         document.querySelector("h3").innerHTML = "Zero"
     } else if (score > 20){ 
         score = 0
          document.querySelector("h1").innerHTML = "You Rolled More Than Twenty You Win"
     } else{
      document.querySelector("h1").innerHTML = "       "
     }
})
   
