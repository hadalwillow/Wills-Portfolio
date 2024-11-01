import React from 'react';
import Graph1 from '../media/img/razorcostanalysis.png';
import '../css/Projects.css';
import { Link } from "react-router-dom";
import Feed from './Demos/Feed';
import useSound from 'use-sound';
import pageTurn from '../media/audio/pageturn.mp3'

function Projects() {
    const [playPageTurn] = useSound(pageTurn)

    return (
        <div id="projects">
            <h1>Projects</h1>
            <h2>Current Projects</h2>
            <h3> Portfolio Website Buglist</h3>
            <ul>
                <li>Revamp the aesthetic</li>
            </ul>
            <h3 onMouseDown={playPageTurn}><Link to="/dialog">Dialog box simulator</Link></h3>
            <h3>Twitter Feed with Mutliple Accounts Test</h3>
            (Notes: Can only pull one feed per embed. Mutliple embeds?)
            {<Feed />}
            
            <h2>Personal Project Archive</h2>
            <h3>Plastic-Free Razors</h3>
                <p>My personal experience switching from Flamingo razors to an all-metal razor that takes straight blades instead of plastic heads. Factored into starting cost was the cost
                    of both razors. It is important, as with all personal projects, to keep in mind that these results are very specific to me. I use a razor head for a total of one month 
                    before I switch it out with another one, for example. I am also very clumsy, and cannot use a more simple, and therefor cheaper, straight razor. 
                    <img src= {Graph1} alt="Graph showing cost analysis between plastic and straight razors" width="80%" height="80%"/>
                </p>
        </div>
    );
}

export default Projects;