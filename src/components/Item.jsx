import React from "react";
import { useParams } from "react-router-dom";
import ImageContainer from "./ImageContainer";
import RightColumn from "./RightColumn";
import DescriptionContainer from "./DescriptionContainer";
import Modal from "./Modal";
import { useModal } from "../hooks/useModal";

function Item({ item, descripcion, infoItem }) {
    const [isOpenMail, openModalMail, closeModalMail] = useModal(false);

    const { id } = useParams();
    const item2 = id;
    ((item === null) || (item.id !== item2)) && infoItem(item2);

    return (
        ((item !== null) && (item.id === item2)) ?
            (<main className="item-result">
                <Modal isOpen={isOpenMail} closeModal={closeModalMail}  >
                <div className="card" style={{ width: " 18rem" }} >
                    <div className="card-body">
                        <h3 className="card-subtitle mb-3"  >Hasta aquí llega la práctica de la api</h3>

                        
                        <button className="btn btn-secondary boton" onClick={() => openModalMail()}>aceptar</button>
                    </div>
                </div>
            </Modal>
                <section className="item-container">
                    <div className="first-section">
                        <ImageContainer item={item} />
                        <RightColumn item={item} />
                    </div>
                    <DescriptionContainer descripcion={descripcion} />
                </section>

            </main>)
            : (<div className="loader-container">
                <div className="spinner"></div>
            </div>)
    )
}

export default Item