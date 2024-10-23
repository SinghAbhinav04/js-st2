let displayTime = document.getElementById("display");
let sessionTimeDisplay = document.getElementById("session-time-display");
let breakTimeDisplay =  document.getElementById("break-time-display");
let session = document.getElementById("session");

let interval ;
let seconds =0;
let sessionTimeCounter =5;
let breakTimeCounter=5;
let breakTimeSeconds= breakTimeCounter*60;
let sessionNumber=1;
let isBreak = false;

function handleBreak(){

}

function updateSession(){
    console.log(breakTimeSeconds);
    if(isBreak){
        let breakTimeMinutes = Math.floor(breakTimeSeconds/60);
        let breakTimeSecs = breakTimeSeconds%60;
        displayTime.textContent=`${String(breakTimeMinutes).padStart(2,'0')}:${String(breakTimeSecs).padStart(2,'0')}`;
        session.textContent="Break!!";
        if(breakTimeSeconds==0) {
            isBreak=false;
            sessionNumber++;
            session.textContent = `Session ${sessionNumber}`
            seconds=0;
            start();
        }
    }

}

function updateDisplay(){
    let minutes = Math.floor(seconds/60);

    if(minutes != sessionTimeCounter) {
        let secs = seconds % 60
        displayTime.textContent = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    else{
        isBreak=true;
    }
}

function increaseSessionTime(){
   sessionTimeCounter++;
   sessionTimeDisplay.textContent=`${String(sessionTimeCounter).padStart(2,'0')} Min`;
}
function decreaseSessionTime(){
    if(sessionTimeCounter >0) {
        sessionTimeCounter--;
        breakTimeSeconds= breakTimeCounter*60;

        sessionTimeDisplay.textContent = `${String(sessionTimeCounter).padStart(2, '0')} Min`;
    }else {
        sessionTimeCounter=0;
        sessionTimeDisplay.textContent = `${String(sessionTimeCounter).padStart(2, '0')} Min`;
    }
}

function increaseBreakTime(){
    breakTimeCounter++;
     breakTimeSeconds= breakTimeCounter*60;

    breakTimeDisplay.textContent=`${String(breakTimeCounter).padStart(2,'0')} Min`;
}

function decreaseBreakTime(){
    if(breakTimeCounter>0) {
        breakTimeCounter--;
        breakTimeDisplay.textContent = `${String(breakTimeCounter).padStart(2, '0')} Min`;
    }else{
        breakTimeCounter=0;
        breakTimeDisplay.textContent = `${String(breakTimeCounter).padStart(2, '0')} Min`;
    }
}


function start(){
    if(!interval){
        interval = setInterval(()=>{
            if(!isBreak) {
                seconds++;
                updateDisplay();
            }else{
                breakTimeSeconds--;
                updateSession();
            }
        },1000);
    }
}
start();

function pause(){
    clearInterval(interval);
    interval=null;
}

function reset(){
    pause();
    seconds=0;
    updateDisplay();
    start();
}
