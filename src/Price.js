import React from "react";
import './styles/Price.scss';
import Path from './images/Path.png';

function Price() {
    return(
        <div className="wrap">
            <div className="path">
                <img src={Path} alt="" />
                <div className="path-text">
                    <h1>A Price To Suit Everyone</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                    </p>
                    <div className="path-price">
                        <h1>40$</h1>
                        <p>UI Design Kit</p>
                    </div>
                    <div className="path-btn">
                        <p>See, One price. Simple.</p>
                        <button type="submit" className="btn-path">
                            27593979-2D30-4AFB-A339-BCE88A32C28C
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price;