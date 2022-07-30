// Grabbing all query
const milliseconds = document.querySelector(".millisecs");
const seconds = document.querySelector(".secs");
const minutes = document.querySelector(".mints");
const hours = document.querySelector(".hours");

const startButton = document.querySelector("[data-action = 'start']");
const stopButton = document.querySelector("[data-action = 'stop']");
const resetButton = document.querySelector("[data-action = 'reset']");

let [numofMilliseconds, numofSeconds, numofMinutes, numofHours] = [0,0,0,0];
let stopper;

let isRunning  = false;

// functions

function timerCycle() {
  // whenever this function will run after interval
  // of 10 ms, the number of millisecnds would have increased
  // by 10
  numofMilliseconds+=10;

  if(numofMilliseconds == 1000){
    numofMilliseconds = 0;
    numofSeconds++;

    if(numofSeconds == 60){
      numofSeconds = 0;
      numofMinutes++;

      if(numofMinutes == 60){
        numofMinutes = 0;
        numofHours++;
      }
    }
  }

   
  milliseconds.innerText = addZeroMS(numofMilliseconds);
  minutes.innerText = addZero(numofMinutes);
  seconds.innerText = addZero(numofSeconds);
  hours.innerText = addZero(numofHours);
}

function startTimer() {
  if (isRunning) return; //prevents the start button from setting more intervals when clicked more than once

  isRunning = true;
  
  
  stopper = setInterval(timerCycle, 10);  // this method calls
  // function at specified intervals(in milliseconds)
}

function stopTimer() {
  if (!isRunning) return;

  isRunning = false;
  clearInterval(stopper);  // this function stop the execution
  // of setInterval
}

function resetTimer() {
  stopTimer();

  // timerInterval = 0; //sets timer to start from zero after reset

  [numofMilliseconds, numofSeconds, numofMinutes, numofHours] = [0,0,0,0];


  minutes.innerText = "00";
  seconds.innerText = "00";
  hours.innerText = "00";
  milliseconds.innerText = "00";
}

function addZeroMS(number) {
  if(number < 10) 
    number = "00" +number;
  else if(number >=10 && number<100)
    number = "0" + number;
  return number;
}

function addZero(number) {
  return number < 10 ? "0" + number : number;
}
//add event listeners
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
