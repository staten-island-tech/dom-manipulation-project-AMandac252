//console.log("connected");

//get data from info from user and save it
//make user info into an object
//push data into html
//target the form and not the button
//log the event(form) and then get the values from the form
//seperate functional functions

const DOMSelectors = {
  title: document.getElementById("title"),
  image: document.getElementById("image"),
  link: document.getElementById("link"),
  text: document.querySelector("post"),
  button: document.querySelector("btn"),
  form: document.querySelector("form"),
  display: document.getElementById("card"),
  //query the form
  //display
};

DOMSelectors.form.addEventListener("submit", function additem(event) {
  event.preventDefault();
  console.log("submit");

  let title = DOMSelectors.title.value;
  let img = DOMSelectors.image.value;
  let link = DOMSelectors.link.value;

  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",

    `<div class="display-card">
    <h2 class="card-header">${title}</h2>
    <p><img src=${img} class="card-img" /></p>
    <h3 class="card-link">${link}</h3>
    <button type="button" id="remove-card"></button>
 
  </div>`
  );
  DOMSelectors.title.value = "";
  DOMSelectors.img.value = "";
  DOMSelectors.link.value = "";
});

// read the values
// create object from the values
// create and push HTML

DOMSelectors.form.addEventListener("click", function removecard(event) {
  event.preventDefault();
  const card = document.querySelectorAll(".post");
  const remove = document.querySelectorAll("#removecard");

  remove.forEach((card) => {});
  function removeEventListener() {
    remove.addEventListener("click", function () {});
  }
});
