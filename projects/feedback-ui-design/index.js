const btns = document.querySelectorAll(".btn");
const send = document.getElementById("send");
const box = document.getElementById("box");

btns.forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    el.classList.toggle("active");
  });
});

send.addEventListener("click", () => {
  box.innerHTML = `
    <i class="fas fa-heart"></i>
    <h3>Thank You!</h3>
    <h3>Feedback: ${document.querySelector(".active").innerText}</h3>
    <h3>We'll use your feedback to improve our customer support</h3>
  `;
});
