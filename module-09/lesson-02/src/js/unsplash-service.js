const BASE_URL = 'https://api.unsplash.com/';
const API_KEY = '7ONfI7UAT2PSN72enwnwIF_Hz9RWzxRm5xMYrdv1n-4';

function getPhotos() {
  return fetch(`${BASE_URL}/photos?client_id=${API_KEY}&per_page=6`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }

      return resp.json();
    })
    .catch(error => {
      console.log(error);
    });
}

export default getPhotos;
