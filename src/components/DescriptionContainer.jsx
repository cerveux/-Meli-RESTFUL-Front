import React from 'react'

function DescriptionContainer({ descripcion }) {
    return (
        <div className="description-container">
            <h2 className="descripcion" >Descripción</h2>
            <p className="descripcion" >{descripcion}</p>
        </div>
    )
}

export default DescriptionContainer