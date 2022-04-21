import React from "react";
import Cat from "../data/cat"
import CatImg from "../data/cat-image"
import CatImage from "./cat_image"

interface catProps {
    catObj : Cat
    catObjImg : CatImg;
}

const CatCard : React.FC<catProps> = (props) =>{

    const{id, name, species, favFoods, birthYear} = props.catObj
    const{image, altText, licenceType, licenceUrl, attributionName, attributionUrl } = props.catObjImg
    const foods = favFoods.join(", ");

 
    return (
        <div className="card">
            <h3 className="card__text card__header">{name}</h3>
            <p className="card__text">Species: {species}</p>
            <p className="card__text">Favourite Food(s): {foods}</p>
            <p className="card__text">Birth Year: {birthYear}</p>
            <p className='card__text'>Birth Year: 1984</p>
            <CatImage image={image} 
                    altText={altText} 
                    licenceType={licenceType} 
                    licenceUrl={licenceUrl} 
                    attributionName={attributionName} 
                    attributionUrl={attributionUrl}/>
        </div>

    );
}
export default CatCard;