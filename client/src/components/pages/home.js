import React from 'react';
import metris1 from '../../assets/images/Metris-2016-a.jpg';
import metris2 from '../../assets/images/Metris-2016-b.jpg';
import metris3 from '../../assets/images/Metris-2016-c.jpg';
import { Carousel } from 'react-bootstrap';

const Home = () => (

    <div>
        <Carousel>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src={metris1} />
                <Carousel.Caption>
                    <h3>2016 Mercedes Metris Superarm View from Outside</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src={metris2} />
                <Carousel.Caption>
                    <h3>2016 Mercedes Metris with wheelchair</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src={metris3} />
                <Carousel.Caption>
                    <h3>2016 Mercedes Metris Door Close-Up</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div id="homeTabHolder">
            <div className="homeTab">
                <img alt="Jerry, Founder" />
                <h3>
                    Perfect for all
                </h3>
                <p>
                    The need for a hand driving control for disabled persons was realized in 1954.
                </p>
                <button href="#"/>
            </div>
            <div className="homeTab">
                <img alt="MP, user"/>
                <h3>Gallery</h3>
                <p>Would you like to see more? Click here to check out our gallery section!</p>
                <button href="#"/>
            </div>
            <div className="homeTab">
                <img alt="User on Sling"/>
                <h3>Powerful Framwork</h3>
                <p>Have any questions? Contact us today for assistance</p>
                <button href="#"/>
            </div>
        </div>
    </div>
)

export default Home;