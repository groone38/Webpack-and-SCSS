import React from "react";
import './styles/Header.scss';

function Header() {
    return(
        
        <header className="header">
            <nav className="nav-list">
                <ul className="nav-text">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div className="logo">
                <h2>Landie</h2>
            </div>
            <button type="submit" className="nav-btn">Buy Now</button>
        </header>
        
    )
}

export default Header;