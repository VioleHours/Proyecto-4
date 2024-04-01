import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addFavorite, deleteFavorite } from "../../Actions";
import { Link } from "react-router-dom";

export function Card(props) {
  const [isFav, setIsFav] = useState(false);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      deleteFavorite(props.id);
    } else {
      setIsFav(true);
      addFavorite({ id: props.id });
    }
  };

  useEffect(() => {
    if (props.favorites) {
      props.favorites.forEach((fav) => {
        if (fav.id === props.id) setIsFav(true);
      });
    }
  }, [props.favorites]);

  return (
    <div className="cardContainer">
      <div className="icon">
        <button onClick={handleFavorite} className="botoFav">
          {isFav ? "💚" : "🤍"}
        </button>
      </div>
      <button className="button" onClick={() => props.onClose(props.id)}>
        <span className="x">X</span>
      </button>
      <Link to={`/detail/${props.id}`}>
        <h2 className="name">
          <em>{props.name}</em>
        </h2>
      </Link>
      <img className="photoCharacter" src={props.image} alt="" />
      <div className="columns">
        <h3 className="description">{props.species}</h3>
        <h3 className="description">{props.gender}</h3>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
    addFavorite,
    deleteFavorite
};

const mapStateToProps = (state) => ({
  favorites: state.favorites
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
