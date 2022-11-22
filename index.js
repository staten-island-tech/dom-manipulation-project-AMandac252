//console.log("connected");

//get data from info from user and save it
//make user info into an object
//push data into html
//target the form and not the button
//log the event(form) and then get the values from the form
//seperate functional functions

const DOMSelectors = {
  title: document.getElementById("title"),
  artist: document.getElementById("artist"),
  image: document.getElementById("url"),
  //buttons and form
  button: document.querySelector("btn"),
  display: document.getElementById("display"),
  form: document.querySelector("form-inputs"),
};
//query the form
//display

DOMSelectors.button.addEventListener("submit", addItems);
DOMSelectors.clearbtn.addEventListener("click", clearItems);

//additems
function addItems(event) {
  event.preventDefault();
  let inputs = document.createElement("div");

  let title = DOMSelectors.title.value;
  let img = DOMSelectors.image.value;
  let artist = DOMSelectors.url.value;

  inputs.insertAdjacentHTML(
    "beforeend",

    `<div class="display-card">
      <p class="display-album">${title}</p>
     <p class="display-img"><img> scr="${img}"</p>
      <p class ="display-artist">${artist}</p>
      <button type="button" id="remove-card"></button>
   
    </div>`
  );

  DOMSelectors.title.value = "";
  DOMSelectors.img.value = "";
  DOMSelectors.link.value = "";
}
// read the values
// create object from the values
// create and push HTML

// function clearItems() {
//   const card = document.querySelectorAll("display");
//   const remove = document.querySelectorAll("");

//   remove.forEach((card) => {});
//   function removeEventListener() {
//     remove.addEventListener("click", function () {});
//   }
// });
