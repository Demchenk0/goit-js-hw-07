import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// вытянули над див с HTML
const myGalleryDiv = document.querySelector('.gallery');

// зарендорил разметку на фото
const allDiv = galleryItems.map(({preview, original, description}) => {
  // создаем елемент (div) c картинкой
const photoEl = `<div class="gallery__item">
<a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
</a>
</div>`;
    return photoEl;
    
});

const stGallery = allDiv.join('');
// добавления наших дивов
myGalleryDiv.innerHTML = stGallery;
// console.log(allDiv.join(''));
// что бы по клину открывалась наша модалочка
myGalleryDiv.addEventListener('click', onOpenModal);
// closeModal.addEventListener('click', onCloseModal);
// backdrop.addEventListener('click', onBackdropClick);


// логика что будет делать
function onOpenModal(event) {
  // запрещаем от браузера действия
  event.preventDefault();
  // если нажимаем не на картинку то сразу возвращает
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  // instance.element().querySelector('img').src = event.target.dataset.source;
  instance.show();
  
  myGalleryDiv.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      instance.close();
    }
  });
}


// function onCloseModal() {

// }

// function onBackdropClick(event) {
//   if (event.currentTarget === event.target) {
//     onCloseModal();
//   }
// }

// const instance = basicLightbox.create(`
//     <img width="800" height="600">
// `);

// function onOpenModal(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }
//   instance.element().querySelector('img').src = event.target.dataset.source;
//   instance.show();

// const refs = {
//   openModal: document.querySelector('.gallery__image = "open-modal"'),
//   closeModal: document.querySelector('.gallery__image = "close-modal"'),
//   backdrop: document.querySelector('.gallery__item'),
// }

// refs.openModal.addEventListener('click', onOpenModal);
// refs.closeModal.addEventListener('click', onCloseModal);
// refs.backdrop.addEventListener('click', onBackdropClick);

// const openModal = document.querySelector('.gallery = "open-modal"');
// const closeModal = document.querySelector('.gallery__image = "close-modal"');
// const backdrop = document.querySelector('.gallery__item');