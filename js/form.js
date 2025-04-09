const form = document.querySelector('[data-js="form"]');
const article = document.createElement("article");
const button = document.createElement("button");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  document.body.append(article);
  article.append(button);
});
