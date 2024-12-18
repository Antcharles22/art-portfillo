import React, { useState } from "react";
import PropTypes from "prop-types";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import "./imagesSlide.css";

export function ImagesSlider({ slidesUrl }) {
    const [ImageIndex, setImageIndex] = useState(0);

    if (!Array.isArray(slidesUrl) || slidesUrl.length === 0) {
        return <div>No slides available</div>;
    }

    const nextSlide = () => {
        setImageIndex((ImageIndex + 1) % slidesUrl.length);
    };

    const prevSlide = () => {
        setImageIndex((ImageIndex - 1 + slidesUrl.length) % slidesUrl.length);
    };

    return (
        <div className="collections">
            <h2>Collections </h2>
            <div className="collections__container">
                <article className="collections__item">
                    <h3>Gold</h3>
                      <p> Gold is a series that encapsulates the feelings of divinity and strength. This is achieved through bold, heavy brush strokes in gold, black, and white. The series is created by hand and then digitally edited to produce a unique appearance. Scanning the artwork into a computer allows me to experiment with contrast and depth of color.
                    </p>  

                </article>
               <div className="slider">
                  <button className="btn1" onClick={prevSlide}><ArrowBigLeft /></button>
                    <img src={slidesUrl[ImageIndex]} alt="slide" className="slide" />
                    <button className="btn2" onClick={nextSlide}><ArrowBigRight /></button>
               </div>
           </div>
        </div>
    );
}

// Define PropTypes for the component
ImagesSlider.propTypes = {
    slidesUrl: PropTypes.arrayOf(PropTypes.string).isRequired,
};

