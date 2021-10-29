import React from 'react';
import { Container } from 'react-bootstrap';
import './VideoBg.css';
import { AiFillPlayCircle } from "react-icons/ai";

const VideoBg = () => {
    return (
        <div className="video-section">
            <Container>
                <div className="video-container d-flex justify-content-center align-items-center">
                    <div className="video text-center">
                        <a href="#"><AiFillPlayCircle className="play-icon" /></a>
                        <h3 className="text-white">Watch Video</h3>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default VideoBg;