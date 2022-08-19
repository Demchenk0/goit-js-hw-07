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

