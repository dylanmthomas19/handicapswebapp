import React from 'react';
import metris1 from '../../assets/images/Metris-2016-a.jpg';
import metris2 from '../../assets/images/Metris-2016-b.jpg';
import metris3 from '../../assets/images/Metris-2016-c.jpg';
import {Carousel} from 'react-bootstrap';

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
        </Carousel>;        <p className="App-intro">
            Placeholder text about the company
        </p>

    </div>
)

export default Home;