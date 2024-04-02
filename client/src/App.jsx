import { useEffect, useState } from "react";
import { useNavigate, useLocation, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import NavBar from "./components/NavBar/NavBar";
import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const username = "rickmorty@gmail.com";
  const password = "serie123";

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  };

  const onSearch = (characters) => {
    fetch(`https://rickandmortyapi.com/api/character/${characters}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con este ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  const addRandomCharacter = () => {
    const id = Math.floor(Math.random() * 826) + 1;
    onSearch(id);
  };

  return (
    <div className="h-full">
      {location.pathname !== "/" && (
        <NavBar onSearch={onSearch} addRandomCharacter={addRandomCharacter} />
      )}
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Form login={login}/> } />
          <Route
            path="home"
            element={<Cards onClose={onClose} characters={characters} />}
          />
          <Route path="about" element={<About />} />
          <Route path="detail/:detailId" element={ <Detail /> } />
          <Route path="/favorites" element={<Favorites />}/>
          <Route path="*" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
