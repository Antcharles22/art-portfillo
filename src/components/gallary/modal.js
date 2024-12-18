import React from 'react';
import PropTypes from 'prop-types';
import './modal.css'; // Import the CSS file for the modal

const Modal = ({ isOpen, onClose, imageSrc, imageAlt, imageDescription }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                <img src={imageSrc} alt={imageAlt} className="modal-image" />
                <div className="modal-description">
                    <p>{imageDescription}</p>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string,
    imageDescription: PropTypes.string,
};

export default Modal;