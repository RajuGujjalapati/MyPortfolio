import React from 'react';
import  ReactDOM  from 'react-dom';
import './Modal.css';


// Add css and code to this Modal, Check the home page add state
const Modal = (props) => {
    return  ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="upper-section">
                    <h1>Huge annoucement!</h1>
                    <p className="close">&times;</p>
                </div>
                <div className="middle-section">

                </div>
                <div className="lower-section">

                </div>
            </div>
        </div>, 
        document.getElementById('modal')
        );
        
};
 
export default Modal;