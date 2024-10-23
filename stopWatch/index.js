let display = document.getElementById("display");
let startButton = document.getElementById("start");
let stopButton =document.getElementById("stop");
let resetButton = document.getElementById("reset");

let interval ;
let seconds =0;

function updateDisplay(){
    let minutes = Math.floor(seconds/60);
    let secs = seconds%60;
    display.textContent = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function start(){
    if(!interval){
     interval=setInterval(()=>{
         seconds++;
         updateDisplay()
        },1000);
    }
}

function stop(){
    clearInterval(interval);
    interval=null;
}

function reset(){
    stop();
    seconds=0;
    updateDisplay();
}


startButton.addEventListener("click",start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);