import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                        <button className="navButton"><Link to='/'>Mission</Link></button>
                        <button className="navButton"><Link to='/'>Volunteer</Link></button>
                        <button className="donate"><Link to='/donate'>Donate Furniture</Link></button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default index;
