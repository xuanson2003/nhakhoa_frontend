import React from 'react';
import Slider from '~/Components/Publish/HeroSlider/Slider';
import Schedule from '~/Components/Publish/Schedule/Schedule';
import Feautes from '~/Components/Publish/Feautes/Feautes';
import FunFact from '~/Components/Publish/FunFact/FunFact';
import Service from '~/Components/Publish/Service/Service';
import CallAction from '~/Components/Publish/CallAction/CallAction';
import Doctor from '~/Components/Publish/Doctor/Doctor';
import Blog from '~/Components/Publish/Blog/Blog';

function Home(props) {
    return (
        <>
            <Slider />
            <Schedule />
            <Feautes />
            <FunFact />
            <Service />
            <CallAction />
            <Doctor />
            <Blog />
        </>
    );
}

export default Home;
