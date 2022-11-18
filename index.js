//console.log("connected");

//get data from info from user and save it
//make user info into an object
//push data into html
//target the form and not the button
//log the event(form) and then get the values from the form
//seperate functional functions

const DOMSelectors = {
  title: document.getElementsByClassName("input1"),
  image: document.getElementsByClassName("input2"),
  link: document.getElementsByClassName("input3"),
  text: document.querySelector("post"),
  button: document.querySelector("btn"),
  form: document.querySelector("form"),
  display: document.getElementById("card"),
  //query the form
  //display
};

//form function submit
DOMSelectors.form.addEventListener("submit", function additem(event) {
  event.preventDefault();
  console.log("submit");

  const title = DOMSelectors.input1.value;
  const img = DOMSelectors.input2.value;
  const link = DOMSelectors.input3.value;

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

// DOMSelectors.form.addEventListener("click",

//read the values
//create object from the values
//create and push HTML

/* <div class="display-card" id="card">
    <h2 class="card-header">${input1}</h2>
    <img src="${input2}" alt="song image" class="card-img" />
    <h3 class="card-link">${input3}</h3>

    <button type="button" id="remove-card"></button>
  </div>; */

/* const card = document.querySelectorAll(".card");
const remove = document.querySelectorAll("#removecard");

remove.forEach((card) => {});
function removeEventListener() {
  remove.addEventListener("click", function () {});
}
 */
