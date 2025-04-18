// Access to the elements in my DOM
const form = document.querySelector('[data-js="form"]');
const question = document.querySelector('[data-js="user-question"]');
const answer = document.querySelector('[data-js="user-answer"]');
const tag = document.querySelector('[data-js="user-tag"]');

function createCard(dataContainer) {
  const section = document.createElement("section");
  section.classList.add("question-card");
  console.log(section);

  const h2 = document.createElement("h2");
  h2.textContent = "Your submitted question";
  console.log(h2);
  section.append(h2);

  const ul = document.createElement("ul");
  ul.classList.add("question-tags");
  console.log(ul);

  const li = document.createElement("li");
  li.textContent = dataContainer["user-tag"];
  console.log(li);
  ul.append(li);
  section.append(ul);

  const questionParagraph = document.createElement("p");
  questionParagraph.textContent = dataContainer["user-question"];
  console.log(questionParagraph);
  section.append(questionParagraph);

  const button = document.createElement("button");
  button.classList.add("answer-buttons");
  button.setAttribute("data-js", "answer-button");
  button.textContent = "show answer";
  console.log(button);
  section.append(button);

  const answerParagraph = document.createElement("p");
  answerParagraph.classList.add("answer", "hidden");
  answerParagraph.textContent = dataContainer["user-answer"];
  section.append(answerParagraph);
  console.log(answerParagraph);

  const div = document.createElement("div");
  div.classList.add("bookmark-card");
  section.append(div);
  console.log(div);

  const i = document.createElement("i");
  i.classList.add("fa-solid", "fa-bookmark");
  i.setAttribute("data-js", "bookmark-card");
  div.append(i);

  form.append(section);
}

//Create button event
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //read form content and store in an object with the name data
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  createCard(data);
});
