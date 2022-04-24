const adviceIdDom = document.querySelector(".advice__id");
const adviceTextDom = document.querySelector(".advice__text");
let button;

document.querySelector("button").onclick = function () {
  button = this;
  this.classList.add("roll");
  setTimeout(function () {
    roll(button);
  }, 1000);
  $.getJSON("https://api.adviceslip.com/advice", function (data) {
    adviceIdDom.textContent = data.slip.id;
    adviceTextDom.textContent = data.slip.advice;
  });
};
function roll(params) {
  console.log(params);
  params.classList.remove("roll");
}
