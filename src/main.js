import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchData } from './js/pixabay-api';
import { createGallery } from './js/render-functions'

const form = document.querySelector(".input-forme");
const container = document.querySelector(".gallery");

form.addEventListener("submit", handleSubmit);

let currentPage = 1;

function handleSubmit(event) {
    event.preventDefault();

    const userInput = document.querySelector('#input-user').value.trim();

    if (userInput === '') {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search term.',
        });
        return;
    }

    // Очищення контейнера галереї перед новим пошуком
    container.innerHTML = '';

    fetchData(userInput.toLowerCase(), currentPage, 200)
        .then(data => {
            console.log('API Response:', data);
            if (data.totalHits > 0) {
                container.insertAdjacentHTML("beforeend", createGallery(data.hits));
                
                const lightbox = new SimpleLightbox('.gallery a', {
                    captionsData: 'alt',
                    captionDelay: 250,
                });
                lightbox.refresh(); // Оновлення lightbox після додавання нових елементів
                
            } else {
                iziToast.info({
                    title: 'No Results',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            }
        })
        .catch(error => {
            iziToast.error({
                title: 'Error',
                message: 'Error fetching data',
            });
            console.error('Error fetching data:', error);
        });

    // Очищення текстового поля запиту
    document.querySelector('#input-user').value = '';
}
