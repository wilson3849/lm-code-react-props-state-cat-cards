import React from "react";
import PetImage from "./pet_image";
import Pet from "../data/pet";
import PetImg from "../data/pet-image"; 

interface petProps {
    petObj : Pet
    petImageObj : PetImg;
}

const PetCard : React.FC<petProps> = (prop) => {

    const {name, species, favFoods, birthYear } = prop.petObj
    const {image, altText, licenceType, licenceUrl, attributionName, attributionUrl } = prop.petImageObj
    const foods = favFoods.join(", ");

    return (
        <div className="card">
            <h3 className="card__text card__header">{name}</h3>
            <p className="card__text">Species: {species}</p>
            <p className="card__text">Favourite Food(s): {foods}</p>
            <p className="card__text">Birth Year: {birthYear}</p>
            <p className='card__text'>Birth Year: 1984</p>
            <PetImage image={image} altText={altText} licenceType={licenceType} licenceUrl={licenceUrl} attributionName={attributionName} attributionUrl={attributionUrl} />                
        </div>
    )

}



export default PetCard;