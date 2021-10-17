import React from "react";
import icon from './images/icon.png';
import girl from './images/girl.png';
import './styles/Main2.scss';

function Main2() {
    return(
        
            <div className="main">
                <div className="main-block">
                    <div className="main-text">
                        <h1>Light, Fast and Powerful</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                        </p>
                        <p>
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                        <div className="main-card">
                            <div className="card">
                                <img src={icon} alt="" />
                                <h3>Title Goes Here</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                </p>
                            </div>
                            <div className="card">
                                <img src={icon} alt="" />
                                <h3>Title Goes Here</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-img">
                    <img src={girl} alt="" />
                </div>
            </div>
        
    )
}

export default Main2;