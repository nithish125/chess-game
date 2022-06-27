var tens=01;
var seconds=05;
var min=05;
var secv=01;
var check=true;
var outputsec=document.getElementById("secv")
var outputmin=document.getElementById("min")
var swap= document.getElementById("swap")
var outputtens=document.getElementById("tens")
var outputseconds=document.getElementById("seconds")
var z=document.getElementById("player2")
var start=document.getElementById("start")
var reset=document.getElementById("reset") 
var interval;
start.addEventListener("click",startfun)
swap.addEventListener("click",swapfun);
reset.addEventListener("click",resetfun);
function startfun(){
  clearInterval(interval);
  interval=setInterval(starttimes,1000);
  console.log(tens)
  start.disabled=true;  
  }
 function swapfun(){
  clearInterval(interval);
  if (check==true){
  interval=setInterval(starttimes1,1000);
  check=false;
  }
  else{
    interval=setInterval(starttimes,1000);
    check=true;
  }
}
function stop(){
  clearInterval(interval);
}
function resetfun(){
 min="05";
 secv="00";
 tens="00"; 
  seconds="05";
  c=2;
  start.disabled=false;
clearInterval(interval);
outputsec.innerHTML=secv;
outputmin.innerHTML=min;
outputseconds.innerHTML=seconds;
outputtens.innerHTML=tens;
}
function starttimes(){
  tens--;
  if(tens>0){
    outputtens.innerHTML=tens;
  }
  if(tens<9)
  {
    outputtens.innerHTML="0"+tens;
  }
  if(tens<0){
    seconds=seconds-1;
    outputseconds.innerHTML="0"+seconds;
    tens=59;
    outputtens.innerHTML=tens;
  }
  
  if( tens==1){
    if(seconds<0){
  clearInterval(interval);
    }
  }
}
function starttimes1(){
  
  secv--;
  if(secv>0){
   outputsec.innerHTML=secv;
  }
  if(secv<0){
    min=min-1;
    outputmin.innerHTML="0"+min;
    secv=59;
    outputsec.innerHTML=secv;
   
  }
  if(secv<9){
    
    outputsec.innerHTML="0"+secv;
  }
  if(min<0){
    clearInterval(interval);
  }
}
//btn1.addEventListener("click",function(){ 
 
  /// document.getElementById("player1").innerHTML="reset";
    //document.btn1.style.backgroundcolor="red"
// })
 
  
/* reset.addEventListener("click",function(){ 
  var player1=document.innerHTML = new Date("Jan 5, 2024 11:53:00").getTime();
  })
  start.addEventListener("click",function(){
    const startingmin=5;
    let time=startingmin*60;
    const startl=document.getElementById("start");

    start.addEventListener("click",function(){
    // Update the count down every 1 second
    
      player1=document.getElementById .innerHTMl="m";
      
      time--;
    })
    }, 1000);
    
  







// Set the date we're counting down to*/


  
