import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const loadButton = document.querySelector('.load-more-button');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', handleSubmit);
loadButton.addEventListener('click', onLoadMore);

let page = 1;
let totalHits = 0;
let actualQuery = '';

async function handleSubmit(event) {
    event.preventDefault();

    const imageQuery = event.target.elements['search-text'].value.trim();

    if(imageQuery === ''){
        iziToast.error({
            message: 'Please enter your search query!',
            position: 'topRight',
            maxWidth: '450px',
        })
     return;
    }

    page = 1;
    actualQuery = imageQuery;
    showLoader();
    clearGallery();
    hideLoadMoreButton();

    try{
        const { hits, totalHits: total } = await getImagesByQuery(imageQuery, page)
        totalHits = total;

        if(hits.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                maxWidth: '450px',
            })
        }  else {
            createGallery(hits);
        }

        if(totalHits > page * 15) {
            showLoadMoreButton();
        } else {
            hideLoadMoreButton();
        }
    } catch(error) {
        iziToast.error({
            message: 'Cannot fetch images',
            position: 'topRight',
            maxWidth: '450px',
        });
    } finally {
        hideLoader();
        form.reset();
    }
}

async function onLoadMore() {
    page += 1;
    showLoader();
    hideLoadMoreButton();

    try{
        const { hits, totalHits: total } = await getImagesByQuery(actualQuery, page);
            createGallery(hits);
            const imageCard = gallery.querySelector('.gallery-item');

            if(imageCard) {
                const imageCardHeight = imageCard.getBoundingClientRect().height;
                window.scrollBy({
                        top: imageCardHeight * 2,
                        behavior: 'smooth',
                    });
            }

            if(page * 15 >= totalHits) {
                hideLoadMoreButton();
                iziToast.error({
                    message: 'We are sorry, but you have reached the end of search results.',
                    position: 'topRight',
                    maxWidth: '450px',
                });
            } else {
                showLoadMoreButton();
            }
        } catch(error){
            iziToast.error({
                message: 'Cannot fetch images',
                position: 'topRight',
                maxWidth: '450px',
            });
        } finally{
            hideLoader();
        }
}
