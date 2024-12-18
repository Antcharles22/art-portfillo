import React, {useState} from 'react';
import Modal from './modal';
import  gal1  from './gallaryimages/gallaryima1.jpg';
import  gal2  from './gallaryimages/gallaryimg2.jpg';
import  gal3  from './gallaryimages/gallaryimg3.jpg';
import  gal4  from './gallaryimages/gallaryimg4.jpg';
import  gal5  from  './gallaryimages/gallaryimg6.jpg';
import './gallary.css';

const images = [
   { src: gal1, alt: 'img: blue,red and orange geometric art', description: ' "Prism of light" 120 x 82cm' },
   { src: gal2, alt: 'img: red, green and orange geometric art', description: ' "Calming return" 28 x 28cm'  },
   { src: gal3, alt: 'img: abstract iamge of the sun and sea', description: '"Sun on sea" 60 x 60cm' },
   { src: gal4, alt: 'img orange and red abstract look of chaos  ', description: '"Second of chaos" 50cm x 50cm' },
   { src: gal5, alt: 'img man meditating under tree', description: '"Quite jouney" 42 x 29cm' },
];


   export const Gallary = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [selectedImage, setSelectedImage] = useState(null);

      const openModal = (image) => {
         setSelectedImage(image);
         setIsModalOpen(true);
     };

     const closeModal = () => {
      setIsModalOpen(false);
      setSelectedImage(null);
  };


    

  return (
   <div className='gallary'>
       <h3>Gallery</h3>
       <div className="parent">
           {images.map((image, index) => (
               <div key={index} className={`div${index + 1}`} onClick={() => openModal(image)}>
                   <img src={image.src} alt={image.alt} />
               </div>
           ))}
           <div className='gallbtn'>
           <button className='mColl'> More Collection</button>
           </div>
       </div>
       {selectedImage && (
           <Modal
               isOpen={isModalOpen}
               onClose={closeModal}
               imageSrc={selectedImage.src}
               imageAlt={selectedImage.alt}
               imageDescription={selectedImage.description}
           />
       )}
   </div>
);
};