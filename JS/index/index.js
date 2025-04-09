document.addEventListener("DOMContentLoaded", () => {
  const firstCard = document.querySelector('[data-js="bookmark-card1"]');
  const bookmarkIcon = firstCard;

  bookmarkIcon.addEventListener("click", () => {
    bookmarkIcon.classList.toggle("active");
  });
});
