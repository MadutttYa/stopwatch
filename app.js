let hr = (min = sec = ms = "0" + 0),
  startTimer;

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

startBtn.addEventListener("click", start, true);
stopBtn.addEventListener("click", stop, true);
resetBtn.addEventListener("click", reset, true);

function start() {
  startBtn.classList.add("active");
  stopBtn.classList.remove("stopActive");
  startTimer = setInterval(() => {
    ms++;
    ms = ms < 10 ? "0" + ms : ms;
    if (ms == 100) {
      sec++;
      ms = "0" + 0;
      sec = sec < 10 ? "0" + sec : sec;
    }
    if (sec == 60) {
      min++;
      sec = "0" + 0;
      min = min < 10 ? "0" + min : min;
    }
    if (min == 60) {
      hr++;
      min = "0" + 0;
      hr = hr < 10 ? "0" + hr : hr;
    }
    putVal();
  }, 10);
}
function stop() {
  startBtn.classList.remove("active");
  stopBtn.classList.add("stopActive");
  clearInterval(startTimer);
}
function reset() {
  startBtn.classList.remove("active");
  stopBtn.classList.remove("stopActive");
  clearInterval(startTimer);
  hr = min = sec = ms = "0" + 0;
  putVal();
}

function putVal() {
  document.querySelector(".miliseconds").innerText = ms;
  document.querySelector(".seconds").innerText = sec;
  document.querySelector(".minute").innerText = min;
  document.querySelector(".hour").innerText = hr;
}
