import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")
addMarkUp()

gallery.addEventListener("click", onImageClick)

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});

function addMarkUp() {
    const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>`).join("")

    gallery.insertAdjacentHTML("beforeend", markup)
}

function onImageClick(e) {
    e.preventDefault()
}
