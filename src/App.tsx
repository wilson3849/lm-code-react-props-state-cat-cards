import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';

import Cat from './data/cat';
import catData from './data/cat-data';
import CatImg from './data/cat-image';
import catImageData from './data/cat-image-data';
import CatCard from './components/cat_card';


function App() {

	const [cats, setCats ] = useState<Array<Cat>>(catData);
	const [catImages, setCatImages] = useState<Array<CatImg>>(catImageData);

	const catCount = cats.length;

	cats.forEach((cat, index) => {
		const id = uuidv4();
		cat.id = id;
		catImages[index].id = id;
	});

	return (
		<>
			<Navbar />
			<Header catCount={catCount} />

			<main>
				<div className='cards__wrapper'>
				{cats.map((cat, index) => ((index < catImages.length) &&
						<CatCard 
							catObj={cat} 
							catObjImg={catImages.find(image => image.id === cat.id) || catImages[0]}/>
				))}
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
