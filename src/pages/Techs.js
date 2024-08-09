import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../styles/Techs.css';

function Techs() {
  const images = [
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg', alt: 'React' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg', alt: 'Node.js' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg', alt: 'Python' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg', alt: 'MySQL' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg', alt: 'Java' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg', alt: 'C#' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original-wordmark.svg', alt: 'Ruby' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const { transform } = useSpring({
    transform: `rotateY(${currentIndex * -45}deg)`,
    config: { tension: 300, friction: 30 },
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <section id="techs">
      <h2>Technologies</h2>
      <div className="carousel">
        <animated.div className="carousel-inner" style={{ transform }}>
          {images.map((image, index) => (
            <div className="carousel-item" key={index} style={{ transform: `rotateY(${index * 45}deg) translateZ(300px)` }}>
              <img src={image.src} alt={image.alt} draggable="false" />
            </div>
          ))}
        </animated.div>
        <div className="arrow left" onClick={handlePrev}>&#9664;</div>
        <div className="arrow right" onClick={handleNext}>&#9654;</div>
      </div>
    </section>
  );
}

export default Techs;