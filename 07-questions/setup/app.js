//using selectors inside the element
// traversing the dom
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  /* within here the question will be unique and the one I clicked, 
I compare that question with the rest of items and if there is one
different, I remove the show-text, i could also only check if
they have the show text and remove it, and then toggle the class
to my question */
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
        // console.log(item);
      }
    });
    question.classList.toggle("show-text");
  });
});

/* 
const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
});
 */
