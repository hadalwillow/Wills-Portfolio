import React from 'react';
import '../css/Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
        <h1>Hi, my name is Willow
        </h1>
        <h2>I'm a creative who specializes in programming, writing, pixel art, and championing projects from scratch</h2>
        <h2>Here are some pictures of my work!</h2>
        <p> If you want to contact me about a project you're on, please click HERE. If you're interested in seeing some of the things I've made recently, click <Link to="/projects">HERE</Link>.</p>
        <p>I'm very passionate about preserving forgotten or almost-forgotten historical practices and facts, so if you're interested in my Archive, click <Link to="/archive">HERE</Link>.</p>
        </div>
    );
}

export default Home;