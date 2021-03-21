const emotionBtns = document.querySelectorAll(".btn");
const sendFeedback = document.getElementById("send");
const boxForGratitude = document.getElementById("box");

emotionBtns.forEach((emotion) => {
  emotion.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    emotion.classList.toggle("active");
  });
});

sendFeedback.addEventListener("click", () => {
  boxForGratitude.innerHTML = `
    <i class="fas fa-heart"></i>
    <h3>Thank You!</h3>
    <h3>Feedback: ${document.querySelector(".active").innerText}</h3>
    <h3>We'll use your feedback to improve our customer support</h3>
  `;
});
