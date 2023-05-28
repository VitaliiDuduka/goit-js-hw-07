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
      '" data-source="' +
      image.original +
      '" alt="' +
      image.description +
      '"/></a></li>'
    );
  })
  .join("");

imagesGallery.insertAdjacentHTML("beforeend", markupImages);

imagesGallery.addEventListener("click", onImageClick);

function onImageClick(event) {
  let clickedImage = event.target.closest(".gallery__image");
  event.preventDefault();
  if (!clickedImage) {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img class="gallery__image" src="${clickedImage.dataset.source}"/>
`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscKeyDown);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscKeyDown);
      },
    }
  );
  instance.show();
  function onEscKeyDown(event) {
    if (event.code !== "Escape") {
      return;
    }
    instance.close();
  }
}
