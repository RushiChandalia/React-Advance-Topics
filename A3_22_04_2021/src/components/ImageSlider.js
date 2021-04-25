import React, { useState,useEffect } from 'react';
import { SliderData } from './Images';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaPlay, FaPauseCircle } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, togglePlaying] = useState(1);
  const length = slides.length;

  useEffect(() => {

    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      }, 3000)
      return () => clearInterval(interval);
    }
  });

  const togglePlay =()=>{
    togglePlaying(!isPlaying)
  }
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
         
          <div
            className={index === current ? 'sli active' : 'sli'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
           
          </div>
        
         
        );
      })}
        <div className="play-pause">
          {isPlaying ? <FaPauseCircle className="buttons" onClick={togglePlay}/>    :  <FaPlay className="buttons" onClick={togglePlay} />}  
          </div>
        <div>
          {isPlaying ?  <p>playing</p> : <p>paused</p> }
               
          </div>
    </section>
  );
};

export default ImageSlider;
