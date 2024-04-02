import { Link, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import RandomCharacter from "../RandomCharacter/RandomCharacter.jsx";

export default function NavBar(props) {
    const url = useLocation()
    if(url.pathname !== '/'){
        return (
            <nav className="w-full justify-center">
                <SearchBar onSearch={props.onSearch} />
                <RandomCharacter addRandomCharacter={props.addRandomCharacter} />
                <Link to={'/about'}>
                    <span>About</span>
                </Link>
                <Link to={'/home'}>
                    <span>Home</span>
                </Link>
                <Link to={'/favorites'}>
                    <span>Favorites</span>
                </Link>
            </nav>
        )
    }
}