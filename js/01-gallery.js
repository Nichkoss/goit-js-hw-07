import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")
addMarkUp()

let currUrl;

gallery.addEventListener("click", onImageClick)

function addMarkUp() {
    const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </li>`).join("")

    gallery.insertAdjacentHTML("beforeend", markup)
}

function onImageClick(e) {
    e.preventDefault()
    if (e.target.classList.value === "gallery__image") {
        currUrl = e.target.dataset.source
        openWindow(currUrl)
    }
}

function openWindow(url) {
    const instance = basicLightbox.create(`
        <img style="border: 5px solid black;"
        src="${url}"/>
    `,
    {
      onShow: (instance) => { document.addEventListener('keydown', onModal) },
      onClose: (instance) => { document.removeEventListener('keydown', onModal) },
        }
    )

    function onModal(e) {
        if (e.code === 'Escape') {
        instance.close()
        }
    }
    
    instance.show()

};
