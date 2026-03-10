import type { GiphyRandomResponse } from "../data/giphy.repsonse";


const API_KEY = 'GWbxRPL5SkRv4pe5hsnrycEmoI19nmu8';

const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
}

const getRandomGifURL = async (): Promise<string> => {
    const myResponse = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);
    const {data} = (await myResponse.json()) as GiphyRandomResponse;
    return data.images.original.url;
}

getRandomGifURL().then(createImageInsideDOM)