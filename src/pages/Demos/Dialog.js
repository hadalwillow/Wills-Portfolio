import React from 'react';


function Dialog() {
    return (
        <div id="dialog">
            <h1>Projects</h1>
            <h2>Current Projects</h2>
            <h3> Portfolio Website Buglist</h3>
            <ul>
                <li>The radio won't turn off on the main page, something to do with react useState</li>
            </ul>
            
            <h2>Personal Project Archive</h2>
            <h3>Plastic-Free Razors</h3>
                <p>My personal experience switching from Flamingo razors to an all-metal razor that takes straight blades instead of plastic heads. Factored into starting cost was the cost
                    of both razors. It is important, as with all personal projects, to keep in mind that these results are very specific to me. I use a razor head for a total of one month 
                    before I switch it out with another one, for example. I am also very clumsy, and cannot use a more simple, and therefor cheaper, straight razor. 
                </p>
        </div>
    );
}

export default Dialog;