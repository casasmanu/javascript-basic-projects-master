// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const buttonClose = document.querySelector(".close-btn");
const buttonModule = document.querySelector(".modal-btn");
const module = document.querySelector(".modal-overlay");

buttonModule.addEventListener("click", () => {
  //   console.log(module.classList);
  module.classList.add("open-modal");
});

buttonClose.addEventListener("click", () => {
  module.classList.remove("open-modal");
});
