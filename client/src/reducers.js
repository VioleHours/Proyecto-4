const initialState = {
  favorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(favorite => favorite.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;