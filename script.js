
const newYears = "1 jan 2022";

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function countdown() {
    const newyearsdate = new Date(newYears);
    const currentdate = new Date();

    const totalsecond = (newyearsdate-currentdate)/1000;
    const days = Math.floor(totalsecond / 3600 / 24);
    const hours = Math.floor(totalsecond / 3600) % 24;
    const minutes = Math.floor(totalsecond / 60) % 60;
    const seconds = Math.floor(totalsecond)%60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

countdown();
setInterval(countdown, 1000);