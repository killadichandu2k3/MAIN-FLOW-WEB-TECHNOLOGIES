// src/components/ImageItem.js
import React from 'react';
import './ImageItem.css';

const ImageItem = ({ src, onClick }) => {
  return (
    <div className="image-item" onClick={onClick}>
      <img src={src} alt="" />
    </div>
  );
};

export default ImageItem;
