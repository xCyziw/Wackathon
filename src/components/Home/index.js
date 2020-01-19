import React, { Component } from 'react';
import './style.css';
import Woman from "../../assets/images/img-2.jfif";
import Family from "../../assets/images/img-1.jpg";
import Mission from '../../components/Mission';
import Impact from '../../components/Impact';
class index extends Component {
    render() {
        return (
            <>
                <div className="home">
                    <div className="row">
                        <div className="column">
                            <h1>Welcome</h1>
                            <p className="homeInfo">
                                Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras enim elit, mattis ac magna non
                        </p>
                            <button className="button-round-primary">Learn More</button>
                        </div>
                        <div className="column">
                            <img src={Woman} alt="woman" className="woman" />
                            <img src={Family} alt="family" className="family" />
                        </div>
                        {/* <Mission />
                        <Impact /> */}

                    </div>
                </div>
                
            </>
        );
    }
}

export default index;
