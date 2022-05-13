//first efffect
const progressSection = document.querySelector(".sec-skills");
const progressSpan = document.querySelectorAll(".span-rate span");

//Second Effect
const statsSection = document.querySelector(".sec-stats");
const StatsParagraph = document.querySelectorAll(".stats p");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= statsSection.offsetTop - 300) {
    if (!started) {
      StatsParagraph.forEach((ele) => countDown(ele));
    }
    started = true;
  }

  if (window.scrollY >= progressSection.offsetTop - 150) {
    progressSpan.forEach((ele) => {
      ele.style.width = ele.dataset.width;
    });
  }
};

function countDown(el) {
  let goal = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 2000 / goal);
}

//Third Effect

let countDownTimer = new Date("Jan 1, 2025 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let diffDate = countDownTimer - dateNow;

  days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
  hours = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((diffDate % (1000 * 60)) / 1000);

  document.querySelector(".liOne").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".liTwo").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".liThree").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".liFour").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (diffDate < 0) {
    clearInterval(counter);
  }
}, 1000);
