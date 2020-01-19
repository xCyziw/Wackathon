import React, { Component } from 'react';
import './style.css';




class index extends Component {
    render() {
        return (
            <div className="impact-container">
                <div className="impact">
                    <div className="impactRow">
                        <h1>Our impact for women</h1>
                        <div className="line"></div>
                    </div>
                    
                        <div >
                            <p className="impactInfo">Nam condimentum magna non tellus tempus, ac commodo ipsum sagittis. Sed arcu felis, bibendum vitae arcu non, 
                                vestibulum venenatis velit. Donec venenatis venenatis elementum. Nullam efficitur libero ligula, quis vehicula 
                                nulla mattis sed. Cras finibus lobortis elementum.
                            </p>
                        </div>
                    <div className="impacts">
                        <div className="two-column">
                            <div className="item1">
                                <h2>Impact number one</h2>
                                <div className="line2" />
                                <div className="body20">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac arcu nunc. Aenean justo nisl, consectetur sed lobortis et, ultricies ut orci. 
                                </div>
                                <button className="button-round-primary">Learn more</button>
                            </div>
                            <div className="item2">
                            <h2>Impact number two</h2>
                                <div className="line2" />
                                <div className="body20">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac arcu nunc. Aenean justo nisl, consectetur sed lobortis et, ultricies ut orci. 
                                </div>
                                <button className="button-round-primary">Learn more</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default index;
