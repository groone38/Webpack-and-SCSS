import React from "react";
import './styles/Main3.scss';
import girl2 from './images/girl2.png';
import girl3 from './images/girl3.png';
import girl4 from './images/girl4.png';


function Main3() {
    return(
        <div>
            <div className="grid-card">
                <div className="grid-block">
                    <div className="block-img">
                        <img src={girl2} alt="" />
                    </div>
                </div>
                    <div className="grid-text">
                        <h1>Light, Fast and Powerful</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        </p>
                        <p>
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                    </div>
            </div>
            <div className="grid-card">
                <div className="grid-block">
                    <div className="block-img">
                        <img src={girl3} alt="" />
                    </div>
                </div>
                    <div className="grid-text">
                        <h1>Light, Fast and Powerful</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        </p>
                        <p>
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                    </div>
            </div>
            <div className="grid-card">
                <div className="grid-block">
                    <div className="block-img">
                        <img src={girl4} alt="" />
                    </div>
                </div>
                    <div className="grid-text">
                        <h1>Light, Fast and Powerful</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        </p>
                        <p>
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                    </div>
            </div>
        </div>
    )
}

export default Main3;