const resultEl = document.getElementById("result");
const clipboardEl = document.getElementById("clipboard");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const mainBtn = document.getElementById("main-btn");

const getRandomLower = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getRandomUpper = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getRandomNumber = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const getRandomSymbol = () => {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
};
const obj = {
  uppercase: getRandomUpper,
  lowercase: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};
mainBtn.addEventListener("click", () => {
  let isTrue = [uppercaseEl, lowercaseEl, numberEl, symbolEl]
    .filter((e) => e.checked === true)
    .map((el) => el.id);
  let result = "";
  for (let i = 0; i < lengthEl.value; i++) {
    result += obj[isTrue[Math.floor(Math.random() * isTrue.length)]]();
  }
  resultEl.innerText = result;
});
clipboardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  document.querySelector(".success").classList.add("show");
  setTimeout(() => {
    document.querySelector(".success").classList.remove("show");
  }, 1500);
});
