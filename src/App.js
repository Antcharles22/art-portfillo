import React from 'react';
import './App.css';
import { Nav } from './components/nav/nav'; 
import { Banner } from './components/banner/banner';
import { slidesUrl } from "./components/slidesshow/slide";
import { ImagesSlider } from "./components/slidesshow/imagesSlider";
import { Gallary } from './components/gallary/gallary';
import { ContactUs } from './components/footer/footer';



function App() {
  return (
    <div className="App">
      <div className="bg">
      <Nav />
      <Banner />
      <ImagesSlider slidesUrl={slidesUrl} />
      <Gallary />
      < ContactUs/>
    </div>
    </div>
  );
}

export default App;
