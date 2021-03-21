const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const selections = document.querySelectorAll("input");
let idx = 0;
const questionBox = document.getElementById("question");
const submitBtn = document.getElementById("btn");
let userResults = [];
let userChoise = "";
const container = document.querySelector(".container");
const containerTotal = document.querySelector(".container-total");

function* generateOption() {
  for (let i = 0; ; ) {
    yield quizData[idx].a;
    yield quizData[idx].b;
    yield quizData[idx].c;
    yield quizData[idx].d;
  }
}
let generator = generateOption();

selections.forEach((el) => {
  el.addEventListener("click", (ev) => {
    selections.forEach((e) => (e.checked = false));
    ev.currentTarget.checked = true;
    userChoise = ev.currentTarget;
  });
});

const setQuestion = () => {
  questionBox.innerText = quizData[idx].question;
  selections.forEach(
    (el) => (el.nextElementSibling.innerText = generator.next().value)
  );
  idx++;
  if (idx >= quizData.length) {
    idx = 0;
  }
};
setQuestion();

submitBtn.addEventListener("click", () => {
  if (userChoise) {
    setQuestion();
    selections.forEach((e) => (e.checked = false));
    userResults.push(userChoise.id);
    userChoise = "";
    if (userResults.length === quizData.length) {
      containerTotal.innerHTML = `
         <h3>You answered ${
           userResults.filter((el, idx) => el === quizData[idx].correct).length
         }/${quizData.length}questions correctly</h3>
         <button class='btn' id='reload'>Try again!</button>
      `;
      containerTotal.querySelector("#reload").addEventListener("click", () => {
        containerTotal.classList.toggle("hidden");
        container.classList.toggle("hidden");
      });
      userResults = [];
      containerTotal.classList.toggle("hidden");
      container.classList.toggle("hidden");
    }
  }
});
