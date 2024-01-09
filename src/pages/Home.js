import React from 'react';
import '../css/Home.css';

function Home() {
    return (
        <div id="home">
        <h1>My name is Willow Phillips.  I'm a creative with a passing interest in everything all the time. Welcome, please dive in.</h1>
        <div id="epipelagic">
            <h2>Epipelagic Zone - The Sunlight Zone</h2>
            <p> Surface level to 200 meters in depth.</p>
        </div>
        <div id="mesopelagic">
            <h2>Mesopelagic Zone - The Twilight Zone</h2>
            <p>200 to 1000 meters.</p>
        </div>
        <div id="bathypelagic">
            <h2>Bathypelagic Zone - The Midnight Zone</h2>
            <p>1000 to 4000 meters.</p>
        </div>
        <div id="abyssopelagic">
            <h2>Abyssopelagic Zone - The Abyssal Zone</h2>
            <p>4000 to 6000 meters.</p>
        </div>
        <div id="hadalpelagic">
            <h2>Hadalpelagic Zone - The Hadal Zone</h2>
            <h3>(also known as - The Trenches)</h3>
            <p>4000 to 6000 meters.</p>
        </div>
        </div>
    );
}

export default Home;