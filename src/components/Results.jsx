import React from "react";
import { Link } from "react-router-dom";



function Results({ articulo }) {



    return (
        <li>
            <div className="result-card">
                <div className="result-image">
                    <Link
                        to={`/${articulo.id}`}
                        title={articulo.title}
                    >
                        <div>
                            <img
                                className="result-search-image"
                                src={`https://http2.mlstatic.com/D_${articulo.thumbnail_id}-V.jpg`}
                                alt="Thumbnail"
                            ></img>
                        </div>
                    </Link>
                </div>
                <div>
                    <div className="search-result-content">
                        <Link
                            className="Link"
                            to={`/${articulo.id}`}
                            title={articulo.title}
                        >
                            <h2 align="left">{articulo.title}</h2>
                        </Link>
                    </div>
                    <div className="result-search-price">
                        <Link
                            className="Link"
                            to={`/${articulo.id}`}
                            title={articulo.title}
                        >
                            <span className="price-amount">$ {(articulo.price).toLocaleString()}</span>
                        </Link>
                    </div>
                </div>

            </div>
        </li>

    )
}

export default Results;