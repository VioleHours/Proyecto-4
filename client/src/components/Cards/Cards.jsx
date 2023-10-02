import { Card } from "../Card/Card";

export default function Cards(props){
    const { characters, onClose } = props;

    return (
        <div className="cardsContainter">
            { characters.map(character => (
                <Card 
                name = {character.name}
                gender = {character.gender}
                species = {character.species}
                image = {character.image}
                key = {character.id}
                id = {character.id}
                onClose = {onClose}
                />
            ))}
        </div>
    );
}