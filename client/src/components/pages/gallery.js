import React from 'react';
import metris1 from '../../assets/images/Metris-2016-a.jpg'
import metris2 from '../../assets/images/Metris-2016-b.jpg'
import metris3 from '../../assets/images/Metris-2016-c.jpg'

const Gallery = () => (
    <div>
        <h3>Van Gallery</h3>
        <p>
            Lorem Ipsum Doler Superarm Liftum
        </p>
        <img src={metris1} alt="2000E Mercedes Metris 2016" />
        <img src={metris2} alt="2000E Mercedes Metris 2016" />
        <img src={metris3} alt="2000E Mercedes Metris 2016" />
    </div>
)

export default Gallery;