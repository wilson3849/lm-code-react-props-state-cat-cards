import Pet from './pet';
import PetImg from "./pet-image";

import newCat from '../assets/images/AddCat.jpg';

const newCatData: Array<Pet> = [
    {
        petId : '',
		petPType: 'Cat',
        name: 'Scottish Straight cat',
        species: 'Cat',
        favFoods: ['fresh fish', 'beef ball'],
        birthYear: 2019,
    }]

const newCatImageData: Array<PetImg> = [
    {
        petImgId: '',
        image: newCat,
        altText: 'Describe this cat!',
        licenceType: 'CC BY-SA 2.0',
        licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
        attributionName: 'amblin',
        attributionUrl: 'https://www.flickr.com/people/amblin/'
    }]

export {newCatData, newCatImageData}