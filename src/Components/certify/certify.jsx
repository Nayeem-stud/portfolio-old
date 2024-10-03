import React, { useState } from 'react';
import './certify.css';
import a from './a.png';
import b from './b.png';
import c from './c.png';
import d from './d.png';
import e from './e.png';
import f from './f.png';


const images = [
  { id: '1', src: a, alt: 'image 1' },
  { id: '2', src: b, alt: 'Image 2' },
  { id: '3', src: d, alt: 'Image 3' },
  { id: '4', src: f, alt: 'Image 4' },
  { id: '5', src: c, alt: 'Image 5' },
  { id: '6', src: e, alt: 'Image 6' }
];

const Certify = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleImageClick = (image) => {
    setFullscreenImage(image);
  };

  const handleClose = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="cbox1">
 <div className="cbox11"><div className="cbox111">
    Certificationsㅤ<i class="fa-solid fa-certificate"></i></div>
    </div>
    <div className="flex-container">
      {images.map(image => (
        <div className="flex-item" key={image.id}>
          <img
            src={image.src}
            alt={image.alt}
            onClick={() => handleImageClick(image)}
          />
        </div>
      ))}

      {fullscreenImage && (
        <div className="fullscreen" onClick={handleClose}>
          <img src={fullscreenImage.src} alt={fullscreenImage.alt} />
        </div>
      )}
    </div>
    </div>
  );
};
export default Certify;
