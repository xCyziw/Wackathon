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
                    <div className="row">
                        <h1>[Vision statement here blahablahdsaklfslfj alkfjaslfjlsajfljslf jlajflajf]</h1>
                        <div className="line"></div>
                    </div>
                    <div>
                        <div >
                            <h2 className="missionTitle">MISSION</h2>
                            <p className="missionInfo">Nam condimentum magna non tellus tempus, ac commodo ipsum sagittis. Sed arcu felis, bibendum vitae arcu non, 
                                vestibulum venenatis velit. Donec venenatis venenatis elementum. Nullam efficitur libero ligula, quis vehicula 
                                nulla mattis sed. Cras finibus lobortis elementum.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                        <img src={People} alt="People" className="missionImage" />
                        </div>
                        <div className="column">
                        <img src={Dad} alt="Dad" className="missionImage missionImage2" />
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
