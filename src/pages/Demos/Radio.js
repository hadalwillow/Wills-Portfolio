import React from 'react';
import { useState } from 'react';
import underwater from '../../media/audio/underwater.mp3';
import radioIMGStatic from "../../media/img/Radio.png";
import radioIMGAnimation from "../../media/img/Radio - Note Animation.gif"


function Radio() {
        
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
        <div>
        <img src={radioDisplay} alt="Pixel Art Radio" onClick={radioPlayButton}></img>
        </div>
    );
}

export default Radio;