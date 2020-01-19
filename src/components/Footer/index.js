import React from 'react';
import Facebook from "../../assets/icons/iconfinder_facebook_circle_color_107175 1.svg";
import Ig from "../../assets/icons/iconfinder_instagram_circle_color_107172 1.svg";
import Twitter from "../../assets/icons/iconfinder_twitter_circle_color_107170 1.svg";
import Youtube from "../../assets/icons/iconfinder_youtube_circle_color_107167 1.svg";
import './style.css';

class index extends React.Component{
    render(){
        return(
            <footer>
                <div>
                    <span className="footerLinks">
                        <a href="#e">Mission</a>
                        <a href="#z">Volunteer</a>
                        <a href="#b">Donate</a>
                        <a href="#c">Contact</a>
                    </span>

                    <span className="footerIcons">
                        <img src={Facebook} alt='yea'></img>
                        <img src= {Ig} alt='yea'></img>
                        <img src={Twitter} alt='yea'></img>
                        <img src={Youtube} alt='yea'></img>
                    </span>
                </div>
            </footer>
        )
    }
}

export default index;
