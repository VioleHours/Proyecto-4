// Favorites.jsx
import React from 'react';
import { connect } from 'react-redux';

function Favorites({ favorites }) {
  return (
    <div>
      <h1>Favorite Characters</h1>
      <ul>
        {favorites.map(favorite => (
          <li key={favorite.id}>
            {favorite.id}
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    favorites: state.favorites,
  };
}

export default connect(mapStateToProps)(Favorites);
