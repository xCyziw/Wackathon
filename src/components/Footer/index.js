import React from 'react';
import Facebook from "../../assets/icons/iconfinder_facebook_circle_color_107175 1.svg";
import Ig from "../../assets/icons/iconfinder_instagram_circle_color_107172 1.svg";
import Twitter from "../../assets/icons/iconfinder_twitter_circle_color_107170 1.svg";
import Youtube from "../../assets/icons/iconfinder_youtube_circle_color_107167 1.svg";


class index extends React.Component{
    render(){
        return(
            <footer>
                <div>
                    <ul className="footerLinks">
                        <li><a href="#e">Mission</a></li>
                        <li><a href="#z">Volunteer</a></li>
                        <li><a href="#b">Donate</a></li>
                        <li><a href="#c">Contact</a></li>
                    </ul>

                    <ul className="footerIcons">
                        <li><img src={Facebook} alt='yea'></img></li>
                        <li><img src= {Ig} alt='yea'></img></li>
                        <li><img src={Twitter} alt='yea'></img></li>
                        <li><img src={Youtube} alt='yea'></img></li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default index;