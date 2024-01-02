import React from 'react';
import Graph1 from '../media/razorcostanalysis.png';
import '../css/Projects.css';

function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <h2>Current Projects</h2>
            <h3>Basin Washing</h3>
                <p>Concept: Contained personal study experimenting with the effectiveness of washing via basin and washcloth only</p>
                <p>Outline: Month-long project (in the name of my fiancee's sanity). My usual routine is to shower when my hair feels dirty or when I feel the need to. One month 
                    of taking this same urge and instead using a basin and flannel to wash.
                </p>
                <p>Resources Used: Preliminary research suggests that basin (or bed) baths are common in the medical industry to help people who cannot leave their bed for 
                    medical reasons. <a href="https://journals.lww.com/homehealthcarenurseonline/citation/2016/06000/reducing_the_risk_of_infection_when_using_a_bath.10.aspx">This</a> article was a fascinating tidbit. 
                </p>
                <p>Considerations: I am a highly sedentary person, so I will not need the same sweat protection as someone who works out a lot, or who does manual labor for their 
                    profession. 
                </p>
                <p>Supplies: You'd better believe I'm going to use this as an excuse to treat myself to something pretty. I need a basin, washcloth, and a nice pitcher. Thinking 
                    porcelain? Some ideas include <a href="https://www.ebay.com/itm/304580445836">this</a>, although too expensive, and <a href="https://www.etsy.com/listing/1592461445">this</a>.
                </p>
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