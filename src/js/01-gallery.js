
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);


// Описаний в документації
import SimpleLightbox from "simplelightbox";

// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


// import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryPhotos = document.querySelector(".gallery");
// console.log(galaryPhotos);

const markup = createPhotosMarkup(galleryItems);
// console.log(markup);

galleryPhotos.insertAdjacentHTML('beforeend', markup);

function createPhotosMarkup (photosArray) {
    return  photosArray.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
        </li>
        ` }).join('');
}


// let gallery = new SimpleLightbox('.gallery a');
// gallery.on('show.simplelightbox', function (e) {
	
// });



const lightboxGallery = new SimpleLightbox('.gallery a', {
    captions: true,  // Показувати підписи до зображень
    captionsData: 'alt',  // Які дані використовувати для підписів (наприклад, 'alt' або 'data-title')
    captionPosition: 'bottom',  // Позиція підпису ('top' або 'bottom')
    overlay: true,  // Показувати затемнену підложку під лайтбоксом
    spinner: true,  // Показувати індикатор завантаження
    animationSlide: true,  // Включити анімацію переходу між зображеннями
    animationSpeed: 250,  // Швидкість анімації в мілісекундах
    preloading: true,  // Передзавантажувати зображення попереднього і наступного слайдів
    enableKeyboard: true,  // Включити управління клавішами (ліво/право, Esc)
    docClose: true,  // Закриття лайтбоксу при кліку на документ
    swipeTolerance: 50,  // Мінімальна відстань для визнання жесту свайпа
    alertError: true,  // Показувати повідомлення про помилки
});






// galleryPhotos.addEventListener('click', handlerPhotoClick);

// function handlerPhotoClick (event) {

// event.preventDefault(); 

// // Зробимо ще валідацію, щоб уникнути небажаного результату, якщо користувач 
// // натисне між картинками. 
// if (event.target === event.currentTarget){
//     return;
// };

// const targetElement = event.target.closest('.gallery__item');

// const photoSource = targetElement.dataset.source;


// // console.log(basicLightbox);

// // const instance = basicLightbox.create(`
// // <div class="modal">

// // <img src="${event.target.dataset.source}" alt="${event.target.alt}" width="800" height="600"

// // </div>

// // `);
// // instance.show();


// }
