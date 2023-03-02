const increment = document.getElementById("btn-inc");
const decrement = document.getElementById("btn-dec");
const restart = document.getElementById("btn-rst");

const value = document.getElementById("value");

increment.addEventListener("click", function () {
  //value++;
  value.textContent++;
  value.style.color = "Green";
});

decrement.addEventListener("click", function () {
  // value--;
  value.textContent--;
  value.style.color = "rED";
});

restart.addEventListener("click", function () {
  //value = 0;
  value.textContent = 0;
});
