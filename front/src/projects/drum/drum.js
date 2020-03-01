import React from 'react'

import  back from '../../utils/backArrow.png'
import { NavLink } from "react-router-dom";


import "./drum.scss"


export default function Drums(){
    
    function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-keys="${e.keyCode}"]`);
        if (!audio) return;
    
        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
    }
    window.addEventListener('keydown', playSound);



    window.addEventListener('keyup', function (e) {
        const key = document.querySelector(`div[data-keys="${e.keyCode}"]`)
        if(key && key.classList.contains('playing')) key.classList.remove('playing');
    });
    

    return(
        <div className="keys">
            <NavLink to="/projectlist" exact className="notification_link"><img style={{width: '30px', height:'30px', display: 'flex'}}src={back}/></NavLink>
            <div data-keys="65" className="key">
                <audio data-key="65" src="src\components\tabs\drum\sounds\African drums 1.wav"></audio>
                <kbd>A</kbd>
                <span className="sound">Clap</span>
            </div>
            <div data-keys="83" className="key">
            <audio data-key="83" src="https://github.com/Joyining/JavaScript30/blob/master/01%20-%20JavaScript%20Drum%20Kit/sounds/hihat.wav?raw=true"></audio>                <kbd>S</kbd>
                <span className="sound">Hi Hat</span>
            </div>
            <div data-keys="68" className="key">
            <audio data-key="68" src="https://github.com/Joyining/JavaScript30/blob/master/01%20-%20JavaScript%20Drum%20Kit/sounds/kick.wav?raw=true"></audio>                <kbd>D</kbd>
                <span className="sound">Kick</span>
            </div>
            <div data-keys="70" className="key">
            <audio data-key="70" src="https://github.com/Joyining/JavaScript30/blob/master/01%20-%20JavaScript%20Drum%20Kit/sounds/openhat.wav?raw=true"></audio>                <kbd>F</kbd>
                <span className="sound">Open Hat</span>
            </div>
            <div data-keys="71" className="key">
            <audio data-key="71" src="https://github.com/Joyining/JavaScript30/blob/master/01%20-%20JavaScript%20Drum%20Kit/sounds/boom.wav?raw=true"></audio>                <kbd>G</kbd>
                <span className="sound">Boom</span>
            </div>
            <div data-keys="72" className="key">
            <audio data-key="72" src="https://github.com/Joyining/JavaScript30/blob/master/01%20-%20JavaScript%20Drum%20Kit/sounds/ride.wav?raw=true"></audio>                <kbd>H</kbd>
                <span className="sound">Ride</span>
            </div>
            <div data-keys="74" className="key">
            <audio data-key="74" src="https://github.com/Joyining/JavaScript30/blob/master/01%20-%20JavaScript%20Drum%20Kit/sounds/snare.wav?raw=true"></audio>                <kbd>J</kbd>
                <span className="sound">Snare</span>
            </div>
            <div data-keys="75" className="key">
            <audio data-key="75" src="https://github.com/Joyining/JavaScript30/blob/master/01%20-%20JavaScript%20Drum%20Kit/sounds/tom.wav?raw=true"></audio>                <kbd>K</kbd>
                <span className="sound">Tom</span>
            </div>
            <div data-keys="76" className="key">
            <audio data-key="76" src="https://github.com/Joyining/JavaScript30/blob/master/01%20-%20JavaScript%20Drum%20Kit/sounds/tink.wav?raw=true"></audio>                <kbd>L</kbd>
                <span className="sound">Tink</span>
            </div>
        </div>
    )
}