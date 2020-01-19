import React, { Component } from 'react';
import './style.css';
import People from "../../assets/images/img-3.jfif";
import Dad from "../../assets/images/img-4.jfif";
import Mom from "../../assets/images/img-5.jfif";



class index extends Component {
    render() {
        return (
            <div className="container">
                <div className="mission">
                    <div className="missionRow">
                        <h1>[Uplifting women and children coming out of homelessness]</h1>
                        <div className="line"></div>
                    </div>
                    <div>
                        <div >
                            <h2 className="missionTitle">MISSION</h2>
                            <p className="missionInfo">Uplift is a local nonprofit that creates warm and welcoming homes for women and children coming out of homelessness. We collect donated bedding, decorative home furnishings, pantry items and kitchen tools to providea fully equipped, safe, and comfortable home from which they can recover from trauma and launch into their new lives. Our mission is to show community support and encouragement by providing a cheerful, decorated home where a new journey can begin with confidence and hope.
                            </p>
                        </div>
                    </div>
                    <div className="missionRow">
                        <div className="column">
                        <img src={People} alt="People" className="missionImage" />
                        </div>
                        <div className="column">
                        <img src={Dad} alt="Dad" className="missionImage" />
                        </div>
                        <div className="column">
                        <img src={Mom} alt="Mom" className="missionImage" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;
