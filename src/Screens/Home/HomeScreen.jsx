import React from 'react';
import AnnouncementsScreen from '../../Components/Accouncements/AccouncementScreen';
import Navbar from '../../Components/NavBar/NavBar';
import Slider from '../../Components/Slider/Slider';
import './Home.css';

const HomeScreen = () => {
    return (
        <div>
            <AnnouncementsScreen/>
            <Navbar/>
            <Slider/>
        </div>
    );
}

export default HomeScreen;
