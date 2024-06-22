// src/components/Gallery.js
import React, { useState } from 'react';
import ImageItem from './ImageItem';
import Modal from './Modal';
import './Gallery.css';

const images = [
  'https://static.vecteezy.com/system/resources/thumbnails/026/274/355/small_2x/generative-ai-illustration-of-exercise-and-man-with-barbell-in-gym-for-fitness-strong-muscle-power-or-health-bodybuilder-training-and-face-of-male-athlete-weightlifting-for-wellness-photo.jpg',
  'https://qph.cf2.quoracdn.net/main-qimg-b8925acbe491b1d4fdb52920f293799b-lq',
  'https://www.dmoose.com/cdn/shop/articles/Main-Image_bb553124-a412-4313-af84-55d9f4b605cc.jpg?v=1667310802',
  'https://e1.pxfuel.com/desktop-wallpaper/328/720/desktop-wallpaper-gym-motivation-backgrounds-high-definition-gym-aesthetics.jpg',
  'https://w0.peakpx.com/wallpaper/330/672/HD-wallpaper-working-out-bench-press-weight-training-weights-weightlifting.jpg',
   'https://4kwallpapers.com/images/wallpapers/workout-limitless-endurance-gym-colorful-smoke-1920x1200-929.jpg',
  // Add more gym-related images as needed
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-heading">GYM</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <ImageItem key={index} src={image} onClick={() => openModal(image)} />
        ))}
        {selectedImage && (
          <Modal
            src={selectedImage}
            onClose={closeModal}
            onNext={nextImage}
            onPrev={prevImage}
          />
        )}
      </div>
    </div>
  );
};

export default Gallery;
