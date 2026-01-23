const Modal = ({isOpen, closed, rating}) => {
    if (!isOpen) return null;


    return ( 
        <div className="modal-overlay">
            <div className="modal">
                <h2>Tank You</h2>
                <p>You Rated {rating} star{rating > 1 ? 's' : ''}</p>
                <button className="close-btn" onClick={closed}>Close</button>
            </div>
        </div>
     );
}
 
export default Modal;
