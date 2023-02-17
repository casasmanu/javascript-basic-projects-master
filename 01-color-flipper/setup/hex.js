const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
//#f15025

//random color, and then change value within the color span
btn.addEventListener("click", function () {
  const randomHex = randomColor();

  document.body.style.backgroundColor = randomHex;
  color.textContent = randomHex;
});

function randomColor() {
  let hexColor = "#";
  for (var i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
    console.log(hexColor);
  }
  return hexColor;
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
