// Audio files

let tom1 = new Audio("./sounds/tom-1.mp3");
let tom2 = new Audio("./sounds/tom-2.mp3");
let tom3 = new Audio("./sounds/tom-3.mp3");
let tom4 = new Audio("./sounds/tom-4.mp3");
let crash = new Audio("./sounds/crash.mp3");
let kick_bass = new Audio("./sounds/kick-bass.mp3");
let snare = new Audio("./sounds/snare.mp3");

// Buttons
const btns = document.querySelectorAll(".drum");

// Buttons Event Listner 
for(let i= 0;i< btns.length; i++){
    btns[i].addEventListener("click", function(){
        var btnKey = this.innerHTML;
        makeSound(btnKey);
        makeAnimation(btnKey);
    })
}
// Keys Event Listener
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    makeAnimation(event.key)
})

// Play Sound 
function makeSound(key){
    switch (key) {
        case "w":
            tom1.play();
            break;
        case "a":
            tom2.play();
            break;
        case "s":
            tom3.play();
            break;
        case "d":
            tom4.play();
            break;
        case "j":
            crash.play();
            break;
        case "k":
            kick_bass.play();
            break;
        case "l":
            snare.play();
            break; 
    }
}

// Add Animation
function makeAnimation(key){
    let currentKey= document.querySelector("." + key);
    currentKey.classList.add("pressed");
    setTimeout(function(){currentKey.classList.remove("pressed")},50);
}