//console.log("connected");

const DOMselectors = {
  title: document.querySelector("#title"),
  artist: document.querySelector("#artist"),
  image: document.querySelector("#url"),
  button: document.querySelector(".btn"),
  display: document.querySelector("#display"),
  form: document.querySelector("#form"),
  clearBtn: document.querySelectorAll("#remove-card"),
};

DOMselectors.form.addEventListener("submit", addItems);
//additems
function addItems(event) {
  event.preventDefault();

  const title = DOMselectors.title.value;
  const img = DOMselectors.image.value;
  const artist = DOMselectors.artist.value;

  DOMselectors.display.insertAdjacentHTML(
    "beforeend",

    `<div class="display-card">
          <p class="display-album">${title}</p>
         <p class="display-img"><img src="${img}"></p>
          <p class ="display-artist">${artist}</p>
          <button class="clearBtn">x</button>
        </div>`
  );
  DOMselectors.title.value = "";
  DOMselectors.image.value = "";
  DOMselectors.artist.value = "";
}

DOMselectors.clearBtn.addEventListener("click", clearItems);
//deleteItems
function clearItems(event) {
  let target = event.target;
  target.DOMselectors.parentElement.remove();
}
