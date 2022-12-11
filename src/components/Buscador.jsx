import React from "react";
import Results from "./Results";
import { useParams } from "react-router-dom";
import Modal from "./Modal";
import { useModal } from "../hooks/useModal"


function Buscador({ data, search }) {

  const [isOpenMail, openModalMail, closeModalMail] = useModal(false);
  
  
  const { result } = useParams();
  ((data === null)) && search(result);


  if((data !== null)){
    
    return(<main className="app-container">
      <Modal isOpen={isOpenMail} closeModal={closeModalMail}  >
                <div className="card" style={{ width: " 21rem", padding: "10px" }} >
                    <div className="card-body">
                        <h3 className="card-subtitle mb-3"  >Recuerda que esto no es mercado libre</h3>
                        <h3 className="card-subtitle mb-3"  >aqui no podrás comprar ni vender, solo realiza la busqueda</h3>
                        
                        <button className="btn btn-secondary boton" onClick={() => openModalMail()}>aceptar</button>
                    </div>
                </div>
            </Modal>
    <section className="search-results">
      <ol className="search-layout">
        {data &&
          data.map((articulo) => {
            return (
              <Results key={articulo.id} articulo={articulo} />
            );
          })}
      </ol>
    </section>
    
  </main>)
  }else{
    
    return(<div className="loader-container">
    <div className="spinner"></div>
  </div>)
  }

 
}

export default Buscador;