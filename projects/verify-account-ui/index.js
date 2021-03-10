const codes = document.querySelectorAll(".code");
codes[0].focus();
codes.forEach((el, idx) => {
  el.addEventListener("keydown", (ev) => {
    if (ev.key >= 0 && ev.key <= 9) {
      codes[idx].value = "";
      if (idx !== codes.length - 1) {
        setTimeout(() => codes[idx + 1].focus(), 10);
      }
    } else if (ev.key === "Backspace" && idx !== 0) {
      setTimeout(() => codes[idx - 1].focus(), 10);
    }
  });
});
