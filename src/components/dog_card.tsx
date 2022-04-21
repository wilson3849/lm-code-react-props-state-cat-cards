import React from "react";
import Dog from "../data/dog"
import dogProp from "../data/dog_Prop"

const DogCard : React.FC<dogProp> = (prop) =>{

    const{id, name, species, favFoods, birthYear} = prop.dogObj
    const foods = favFoods.join(", ");
 
    return (
        <div className="card">
            <h3 className="card__text card__header">{name}</h3>
            <p className="card__text">Species: {species}</p>
            <p className="card__text">Favourite Food(s): {foods}</p>
            <p className="card__text">Birth Year: {birthYear}</p>
            <p className='card__text'>Birth Year: 1984</p>
        </div>

    );
}
export default DogCard;