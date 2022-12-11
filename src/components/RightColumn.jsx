import React from "react";

function RightColumn({ item }) {
    return (
        <div className="right-column">
            <div className="subtitle">
                <span className="condicion-vendidos">{item.attributes[9].value_name}  |  {item.sold_quantity} vendidos</span>
            </div>
            <div className="title-container" >
                <h1 className="title">{item.title}</h1>
            </div>
            <div className="price-container">
                <span className="price">${(item.price).toLocaleString()}</span>
            </div>
            <div className="button-container" >
                <button className="buy-btn btn">Comprar ahora</button>
                <button className="add-btn btn">Agregar al carrito</button>
            </div>
        </div>
    )

}

export default RightColumn;