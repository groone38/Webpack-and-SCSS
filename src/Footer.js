import React from "react";
import './styles/Footer.scss';
import fb from './images/fb.png';
import In from './images/In.png';
import twitter from './images/twitter.png';
import youtube from './images/youtube.png';
import Instagram from './images/Instagram.png';

function Footer() {
    return(
        <footer>
            <div className="footer-top">
                <p>©2019 UIX</p>
                <h2>Landie</h2>
                <button type="submit">
                    ECD6D6E8-ABBE-4B2D
                </button>
            </div>
            <hr/>
            <div className="footer-bot">
                <nav className="nav-list">
                    <ul className="nav-text">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <nav className="nav-social">
                    <img src={fb} alt="" />
                    <img src={In} alt="" />
                    <img src={twitter} alt="" />
                    <img src={youtube} alt="" />
                    <img src={Instagram} alt="" />
                </nav>
            </div>
        </footer>
    )
}

export default Footer;