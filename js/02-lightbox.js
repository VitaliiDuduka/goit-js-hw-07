import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const imagesGallery = document.querySelector(".gallery");

const markupImages = galleryItems
  .map((image) => {
    return (
      '<li class="gallery__item"><a class="gallery__link" href="' +
      image.original +
      '"><img class="gallery__image" src="' +
      image.preview +
      '" alt="' +
      image.description +
      '"/></a></li>'
    );
  })
  .join("");

imagesGallery.insertAdjacentHTML("beforeend", markupImages);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
  disableScroll: false,
});
lightbox.on("show.lightbox", function (event) {
  event.preventDefault();
});
