import React from 'react';
import Carousel, { autoplayPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './Carousel.css';

import alambic from '../../Assets/img/alambic.jpg';
import vigne from '../../Assets/img/vigne.jpg';
import raisin from '../../Assets/img/raisin.jpg';
import sam from '../../Assets/img/samuel.jpg';
import cave from '../../Assets/img/cave2.jpg';


export default function Carousel2() {


    return (
        <div id="carousel">
            <Carousel
                plugins={[
                    'centered',
                    'infinite',
                    {
                        resolve: autoplayPlugin,
                        options: {
                            
                        },
                    },
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                         numberOfSlides: 3,
                        },
                    },
                ]}
                animationSpeed={1000}
            >
                <img src={alambic} className="imgCarousel" alt="alambic" />
                <img src={vigne} className="imgCarousel" alt="vigne" />
                <img src={raisin} className="imgCarousel" alt="raisin" />
                <img src={sam} className="imgCarousel" alt="sam" />
                <img src={cave} className="imgCarousel" alt="cave" />
            </Carousel>
        </div>
    );
}
