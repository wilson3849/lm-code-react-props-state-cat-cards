import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';

/*import Cat from './data/cat';
import catData from './data/cat-data';
import CatImg from './data/cat-image';
import catImageData from './data/cat-image-data';

import Dog from './data/dog';
import dogData from './data/dog-data';*/

import Pet from './data/pet';
import petData from './data/pet-data'
import PetImg from './data/pet-image';
import PetCard from './components/pet_card';
import petImageData from './data/pet-image-data';

import { newDogData, newDogImageData } from './data/new_Dog-data';
import { newCatData, newCatImageData} from './data/new_Cat-data';

function App() {

	const [pets, setPets] = useState<Array<Pet>>(petData);
	const [petImages, setPetImages] = useState<Array<PetImg>>(petImageData);
	let [choice, setChoice] = useState<string>('');
	let [petName, setPetName] = useState<string>('');
	
	let dogCount = 0;
	let catCount = 0;


	pets.forEach((pet, index) => {
		const id = uuidv4();
		pet.petId = id;
		pet.petPType === 'Dog'? dogCount+=1 : catCount+=1;
		petImages[index].petImgId=id;
	})
	
	const handleClickButton = (e:any) => {
		setChoice(e.target.value);
		loadRecord();
	}

	const loadRecord = () => {
		if (choice === "cat") {
			setPetName(newCatData[0].name);
		}
		if (choice === "dog") {
			setPetName(newDogData[0].name);
		}	
	}

	const AddRecord = () => {
		const uuid = uuidv4();
		if (choice === "dog") {
			petImages.push({
				petImgId: uuid,
				image: newDogImageData[0].image,
				altText: newDogImageData[0].altText,
				licenceType: newDogImageData[0].licenceType,
				licenceUrl: newDogImageData[0].licenceUrl,
				attributionName: newDogImageData[0].attributionName, 
				attributionUrl: newDogImageData[0].attributionName,
			})
			setPetImages(petImages)
			pets.push({
				petId: uuid,
				petPType: newDogData[0].petPType,
				name: newDogData[0].name,
				species: newDogData[0].species,
				favFoods: newDogData[0].favFoods,
				birthYear: newDogData[0].birthYear,
			})
			setPets(pets)
		}
		if (choice === "cat") {
			petImages.push({
				petImgId: uuid,
				image: newCatImageData[0].image,
				altText: newCatImageData[0].altText,
				licenceType: newCatImageData[0].licenceType,
				licenceUrl: newCatImageData[0].licenceUrl,
				attributionName: newCatImageData[0].attributionName, 
				attributionUrl: newCatImageData[0].attributionName,
			})
			setPetImages(petImages)
			pets.push({
				petId: uuid,
				petPType: newCatData[0].petPType,
				name: newCatData[0].name,
				species: newCatData[0].species,
				favFoods: newCatData[0].favFoods,
				birthYear: newCatData[0].birthYear,
			})
			setPets(pets)
		}
		setPetName('');	
		setChoice('');			
	}



	console.table(pets)

	return (
		<>
			<Navbar />
			<Header catCount={catCount} dogCount={dogCount} />

			<main>
				<div className='New_Card_Service'>
					<div>
						<label>File in Storage : </label>
						<select value={choice} onChange={handleClickButton} onClick={handleClickButton}>
							<option value="">...</option>
							<option value="cat">new_Cat-Data</option>
							<option value="dog">new_Dog-Data</option>
						</select>
						{petName}
					</div>
					<button onClick={AddRecord} >Import New Pet </button>
				</div>				
				<div className='cards__wrapper'>
					{
						pets.map((pet) => (
							<PetCard petObj={pet} petImageObj={petImages.find(image => image.petImgId === pet.petId) || petImages[0]} />))
					}
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
