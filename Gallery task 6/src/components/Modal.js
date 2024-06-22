// src/components/Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ src, onClose, onNext, onPrev }) => {
  return (
    <div className="modal">
      <span className="close" onClick={onClose}>&times;</span>
      <div className="modal-content">
        <span className="prev" onClick={onPrev}>&#10094;</span>
        <img src={src} alt="" />
        <span className="next" onClick={onNext}>&#10095;</span>
      </div>
    </div>
  );
};

export default Modal;
