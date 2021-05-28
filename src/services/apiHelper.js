import axios from 'axios';

export const getDogList = async () => {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all');
    return Object.keys(response.data.message);
}

export const getRandomDog = async (breed) => {
    const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
    return response.data.message;
}