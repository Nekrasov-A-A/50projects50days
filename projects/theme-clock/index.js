const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const dateNow = document.getElementById("date");
const hoursEl = document.getElementById("hours");
const secondsEl = document.getElementById("seconds");
const minutesEl = document.getElementById("minutes");
const toggleTheme = document.getElementById("btn");
const mainTheme = document.getElementById("theme");

const getValue = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const ticTic = () => {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hour = time.getHours();
  const hourForClock = hour % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hour > 12 ? "pm" : "am";

  hoursEl.style.transform = `translate(-50%, -100%) rotate(${getValue(
    hourForClock,
    0,
    11,
    0,
    360
  )}deg)`;
  secondsEl.style.transform = `translate(-50%, -100%) rotate(${getValue(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;
  minutesEl.style.transform = `translate(-50%, -100%) rotate(${getValue(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;

  dateNow.innerHTML = `
    <div class='big-text'>${hourForClock}:${
    minutes < 10 ? "0" + minutes : minutes
  } ${ampm.toUpperCase()}</div>
    <div class='small-text'>${days[day].toUpperCase()}, ${months[
    month
  ].toUpperCase()} <span class='date-circle'>${date}</span></div>
`;
};
ticTic();
setInterval(ticTic, 1000);

toggleTheme.addEventListener("click", () => {
  toggleTheme.innerHTML === "Light Mode"
    ? (toggleTheme.innerHTML = "Dark Mode")
    : (toggleTheme.innerHTML = "Light Mode");
  mainTheme.classList.toggle("light");
});
