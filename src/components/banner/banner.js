import React from 'react';
import "./banner.css";
import mer from "../images/merc.jpg";



export const Banner = () => {
  return (
    <div className="banner">
        <div className="bannerInfo">
           <h1>"The communication of the unknown"</h1>
                <p> In my work, I explore the unknown—the aspects of existence that are apparent yet defy verbal expression. Through each piece of art, I aim to evoke emotions, feelings, and concepts that resonate deeply with viewers, capturing the essence of what often remains unspoken.</p>
            </div>
            <div className='bannerImage'>
              <img src={mer} alt='mer' />
            </div>
      
    </div>
  );
}