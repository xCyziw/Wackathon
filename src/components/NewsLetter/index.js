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
                <h1 className="linebreak"><span className="purple">Be the change</span>, donate to women and children in need! </h1>
                <div>
                    <p className='body22 linebreak'>
                        Sign up for our weekly newsletter to keep up with current <b>Uplift(ing)</b> events. By subscribing to the Uplift newsletter we will update you on our journey 
                        helping homeless women in need in the Seattle Area. Subscribe and we will inform you on opportunities to help you get involved.
                    </p>
                    <p className='body22'>
                        Uplift is a local nonprofit that creates warm and welcoming homes for women and children coming out of homelessness.
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
                            <p className='body20 linebreak'>Enter your first name, last name and email</p>
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


