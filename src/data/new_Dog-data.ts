import Pet from './pet';
import PetImg from "./pet-image";

import newDog from '../assets/images/AddDog.jpg';

const newDogData: Array<Pet> = [
    {
        petId : '',
		petPType: 'Dog',
        name: 'BluePath Service Dogs',
        species: 'Dog',
        favFoods: ['dry food', 'meat '],
        birthYear: 2019,
    }]

const newDogImageData: Array<PetImg> = [
    {
        petImgId: '',
        image: newDog,
        altText: 'Describe this cat!',
        licenceType: 'CC BY-SA 2.0',
        licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
        attributionName: 'amblin',
        attributionUrl: 'https://www.flickr.com/people/amblin/'
    }]

export {newDogData, newDogImageData};