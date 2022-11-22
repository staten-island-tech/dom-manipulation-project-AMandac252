//console.log("connected");

const DOMselectors = {
  title: document.getElementById("title"),
  artist: document.getElementById("artist"),
  image: document.getElementById("url"),
  //buttons and form
  button: document.querySelector("btn"),
  display: document.getElementById("display"),
  form: document.querySelector("form-inputs"),
};

DOMselectors.form.addEventListener("click", addItems);
DOMselectors.clearBtn.addEventListener("click", clearItems);

//additems
function addItems(event) {
  event.preventDefault();

  const title = DOMselectors.title.value;
  const img = DOMselectors.image.value;
  const artist = DOMselectors.url.value;

  DOMselectors.display.insertAdjacentHTML(
    "beforeend",

    `<div class="display-card">
        <p class="display-album">${title}</p>
       <p class="display-img"><img> scr="${img}"</p>
        <p class ="display-artist">${artist}</p>
        <button type="button" id="remove-card">x</button>
     
      </div>`
  );
  DOMselectors.title.value = "";
  DOMselectors.img.value = "";
  DOMselectors.link.value = "";
}

const card = document.querySelectorAll("display-card");
const remove = document.querySelectorAll("#removecard");

// remove.forEach((card) => {});
// function removeEventListener() {
//   remove.addEventListener("click", function () {});
