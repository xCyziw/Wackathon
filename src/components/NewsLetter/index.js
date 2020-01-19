import React from 'react';
import InputField from './input';
import './style.css';

//newsInfo 
//newsSign
//newsFormatted
export class NewsInfo extends React.Component{
    render(){
        return(
            <div className='aye'> 
                <h1 className="linebreak"><span className="purple">Be the change</span>, donate to women in need blah blah. </h1>
                <div>
                    <p className='body22 linebreak'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Maecenas mattis volutpat felis vitae dignissim. Nullam eget 
                        quam dui. Sed sit amet odio lacinia, malesuada justo vitae, 
                        sollicitudin massa. Nam pretium vestibulum sollicitudin. Curabitur
                        lobortis at dolor id porta. Aliquam lobortis erat nibh, nec
                        porta dui fringilla in.
                    </p>
                    <p className='body22'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis volutpat felis vitae dignissim. Nullam eget quam dui.
                    </p>
                </div>
                <button className='button-round-secondary'>Volunteer</button>
            </div>
        )
    }
}


export class NewsSign extends React.Component{
    render(){
       
        return(
                <div className='colored-box'>
                    <div className='colored-content'>
                        <div> 
                            <h2 className="linebreak-small">Sign up for our mailing list</h2>
                            <p className='body20 linebreak'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis volutpat felis</p>
                        </div>
                        <div>
                            <InputField/>
                            <button className='button-fullwidth'>Join the mailing list</button>
                        </div>
                    </div>
                </div>
        )
    }
}

class index extends React.Component{
    render(){
        return(
            <div className='news'>
                <NewsInfo/>
                <NewsSign/>
            </div>
        )
    }
}

export default index;


