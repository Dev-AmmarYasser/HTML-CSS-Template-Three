let nums = document.querySelectorAll(".stats .number");

let statsSection = document.querySelector(".stats");

let started = false;

window.onscroll = function () {
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};
function startCount(el) {
  let goal = el.dataset.goal;

  let count = setInterval(() => {
    el.textContent++;

    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

//

let section = document.querySelector(".skills");

let spans = document.querySelectorAll(".skill-prog span");

let done = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 300) {
    if (!done) {
      fillSpan(spans);
    }
    done = true;
  }
};

function fillSpan(spans) {
  spans.forEach((span) => {
    span.style.width = `${span.dataset.width}`;
  });
}

//

let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);

  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));

  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days .timer").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector(".hours .timer").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes .timer").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds .timer").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
