//Prints out the same time every second
let d = new Date();
let time = d.toLocaleTimeString();
setInterval(function(){console.log(time)}, 1000);

//Prints out the updated time every second 
function secondTimer(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time)
  }
  
  setInterval(secondTimer, 1000);