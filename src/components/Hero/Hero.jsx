import React, { useState, useRef, useEffect } from 'react';
import "./Hero.css";
import img1 from '../../images/img1.avif';
import img2 from '../../images/img2.avif';
import img3 from '../../images/img3.avif';
import img4 from '../../images/img4.avif';
import { FaBookmark } from "react-icons/fa6";

const Hero = () => {
  const [carouselItems, setCarouselItems] = useState([
    { id: 1, src: img1, author: "author1", title1: "TITLE1", title2: "DESCRIPTION", topic: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid" },
    { id: 2, src: img2, author: "author2", title1: "TITLE2", title2: "DESCRIPTION", topic: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid" },
    { id: 3, src: img3, author: "author3", title1: "TITLE3", title2: "DESCRIPTION", topic: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid" },
    { id: 4, src: img4, author: "author4", title1: "TITLE4", title2: "DESCRIPTION", topic: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid" },
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const timeRunning = 3000;
  const timeAutoNext = 7000;
  const runNextAutoRef = useRef();

  useEffect(() => {
    runNextAutoRef.current = setTimeout(() => {
      showSlider('next');
    }, timeAutoNext);

    return () => clearTimeout(runNextAutoRef.current);
  }, [currentSlide]);

  const showSlider = (type) => {
    if (transitioning) return;

    setTransitioning(true);
    setTimeout(() => setTransitioning(false), timeRunning);

    if (type === 'next') {
      setCarouselItems((prevItems) => [
        ...prevItems.slice(1),
        prevItems[0],
      ]);
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
    } else {
      setCarouselItems((prevItems) => [
        prevItems[prevItems.length - 1],
        ...prevItems.slice(0, -1),
      ]);
      setCurrentSlide((prevSlide) => (prevSlide - 1 + carouselItems.length) % carouselItems.length);
    }

    clearTimeout(runNextAutoRef.current);
    runNextAutoRef.current = setTimeout(() => {
      showSlider('next');
    }, timeAutoNext);
  };

  return (
    <div>
      <header>
        <nav className='justify-end gap-4'>
          <a href="#home">Home</a>
          <a href="#contacts">Contacts</a>
          <a href="#info">Info</a>
        </nav>
      </header>

      <div className="carousel-container">
        <div className="carousel-im">
          <div className="list-im">
            {carouselItems.map((item, index) => (
              <div
                key={item.id}
                className={`carousel-item-im ${index === 0 ? 'carousel-item--active-im' : ''}`}
                style={{ backgroundImage: `url(${item.src})` }}
              >
              </div>
            ))}
          </div>

          <div className="carousel absolute">
            <div className="list">
              {carouselItems.map((item) => (
                <div key={item.id} className="item">
                  <div className="content">
                    <div className="author">{item.author}</div>
                    <div className="title">{item.title1}</div>
                    <div className="topic">{item.title2}</div>
                    <div className="des">{item.topic}</div>
                    <div className='flex btn'>
                      <div className='icon w-10 h-10 bg-yellow-500 rounded-full m-5 flex justify-center'>
                        <div className=' m-auto text-[20px]'><FaBookmark /></div>
                      </div>
                      <div className="buttons">
                        <button>DISCOVER LOCATION</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="controls">
            <button className="control-btn" id="prev" onClick={() => showSlider('prev')}>&lt;</button>
            <button className="control-btn" id="next" onClick={() => showSlider('next')}>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
