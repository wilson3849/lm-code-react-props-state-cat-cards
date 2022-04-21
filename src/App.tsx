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

function App() {

	const [pets, setPets] = useState<Array<Pet>>(petData);
	const [petImages, setPetImages] = useState<Array<PetImg>>(petImageData);

	let [catCount, setCatCount] = useState<number>(0);
	let [dogCount, setDogCount] = useState<number>(0);

	const AddcatCount = () => {
		setCatCount(catCount+1)
	}

	const AdddogCount = () => {
		setDogCount(dogCount+1)
	}
	
	pets.forEach((pet, index) => {
		const id = uuidv4();
		pet.petId = id;
		pet.petPType === 'Dog'? dogCount+=1 : catCount+=1;
		petImages[index].petImgId=id;
	})

	console.table(pets)

	return (
		<>
			<Navbar />
			<Header catCount={catCount} dogCount={dogCount} />

			<main>
				<div className='cards__wrapper'>
					{pets
					 .map((pet) => (
							<PetCard petObj={pet} petImageObj={petImages.find(image => image.petImgId === pet.petId) || petImages[0]} />
					 ))
					}
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
