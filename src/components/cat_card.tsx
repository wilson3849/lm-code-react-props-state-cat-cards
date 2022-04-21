import React from "react";
import Cat from "../data/cat"
import CatImg from "../data/cat-image"
import CatImage from "./cat_image"
import catProp from "../data/cat_Prop";

const CatCard : React.FC<catProp> = (prop) =>{

    const{id, name, species, favFoods, birthYear} = prop.catObj
    const{image, altText, licenceType, licenceUrl, attributionName, attributionUrl } = prop.catObjImg
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