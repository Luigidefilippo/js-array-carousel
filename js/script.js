// **Consegna:**
// Dato un array contenente una lista di cinque immagini, creare un carosello

const imagesArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
const itemsContainer = document.querySelector(".slider-items");
const itemsArray = document.getElementsByClassName("item");
const thumbnailsContainer = document.querySelector(".thumbnails");
const thumbnailsArray = document.getElementsByClassName("thumbnail");
let activeItemIndex = 0;

for (let i = 0; i < imagesArray.length; i++) {
  const currentImage = imagesArray[i];
  const sliderItem = `
    <div class="item">
      <img src="${currentImage}" alt="">
    </div>`;
  const thumbnailItem = `
    <div class="thumbnail">
      <img src="${currentImage}" alt="">
    </div>`;

  itemsContainer.innerHTML += sliderItem;
  thumbnailsContainer.innerHTML += thumbnailItem;
}

itemsArray[activeItemIndex].classList.add("active");
thumbnailsArray[activeItemIndex].classList.add("active-thumbnail");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

nextBtn.addEventListener("click", function () {

  itemsArray[activeItemIndex].classList.remove("active");

  thumbnailsArray[activeItemIndex].classList.remove("active-thumbnail");

  activeItemIndex++;

  if (activeItemIndex === itemsArray.length) {
    activeItemIndex = 0;
  }

  itemsArray[activeItemIndex].classList.add("active");
  thumbnailsArray[activeItemIndex].classList.add("active-thumbnail");
});

prevBtn.addEventListener("click", function () {

  itemsArray[activeItemIndex].classList.remove("active");

  thumbnailsArray[activeItemIndex].classList.remove("active-thumbnail");

  activeItemIndex--;

  if (activeItemIndex === -1) {
    activeItemIndex = itemsArray.length - 1;
  }

  itemsArray[activeItemIndex].classList.add("active");
  thumbnailsArray[activeItemIndex].classList.add("active-thumbnail");
});