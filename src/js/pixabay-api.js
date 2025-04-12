import axios from "axios";

const MY_API_KEY = '23726631-21d3c8e5c551d1cabdf8b5ecc';

function getImagesByQuery(query) {
    return axios.get('https://pixabay.com/api/', {
        params: {
            key: MY_API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        }
    })
    .then(response => response.data.hits)
    .catch(error => {
        console.log(error);
        throw error;
    });
}

export {getImagesByQuery};