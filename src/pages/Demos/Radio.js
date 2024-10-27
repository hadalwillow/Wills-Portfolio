import React from 'react';
import { useState } from 'react';
import underwater from '../../media/audio/underwater.mp3';
import radioIMGStatic from "../../media/img/Radio.png";
import radioIMGAnimation from "../../media/img/Radio - Note Animation.gif"
import useSound from 'use-sound';


function Radio() {
        
    const [play, { stop }] = useSound(underwater);
    let radioPlaying;
    const [radioDisplay, setRadioDisplay] = useState(radioIMGStatic);

const radioPlayButton = () => {
    console.log("the radio was clicked");
    if(radioPlaying) {
        stop();
        radioPlaying = false;
        setRadioDisplay(radioIMGStatic);
        console.log("The radio is off");
    } else {
        play();
        radioPlaying = true;
        setRadioDisplay(radioIMGAnimation);
        console.log("The radio is on");
    }
}
    return (
        <div>
        <img src={radioDisplay} alt="Pixel Art Radio" onClick={radioPlayButton}></img>
        </div>
    );
}

export default Radio;