import React from "react";
import Cat from "../data/cat"

interface catProps {
    catObject : Cat;
}

const CatCard : React.FC<catProps> = (props) =>{

    const{name, species, favFoods, birthYear} = props.catObject
    const foods = favFoods.join(", ");

    return (
        <div className="card">
            <h3 className="card__text card__header">{name}</h3>
            <p className="card__text">Species: {species}</p>
            <p className="card__text">Favourite Food(s): {foods}</p>
            <p className="card__text">Birth Year: {birthYear}</p>
        </div>
    );
}
export default CatCard;