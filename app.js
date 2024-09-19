let minute;
let second = 60;
let millisecond = 1000;

let timeMinute = document.getElementById("minute");
let timeSecond = document.getElementById("second");
let timeMilli = document.getElementById("millisecond");

let startButton = document.getElementById("start");
let resetButton = document.getElementById("reset");
let pauseButton = document.getElementById("pause");

let input = document.getElementById("time").value

pauseButton.disabled = true;
resetButton.disabled = true;

let interval;

function startTimer() {
    startButton.disabled = true;
    pauseButton.disabled = false;
    resetButton.disabled = false;
    millisecond--;
    timeMinute.innerHTML = minute-1
    timeMilli.innerHTML = millisecond;
    if (millisecond == 0) {
        millisecond = 999;
        second--;
        if (second >= 0) {
            timeSecond.innerHTML = second;
        }
    }
    if (second == 0 && millisecond == 999) {
        minute--;
        timeMinute.innerHTML = minute;
        second = 59;
    }
    if (minute == 0 && second == 0 && millisecond == 0) {
        pauseWatch();
        alert("Timer is Over");
    }
}

function startWatch() {
    interval = setInterval(startTimer, 1);
}

function pauseWatch() {
    clearInterval(interval);
}

function resetWatch() {
    minute = 0;
    second = 0;
    millisecond = 0;
    timeMilli.innerHTML = "000";
    timeSecond.innerHTML = "00";
    timeMinute.innerHTML = "00";
    pauseWatch();
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = true;
}

function inputTime(time) {
    console.log(time);
    minute = time;
    timeMinute.innerHTML = minute;
    timeSecond.innerHTML = second;
    timeMilli.innerHTML = millisecond;
    document.getElementById("time").value = ""
    startWatch();
}