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
        <>
            <h1><span className="purple">Be the change</span>, donate to women in need blah blah. </h1>
            <p className='body22'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Maecenas mattis volutpat felis vitae dignissim. Nullam eget 
                quam dui. Sed sit amet odio lacinia, malesuada justo vitae, 
                sollicitudin massa. Nam pretium vestibulum sollicitudin. Curabitur
                lobortis at dolor id porta. Aliquam lobortis erat nibh, nec
                porta dui fringilla in.
            </p>
            <Button variant="contained" color="primary">Volunteer</Button>
        </>
        )
    }
}


export class NewsSign extends React.Component{
    render(){
       
        return(
                <div className='colored-box'>
                    <div> 
                        <h2>Sign up for our mailing list</h2>
                        <p className='body20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis volutpat felis</p>
                    </div>
                    <div>
                        <InputField/>
                        <Button variant="contained" color="primary">Join the Mailing List</Button>
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


