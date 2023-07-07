// home
let home = document.getElementById("home")
let homeaddOne = document.getElementById("homeaddOne")
let homeScore = 0   
let period = document.getElementById("period")
let periodScore = 0


homeaddOne.addEventListener('click', function(){
    if(periodScore === 0){
    period.textContent = 0
    }  
    else {
   let result = homeScore += 1
    home.innerHTML = result
}})  

// guest   
let guest = document.getElementById("guest")
let guestaddOne = document.getElementById("guestaddOne")
let guestScore = 0   
 
 guestaddOne.addEventListener('click', function (){
    if(periodScore === 0){
    period.textContent = 0
    }  
    else {
   let result = guestScore += 1
    guest.innerHTML = result
}})   



// controls
 
 
 function newGame() {
  if(periodScore === 0){
    periodScore++
    period.textContent = periodScore
    }
    
    else {
      setTimeout(function(){
    location.reload();
}, 500);
     }
 }
 
 
 function endPeriod(){
     if(periodScore === 0){
    periodScore++
    period.textContent = periodScore
    }
    
    else if (periodScore === 1){
    periodScore++
    period.textContent = periodScore
    }
    
    else {
      setTimeout(function(){
    location.reload();
}, 500);
     }
 }
 
 
