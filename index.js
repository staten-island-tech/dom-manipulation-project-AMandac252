//console.log("connected");
// const DOMSelectors = {
//   button: document.getElementById("btn"), // getElementById looks for the id that is passed through it, in this case being "btn"
//   text: document.querySelector("#text"), // queryselectors look for elements based on parameters, being '.' or '#'
//   box: document.getElementById("big-black-box"),
//   points: document.querySelectorAll(".point"), // querySelectorAll will access multiple elements with the same class, in this case being "point"
//   null: document.getElementById("point"), // if you try to access a class with getElementById, it will result in "null"
//   empty: document.querySelector(".nothing"),
// };
//make cards -> make a function that allows the creation of cards i.e can be about albums or anythign that allows cards

// const DOMSelectors = {
//   text: document.querySelector("post"),
//   button: document.querySelector("btn"),
// };

// text.classList.add("post");
// button.addEventListener("click", function () {});

//get data from info from user and save it
//make user info into an object
//push data into html
//target the form and not the button
//log the event(form) and then get the values from the form

const DOMSelectors = {
  title: document.getElementsByClassName("input1"),
  image: document.getElementsByClassName("input2"),
  link: document.getElementsByClassName("input3"),
  text: document.querySelector("post"),
  button: document.querySelector("btn"),
};


button.addEventListener("click", function () {
    let text = document.createElement('div');
    text.classList.add("post");

    let li = document.createElement('li');
    li.innerText = 
    <div class="display-card" id="card">
    <h2 class="card-header">${input1}</h2>
    <img src="${input2}" alt="song image" class="card-img" />
    <h3 class="card-link">${input3}</h3>
  
    <button type="button" id="remove-card"></button>
  </div>;
   
});





cardElements();
removeEventListener(); 

const card = document.querySelectorAll('.card');
const remove = document.querySelectorAll('#removecard');

remove.forEach((card) => {

})
function removeEventListener() {
remove.addEventListener("click", function (){
})
} */
}
