const inputs = document.querySelectorAll("input"),
  windowColor = document.querySelector(".color-mixer__window"),
  title = document.querySelector(".color-mixer__title"),
  valueInp = document.querySelectorAll(".out"),
  textInp = document.querySelectorAll(".input__text");

// ===============================

function changeColor(r, g, b) {
  let color = `rgb(${r},${g},${b})`;

  windowColor.style.background = color;
  title.style.color = color;
  textInp[0].style.color = `rgb(${r},${0},${0})`;
  textInp[1].style.color = `rgb(${0},${g},${0})`;
  textInp[2].style.color = `rgb(${0},${0},${b})`;
}
// ================================

let r = 125,
  g = 125,
  b = 125;

valueInp[0].textContent = r;
valueInp[1].textContent = g;
valueInp[2].textContent = b;

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    if (index == 0) {
      r = input.value;
      valueInp[0].textContent = input.value;
    } else if (index == 1) {
      g = input.value;
      valueInp[1].textContent = input.value;
    } else if (index == 2) {
      b = input.value;
      valueInp[2].textContent = input.value;
    }
    changeColor(r, g, b);
  });
});
