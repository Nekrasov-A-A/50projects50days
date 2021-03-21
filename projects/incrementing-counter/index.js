const counters = document.querySelectorAll(".counter");

const startCountingDown = (counter, max) => {
  let i = max / 100;
  counter.innerText = 0;
  const intervalId = setInterval(() => {
    let c = +counter.innerText;
    counter.innerHTML = (c + i).toFixed();
  }, 30);
  setTimeout(() => {
    clearInterval(intervalId);
  }, 3000);
};

counters.forEach((counter) => {
  startCountingDown(counter, counter.dataset.followers);
});
