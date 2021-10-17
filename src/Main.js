import React from "react";
import './styles/Main.scss';
import designer from './images/designer.png';


function Main() {
    return (
        
            <div className="main">
                <div className="main-text">
                    <div className="text">
                    <h2>Introduce Your Product Quickly and Effectively</h2>
                    <p>
                        Introduce Your Product Quickly and Effectively
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                        <p>
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                            Purchase UI Kit
                            Learn More
                        </p>
                    </div>
                    <div className="nain-text-btn">
                        <button type="submit" className="text-btn">Purchase UI Kit</button>
                        <button type="submit" className="text-btn2">Learn More</button>
                    </div>
                </div>
                <div className="main-img">
                    <img src={designer} alt="" className="design"/>
                </div>
            </div>
        
    )
}

export default Main;