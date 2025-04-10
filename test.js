// Access to the elements in my DOM
const form = document.querySelector('[data-js="form"]');
const question = document.querySelector('[data-js="user-question"]');
const answer = document.querySelector('[data-js="user-answer"]');
const tag = document.querySelector('[data-js="user-tag"]');

function createCard(dataContainer) {
  const section = document.createElement("section");
  section.setAttribute("class", "question-card");
  console.log(section);

  const h2 = document.createElement("h2");
  h2.textContent = "Your submitted question";
  console.log(h2);
  section.append(h2);
  console.log(section);

  const ul = document.createElement("ul");
  ul.setAttribute("class", "question-tags");
  console.log(ul);

  const li = document.createElement("li");
  li.textContent = dataContainer["user-tag"];
  console.log(li);
  ul.append(li);
  section.append(ul);

  const p = document.createElement("p");
  p.textContent = dataContainer["user-question"];
  console.log(p);

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

//submit input into new card element
