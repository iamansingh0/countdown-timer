const de1 = document.getElementById('days');
const he = document.getElementById('hours');
const me = document.getElementById('mins');
const se = document.getElementById('secs');

const newYears = "30 March 2022";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    de1.innerHTML = days;
    he.innerHTML = formatTime(hours);
    me.innerHTML = formatTime(mins);
    se.innerHTML = formatTime(seconds);
    console.log(days, hours, mins, seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();
setInterval(countdown, 1000);