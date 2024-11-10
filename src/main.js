import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchData } from './js/pixabay-api';
import { createGallery } from './js/render-functions';

const form = document.querySelector(".input-forme");
const container = document.querySelector(".gallery");
const loadMoreBtn = document.querySelector("#div-load-btn");
const lineLoader = document.querySelector(".line-loader");
const endMessage = document.querySelector("#end-message");

form.addEventListener("submit", handleSubmit);
document.querySelector('#load-btn').addEventListener('click', handleLoadMore);

let currentPage = 1;
let totalHits = 0;
let userInput = '';

async function handleSubmit(event) {
    event.preventDefault();

    userInput = document.querySelector('#input-user').value.trim();

    if (userInput === '') {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search term.',
        });
        return;
    }

    container.innerHTML = '';
    currentPage = 1;
    endMessage.classList.add('invisible');
    loadMoreBtn.classList.add('invisible');

    try {
        lineLoader.classList.remove('invisible');

        const data = await fetchData(userInput.toLowerCase(), currentPage, 15);
        console.log('API Response:', data);
        totalHits = data.totalHits;
        if (totalHits > 0) {
            container.insertAdjacentHTML("beforeend", createGallery(data.hits));
            
            const lightbox = new SimpleLightbox('.gallery a', {
                captionsData: 'alt',
                captionDelay: 250,
            });
            lightbox.refresh();

            if (totalHits > 15) {
                loadMoreBtn.classList.remove('invisible');
            }
        } else {
            iziToast.info({
                title: 'No Results',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        }
        
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Error fetching data',
        });
        console.error('Error fetching data:', error);
        
    } finally {
        lineLoader.classList.add('invisible');
    }

    document.querySelector('#input-user').value = '';
}

async function handleLoadMore() {
    currentPage++;

    try {
        lineLoader.classList.remove('invisible');

        const data = await fetchData(userInput.toLowerCase(), currentPage, 15);
        console.log('API Response:', data);
        container.insertAdjacentHTML("beforeend", createGallery(data.hits));

        const lightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250,
        });
        lightbox.refresh();

        const galleryItem = document.querySelector(".gallery_item");
        const cardHeight = galleryItem.getBoundingClientRect().height;

        window.scrollBy({
            top: cardHeight * 2,
            behavior: 'smooth'
        });

        if ((currentPage * 15) >= totalHits) {
            loadMoreBtn.classList.add('invisible');
            endMessage.classList.remove('invisible');
        }

    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Error fetching more data',
        });
        console.error('Error fetching more data:', error);
        
    } finally {
        lineLoader.classList.add('invisible');
    }
}
