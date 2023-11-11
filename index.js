let buttons=document.querySelectorAll(".drum");
for(let button of buttons)
button.addEventListener("click",playSound);

function playSound()
{
    this.classList.add("pressed");
    let key=this.textContent;
    if(key=="w")
    new Audio("sounds/tom-1.mp3").play();
    else if(key=="a")
    new Audio("sounds/tom-2.mp3").play();
    else if(key=="s")
    new Audio("sounds/tom-3.mp3").play();
    else if(key=="d")
    new Audio("sounds/tom-4.mp3").play();
    else if(key=="j")
    new Audio("sounds/snare.mp3").play();
    else if(key=="k")
    new Audio("sounds/crash.mp3").play();
    else if(key=="l")
    new Audio("sounds/kick-bass.mp3").play();

    setTimeout(()=>{
        this.classList.remove('pressed');
    },150);
}


document.addEventListener("keypress",(e)=>{
    let key=e.key;
    document.querySelector(`.${key}`).classList.add("pressed");
    if(key=="w")
    new Audio("sounds/tom-1.mp3").play();
    else if(key=="a")
    new Audio("sounds/tom-2.mp3").play();
    else if(key=="s")
    new Audio("sounds/tom-3.mp3").play();
    else if(key=="d")
    new Audio("sounds/tom-4.mp3").play();
    else if(key=="j")
    new Audio("sounds/snare.mp3").play();
    else if(key=="k")
    new Audio("sounds/crash.mp3").play();
    else if(key=="l")
    new Audio("sounds/kick-bass.mp3").play();

    setTimeout(()=>{
        document.querySelector(`.${key}`).classList.remove('pressed');
    },150);
})