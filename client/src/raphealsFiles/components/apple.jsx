import React, { useState } from 'react';

const images = [
  'https://via.placeholder.com/300/FF5733',
  'https://via.placeholder.com/300/33FF57',
  'https://via.placeholder.com/300/3357FF',
  'https://via.placeholder.com/300/FF33F6',
  'https://via.placeholder.com/300/33FFF9',
];

function Applejsx() {
  const [randomImage, setRandomImage] = useState(images[0]);

  const generateRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Apple Is The Best!</h1>
        <nav>
          <a href="#">Mac</a>
          <a href="#">iPad</a>
          <a href="#">iPhone</a>
          <a href="#">Watch</a>
          <a href="#">TV</a>
          <a href="#">Music</a>
          <a href="#">Support</a>
        </nav>
      </header>
      <main>
        <div className="image-container">
          <img src={randomImage} alt="Random" />
        </div>
        <button onClick={generateRandomImage}>Generate Random Image</button>
      </main>
    </div>
  );
}

export default Applejsx;
