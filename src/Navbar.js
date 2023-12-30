import React, {useState} from "react";
import { Link } from "react-router-dom";
import './css/Navbar.css';

function Navbar() {

  const [isShown, setIsShown] = useState(false);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
        <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
          <Link to="/archive">Archive</Link>
      </button>
          {isShown && (
          <Link to="/archive/crochetlace">Crochet Lace</Link>
          )}
        </li>
      </ul>

    </nav>

    
  );
}

export default Navbar;