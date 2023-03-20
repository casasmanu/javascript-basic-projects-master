/*button instances  */

const closeButton = document.querySelector(".close-btn");
const toggleButton = document.querySelector(".sidebar-toggle");
/*  element instance */
const sidebar = document.querySelector(".sidebar");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closeButton.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
