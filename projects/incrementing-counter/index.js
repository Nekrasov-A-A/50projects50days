const counters = document.querySelectorAll(".counter");

const fn = (elem, max) => {
  let i = max / 100;
  elem.innerText = 0;
  let c = elem.innetText;
  const interval = setInterval(() => {
    let c = +elem.innerText;
    elem.innerHTML = (c + i).toFixed();
  }, 30);
  setTimeout(() => {
    clearInterval(interval);
  }, 3000);
};

counters.forEach((el) => {
  fn(el, el.dataset.followers);
});
