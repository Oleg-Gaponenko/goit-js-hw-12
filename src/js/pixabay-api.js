import axios from "axios";

const MY_API_KEY = '23726631-21d3c8e5c551d1cabdf8b5ecc';

async function getImagesByQuery(query, page = 1) {
    try{
        const response = await axios.get('https://pixabay.com/api/', {
            params: {
                key: MY_API_KEY,
                q: query,
                per_page: 15,
                page,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
            },
        });
        return response.data;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

export { getImagesByQuery };