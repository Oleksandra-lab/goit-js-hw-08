import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

function createGalleryMarkup(galleryItems){
    return galleryItems
    .map(
        ({original, preview, description}) => 
        `<li><a href="${original}"><img class="gallery__image" src="${preview}"  alt="${description}"></a></li>`
        )
    .join("")

}

const lightbox = new SimpleLightbox('.gallery a',{ 
    captionsData: "alt",
    captionDelay: 250,
    
});


console.log(galleryItems);

