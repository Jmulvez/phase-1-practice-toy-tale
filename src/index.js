let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

function renderOneToy(toy) {
  let card = document.createElement('li')
  card.className = 'card'
  card.innerHTML = 
    <img src="${toy.imageUrl}" class="toy-avatar">
    <div class="content">+
      <h2>${toy.name}</h2>
        <p>
          <span class="likes">${toys.likes}</span>
        </p>
  </div>
  <div class="buttons">
    <button> Like Btn </button>
  </div>

document.querySelector('#toy-collection').appendChild(card)

function initialize();
