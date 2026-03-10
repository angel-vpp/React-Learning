import type { GiphyRandomResponse } from "../data/giphy.repsonse";


const API_KEY = 'GWbxRPL5SkRv4pe5hsnrycEmoI19nmu8';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
}

myRequest.then((response) => response.json().then(({data}: GiphyRandomResponse) => {
    const imageURL = data.images.original.url;
    console.log(imageURL);
    createImageInsideDOM(imageURL);
}))
.catch((error) => {
    console.error(error);
});