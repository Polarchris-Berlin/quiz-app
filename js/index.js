const bookmarkIcon = document.querySelector('[data-js="bookmark-card1"]');

const answerButton = document.querySelector('[data-js="answer-button1"]');
const answer1 = document.querySelector(".answer1");

bookmarkIcon.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("active");
});

answerButton.addEventListener("click", () => {
  answer1.classList.toggle("hidden");

  if (answer1.classList.contains("hidden")) {
    answerButton.textContent = "show answer";
  } else {
    answerButton.textContent = "hide answer";
  }
});
