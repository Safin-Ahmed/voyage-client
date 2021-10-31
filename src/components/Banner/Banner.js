import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/home-1-slide-1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Adventure is Worthwhile with Friends!</h3>
                    <p className="d-none d-sm-block">Discover our brand new friend packages in special discount just for you and your friends!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/home-1-slide-3.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Start Your New Journey with Your Loved One</h3>
                    <p className="d-none d-sm-block">Discover Our Brand New Romantic Tour Packages Customized Just For You In a Special Price</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/home-1-slide-4.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Set Your Next Holiday In Paris With Your Family</h3>
                    <p className="d-none d-sm-block">Discover Our Brand New Packages for Family Trip with Your Family and Loved Ones</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;