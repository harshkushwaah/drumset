//detecting the button press

document.querySelector(".w").addEventListener("click", function(){
   var audio = new Audio("sounds/tom-1.mp3");
   audio.play();
;
});

document.querySelector(".a").addEventListener("click", function(){
   var audio = new Audio("sounds/tom-2.mp3");
   audio.play();
});

document.querySelector(".s").addEventListener("click", function(){
   var audio = new Audio("sounds/tom-3.mp3");
   audio.play();
});

document.querySelector(".d").addEventListener("click", function(){
   var audio = new Audio("sounds/tom-4.mp3");
   audio.play();
});

document.querySelector(".j").addEventListener("click", function(){
   var audio = new Audio("sounds/crash.mp3");
   audio.play();
});

document.querySelector(".k").addEventListener("click", function(){
   var audio = new Audio("sounds/snare.mp3");
   audio.play();
});

document.querySelector(".l").addEventListener("click", function(){
   var audio = new Audio("sounds/kick-bass.mp3");
   audio.play();
});



//detecting the key press


document.addEventListener("keypress", function(event){
 makesound(event.key);
});

function makesound(key){
   switch (key) {
      case "w":
         var tom1 = new Audio("sounds/tom-1.mp3");
       tom1.play();
         break;
         case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
            case "a":
               var tom2 = new Audio("sounds/tom-2.mp3");
               tom2.play();
            break;
            case "s":
               var tom3 = new Audio("sounds/tom-3.mp3");
               tom3.play();
         break;
         case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
         break;
         case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
         break;
         case "k":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
         break;
      default:
         
      
   }
}