import React, { Component } from 'react';
import './style.css';
import Woman from "../../assets/images/img-2.jfif";
import Family from "../../assets/images/img-1.jpg";
class index extends Component {
    render() {
        return (
            <>
                <div className="home">
                    <div className="row">
                        <div className="column">
                            <h1>Welcome</h1>
                            <p className="homeInfo">
                                Uplifting homeless women and children to find a home, and to provide them with a warm and welcoming home.
                            </p>
                            <button className="button-round-primary">Learn More</button>
                        </div>
                        <div className="column">
                            <img src={Woman} alt="woman" className="woman" />
                            <img src={Family} alt="family" className="family" />
                        </div>

                    </div>
                </div>
                
            </>
        );
    }
}

export default index;
