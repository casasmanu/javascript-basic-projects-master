/*

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

*/

let count = 0;

//select value and buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increment")) {
      count++;
    } else if (styles.contains("reset")) {
      count = 0;
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
