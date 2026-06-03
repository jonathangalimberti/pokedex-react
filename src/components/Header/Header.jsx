import {useState} from "react"
import logo from "./img/pokemon-logo.png"
import "./header.css"

function Header () {
    const [search, setSearch] = useState('');
   
    return (
        <header className = "header container  p-2">
            <img src={logo} alt="Pokemon" className="w-25"/>
            <div className = "search-pokemon">
                <input
                    type="search"
                    value={search}
                    name=""
                    id=""
                    className= "rounded px-2 py-1"
                    placeholder= "Charmander"
                    onChange={e => setSearch(e.target.value)}
                />
                <button className = "btn btn-primary">Search Pokemon</button>
            </div>
        </header>
    )
}

export  {Header};
