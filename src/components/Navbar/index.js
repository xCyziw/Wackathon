import React, { Component } from 'react';
import './style.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class index extends Component {
    render() {
        return (
            <div className="navbar">
                <AppBar position="static" className="bar" style={{background: "#D4DFEC"}} >
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
