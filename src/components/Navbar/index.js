import React, { Component } from 'react';
import './style.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class index extends Component {
    render() {
        return (
            
            <div className="navbar" style={{background: "#D4DFEC"}}>
                <AppBar position="static" className="bar page-container" style={{background: "#D4DFEC"}} >
                    <Toolbar>
                        <Typography variant="h5" className="title">
                            Uplift
                        </Typography>
                        <button className="navButton">Mission</button>
                        <button className="navButton">Volunteer</button>
                        <button className="donate">Donate Furniture</button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default index;
