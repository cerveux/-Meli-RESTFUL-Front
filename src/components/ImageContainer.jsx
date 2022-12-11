import React, { useState } from "react";


function ImageContainer({ item }) {
    const [gallery, setGallery] = useState(null);
    const [small, setSmall] = useState(0);
    return (
        <div className='images-container'>
            <div className='img-nav'>
                <div
                    className='small-img-container'
                    style={{ border: small === 0 ? "2px solid #3483fa" : (small === item.pictures[0].id && ("2px solid #3483fa")) }}
                >
                    <img className='small-img'
                        src={`https://http2.mlstatic.com/D_${item.pictures[0].id}-R.jpg`}
                        onMouseOver={() => {
                            setGallery(`https://http2.mlstatic.com/D_${item.pictures[0].id}-O.jpg`);
                            setSmall(item.pictures[0].id);
                        }} alt="" />
                </div>
                {item.pictures.slice(1, 6).map((arr) => {
                    return (
                        <div key={arr.id}
                            className='small-img-container'
                            style={{ border: small === arr.id && ("2px solid #3483fa") }}
                        >
                            <img className='small-img'
                                src={`https://http2.mlstatic.com/D_${arr.id}-R.jpg`}
                                onMouseOver={() => {
                                    setGallery(`https://http2.mlstatic.com/D_${arr.id}-O.jpg`);
                                    setSmall(arr.id);
                                }} alt="" />
                        </div>
                    )
                })}
            </div>
            <div className='img-display'>
                <img className='big-img' src={gallery || `https://http2.mlstatic.com/D_${item.pictures[0].id}-O.jpg`} alt="" />
            </div>
        </div>

    )

}

export default ImageContainer;