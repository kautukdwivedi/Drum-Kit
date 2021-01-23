for(var i = 0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        makeSound(this.innerHTML);
        doAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    doAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case 'w':
            var sound = new Audio('sounds/tom-3.mp3');
            break;
        case 'a':
            var sound = new Audio('sounds/tom-4.mp3');
            break;
        case 's':
            var sound = new Audio('sounds/tom-1.mp3');
            break;
        case 'd':
            var sound = new Audio('sounds/tom-2.mp3');
            break;
        case 'j':
            var sound = new Audio('sounds/snare.mp3');
            break;
        case 'k':
            var sound = new Audio('sounds/crash.mp3');
            break;
        case 'l':
            var sound = new Audio('sounds/kick-bass.mp3');
            break;
        default:
            console.log(key);                
    }
    sound.play();
}

function doAnimation(buttonType){
    document.querySelector("."+ buttonType).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+ buttonType).classList.remove("pressed");  
    },110);
}