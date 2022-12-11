import React, { useState } from "react";
/* import SearchIcon from '@mui/icons-material/Search'; */
import { Link, Outlet } from "react-router-dom";
import { BsSearch } from "react-icons/bs";




function Header( {search} ) {
    const [busqueda, setBusqueda] = useState("");
    return (
        <header className="nav-header">
            <div className="nav-bounds">
                <a id="nav-skip-to-main-content" className="nav-skip-to-main-content" href="/">sad</a>
                <a className="nav-logo" href="/" >Mercado Libre Argentina - Donde comprar y vender de todo</a>
                <form onSubmit={(event) => event.preventDefault()} className="nav-search" action="" method="get">
                    <input onChange={(event) => {
                        setBusqueda(event.target.value);                        
                    }
                    } type="text" className="nav-search-input" placeholder="Buscar productos, marcas y más" name="as_word" id="" value={busqueda} />
                    <Link to={`/results/${busqueda}`}>
                        <button  type="submit" className="nav-search-btn"
                        onClick={()=>search(busqueda)}>
                            <div className="nav-icon-search">
                                <BsSearch />
                            </div>
                        </button>
                    </Link>
                </form>
            </div>
            <Outlet />
        </header>
    )
}

export default Header;