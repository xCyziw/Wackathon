import React, { Component } from 'react';
import './style.css';




class index extends Component {
    render() {
        return (
            <div className="impact-container">
                <div className="impact">
                    <div className="impactRow">
                        <h1>Our Impact</h1>
                        <div className="line"></div>
                    </div>
                    
                        <div >
                            <p className="impactInfo"> As of 2020 we have helped over 200 households and divorced women in need. We have furnished more than 300 rooms in the Seattle Area with the help of our volunteers. We hope to be able to continue to grow and make a bigger impact in our quest to defeat homelessness in Seattle.
                            </p>
                        </div>
                    <div className="impacts">
                        <div className="two-column">
                            <div className="item1">
                                <h2>Impact number one</h2>
                                <div className="line2" />
                                <div className="body20">
                                We have helped over 200 homeless women as of 2020
                                </div>
                                <button className="button-round-primary">Learn more</button>
                            </div>
                            <div className="item2">
                            <h2>Impact number two</h2>
                                <div className="line2" />
                                <div className="body20">
                                We have relocated more than 500 pieces of furniture to homeless shelters.
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
