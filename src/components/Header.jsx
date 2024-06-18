import React, { useState } from 'react'

function Header() {
    const [isClicked, setIsClicked] = useState(false);
    function handleClick() {
      setIsClicked(!isClicked);
    }
  return (
    <header>
      <div id="navbar">
        <h1>Neeraj Upadhyay</h1>
        <div className="container">
          <img
            id="menu"
            src="./asset/icons8-slide-up-50.png"
            alt="Menu Icon"
            onClick={handleClick}
            className={`${isClicked ? "rotated" : ""}`}
          />
          <nav className={`navbar ${isClicked ? "active" : ""}`}>
            <a href="#skills" className="nav-item" onClick={handleClick}>
              Skills
            </a>
            <a href="#projects" className="nav-item" onClick={handleClick}>
              Projects
            </a>
            <a href="#resume" className="nav-item" onClick={handleClick}>
              Resume
            </a>
            <a href="#contact" className="nav-item" onClick={handleClick}>
              Contact Me
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header