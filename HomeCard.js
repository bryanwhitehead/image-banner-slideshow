import React, { useState, useEffect, useRef } from 'react';

import './css/Home.css';

import image1 from './images/picture_scroll1.jpg'
import image2 from './images/picture_scroll2.jpg'
import image3 from './images/picture_scroll3.jpg'
import image4 from './images/picture_scroll4.jpg'
import image5 from './images/picture_scroll5.jpg'
import image6 from './images/picture_scroll6.jpg'
import image7 from './images/picture_scroll7.jpg'
import image8 from './images/picture_scroll8.jpg'

//  combine this block with above or import as needed.
  const images = [
    { url: image1 },
    { url: image2 },
    { url: image3 },
    { url: image4 },
    { url: image5 },
    { url: image6 },
    { url: image7 },
    { url: image8 }
  ];

function HomeCard (props) {
    const [counter, setCounter] = useState(0);

    setTimeout(() => {
      setCounter(counter+1);
    }, 9000);

    return (
        <div>
          <img className="bannerImage" src={images[counter % 8].url} />
        </div>
      );
}

export default HomeCard;
