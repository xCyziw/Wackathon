import React from 'react';
import Button from '@material-ui/core/Button';
import InputField from './input';
import './style.css';

//newsInfo 
//newsSign
//newsFormatted
export class NewsInfo extends React.Component{
    render(){
        return(
            <div className='aye'> 
                <h1><span className="purple">Be the change</span>, donate to women in need blah blah. </h1>
                <div>
                    <p className='body22'>
                        Sign up for our weekly newsletter to keep up with current <b>Uplift(ing)</b> events. By subscribing to the Uplift newsletter we will update you on our journey 
                        helping homeless women in need in the Seattle Area. Subscribe and we will inform you on opportunities to help you get involved.
                    </p>
                    <p className='body22'>
                        Uplift is a local nonprofit that creates warm and welcoming homes for women and children coming out of homelessness.
                    </p>
                </div>
                <button className='volunteer'>Volunteer</button>
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
                            <h2>Sign up for our mailing list</h2>
                            <p className='body20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis volutpat felis</p>
                        </div>
                        <div>
                            <InputField/>
                            <Button variant="contained" color="primary">Join the Mailing List</Button>
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


