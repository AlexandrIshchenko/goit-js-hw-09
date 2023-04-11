import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const input = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");

const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");

const TIMER_DELAY = 1000;
let intervalId = null

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    const currentDate = new Date();

    if (selectedDates[0] - currentDate > 0) {
        startBtn.disabled = false;

        } else {
            startBtn.disabled = true;

            Notify.warning("Please choose a date in the future",
            {
                timeout: 5000,
                width: "500px",
                fontSize: "25px",
                position: "center-center"
            },);
        }
    },
};

const dates = flatpickr(input, options);

function startTimer() {

    const selectedDate = dates.selectedDates[0];

    intervalId = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = selectedDate - currentTime;
        const time = convertMs(deltaTime);
        startBtn.disabled = true;

        updateTimer(time);

        if (deltaTime < 0) {

        clearInterval(intervalId);

        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        }

    }, TIMER_DELAY);
}

startBtn.addEventListener("click", () => {
    startTimer();
});

function updateTimer(data) {
    days.textContent = `${data.days}`;
    hours.textContent = `${data.hours}`;
    minutes.textContent = `${data.minutes}`;
    seconds.textContent = `${data.seconds}`;
};

function addLeadingZero(value) {
    return String(value).padStart(2, "0");
};

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
};