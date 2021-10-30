import React from 'react';
import Banner from '../../components/Banner/Banner';
import Benefits from '../../components/Benefits/Benefits';
import Packages from '../../components/Packages/Packages';
import VideoBg from '../../components/VideoBg/VideoBg';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <Benefits></Benefits>
            <VideoBg></VideoBg>
        </div>
    );
};

export default Home;