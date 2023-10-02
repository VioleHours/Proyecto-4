import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function Detail(){
    const { detailId } = useParams();
    const [character, setCharacter] = useState;

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/detail/${detailId}`)
        .then((response) => response.json())
        .then((char) => {
            if(char.name) {
                setCharacter(char);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        })
        .catch((err) => {
            window.alert('No hay personajes con ese ID')
        });
        return setCharacter({});
    }, [detailId]);

    console.log('character: ' + character.name, character.status)

    return (
        <div key={character.id} className="detailGlob">
            <div>
                <NavBar />
            </div>

            <div className="detailContainer">
                { character.length ?
                <div className='detailContent'>
                <img className='objDetail' src={character.image} alt='Imagen no encontrada' width='250px' height='175px'/>
                <h1 className='objDetail'>{character.name}</h1>
                <div className='obj2Detail'>
                <h2>Id: {character.id}</h2>
                <h2>Estatus: {character.status}</h2>
                <h2>Especie: {character.species}</h2>
                <h2>Género: {character.gender}</h2>
                <h2>Origen: {character.origin && character.origin.name}</h2>
                <h2>Episodios: {character.episode}</h2>
                <Link to="/home">
                    <button>Back</button>
                </Link>
                </div> 
            </div> : <div className='loading'>
              <p> Loading... </p>
              </div>
                }
            </div>
        </div>
    )
}