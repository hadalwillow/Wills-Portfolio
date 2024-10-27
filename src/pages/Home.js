import React from 'react';
import { useState } from 'react';
import '../css/Home.css';
import underwater from '../media/underwater.mp3';
import radioIMGStatic from "../media/Radio.png";
import radioIMGAnimation from "../media/Radio - Note Animation.gif"

function Home() {
        
        let currentSong = new Audio(underwater)
        let radioPlaying = false;
        const [radioDisplay, setRadioDisplay] = useState(radioIMGStatic);

    const radioPlayButton = () => {
        if(radioPlaying) {
            currentSong.pause()
            radioPlaying = false;
            setRadioDisplay(radioIMGStatic);
        } else {
            currentSong.play();
            radioPlaying = true;
            setRadioDisplay(radioIMGAnimation);
        }
    }

    return (
        <div id="home">
        <h1>My name is Willow Phillips.  I'm a creative with a passing interest in everything all the time. Welcome, please dive in.</h1>
        <h2>Click the radio for ambience, then dive by scrolling down</h2>
        <img src={radioDisplay} alt="Pixel Art Radio" onClick={radioPlayButton} height="5%"></img>
        
        <div class="zone" id="epipelagic">
            <h2>Epipelagic Zone - The Sunlight Zone</h2>
            <h3> Surface level to 200 meters below.</h3>
        </div>
        <div class="zone" id="mesopelagic">
            <h2>Mesopelagic Zone - The Twilight Zone</h2>
            <h3>200 to 1000 meters below sea level.</h3>
        </div>
        <div class="zone" id="bathypelagic">
            <h2>Bathypelagic Zone - The Midnight Zone</h2>
            <h3>1000 to 4000 meters below sea level.</h3>
        </div>
        <div class="zone" id="abyssopelagic">
            <h2>Abyssopelagic Zone - The Abyssal Zone</h2>
            <h3>4000 to 6000 meters below sea level.</h3>
        </div>
        <div class="zone" id="hadalpelagic">
            <h2>Hadalpelagic Zone - The Hadal Zone</h2>
            <p>(also known as - The Trenches)</p>
            <h3>6000 to 11000 meters below sea level.</h3>
                <h2>Welcome to the bottom of the ocean, where I've made my humble abode </h2>
        </div>
        </div>
    );
}

export default Home;