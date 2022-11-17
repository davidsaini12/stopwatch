 var hr=0;
 var min=0;
 var sec=0;
 var count=0;
 var timer=false;

 
 
 
 function start(){
  timer=true;
  stopwatch();
}
function stop(){
  timer=false;
  stopwatch();
}
function reset(){
   timer=false;
   var hr=0;
   var min=0;
   var sec=0;
   var count=0;
   document.getElementById("hr").innerHTML="00";
   document.getElementById('min').innerHTML="00";
   document.getElementById("sec").innerHTML="00";
   document.getElementById('count').innerHTML="00";

}
function stopwatch(){
   if(timer==true){
       count++;
       if(count>99){
           sec++;
           count=0;

       }
       if(sec>59){
           min++;
           sec=0;
       }
       if(min>59){
           min=0;
           sec=0;
           hr++;
       }
       document.getElementById("hr").innerHTML=hr;
       document.getElementById('min').innerHTML=min;
       document.getElementById("sec").innerHTML=sec;
       document.getElementById('count').innerHTML=count;
       setTimeout('stopwatch()',10);
   }
}