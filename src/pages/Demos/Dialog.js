import React from 'react';
import "../../css/Dialog.css"
import WillowBase from "../../media/img/WillowBase.png";

function Dialog() {

    let dialogText = "Hello! This is more text asdioujhapoisdhpasudhfiasuhdfiauhwef9hwe9spfh9spa8ehfasodifjhpasudhfiasuhdfioasuhfahewf98ha9p8hefp9awehf9pashefp"

    return (
        <div id="dialog">
            <div id="dialogbox">
                <div id="textCSS"><p>{dialogText}</p></div>
                <div id="characterbox"><img id="talkingCharacter" src={WillowBase} alt="Willow Base Character Expression"></img></div>
            </div>
        </div>
    );
}

export default Dialog;