import "./Modal.css";




export default function Modal({children, isOpen, closeModal}){
    console.log(isOpen);
  

    return(
<>
<article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
  
        <div className="modal-container" onClick={(e)=>e.stopPropagation()}>
          
          {children}

        </div>
      </article>

</>
    )
}