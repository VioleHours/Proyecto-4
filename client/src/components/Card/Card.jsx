import { useEffect, useState } from "react";


export function Card(props) {
    const [isFav, setIsFav] = useState(false);

    function handleFavorite(){
        if(isFav) {
            setIsFav(false);
            props.deleteFavorite(props.id);
        } else {
            setIsFav(true);
            props.addFavorite(props);
        }
    }

    useEffect(() => {
        props.favorites?.forEach((fav) => {
            if(fav.id === props.id) setIsFav(true)
        });
    }, [props.favorites])

    return (
        <div className="cardContainer">
            <div className="icon">
                {
                    isFav ? (
                        <button onClick={handleFavorite} className='botoFav' >💚</button>
                     ) : (
                        <button onClick={handleFavorite} className='botoFav'>🤍</button>
                     )
                }
            </div>
            <button className='button' onClick={() => props.onClose(props.id)}>
                <span className='x'>X</span>
            </button>
            <Link to={`/detail/${props.id}`}>
                <h2 className='name'><em>{props.name}</em></h2>  
            </Link>
            <img className='photoCharacter' src={props.image} alt='' />
            <div className='columns'>
            <h3 className='description'>{props.species}</h3>
            <h3 className='description'>{props.gender}</h3>
            </div>
        </div>
    )
}

export function mapDispatchToProps(dispatch){
    return {
        addFavorite: function(fav){
            dispatch(addFavorite(fav))
        },

        deleteFavorite: function(id){
            dispatch(deleteFavorite(id))
        }
    }
}

export function mapStateToProps(state){
    return {
        favorites: state.favorites,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);