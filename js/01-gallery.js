import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")
addMarkUp()

let currUrl;
let instance;
const bodyClass = document.body.classList

gallery.addEventListener("click", onImageClick)
document.body.addEventListener("keydown", onEscape)

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
    instance = basicLightbox.create(`
        <img style="border: 5px solid black;"
        src="${url}"/>
    `)
    instance.show()
    classChange();

};

function classChange() {
    if (bodyClass.value = "close") {
        bodyClass.remove("close")
        bodyClass.add("open")
        return;
    }
    bodyClass.remove("close")
    bodyClass.add("open")
}

function onEscape(e) {
    if (e.key === "Escape"&&bodyClass.value==="open") {
        instance.close()
        classChange()
        document.body.removeEventListener("keydown", onEscape)
    }
}