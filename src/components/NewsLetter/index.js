import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

//newsInfo 
//newsSign
//newsFormatted
export class newsInfo extends React.Component{
    render(){
        return(
        <>
            <h1>Be the change, donate to women in need blah blah. </h1>
            <p>
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

export class newsSign extends React.Component{
    render(){
        const useStyles = makeStyles(theme => ({
            root: {
              '& > *': {
                margin: theme.spacing(1),
                width: 200,
              },
            },
          }));
        const classes = useStyles();
        return(
                <div className='colored-box'>
                    <div> 
                        <h2>Sign up for our mailing list</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis volutpat felis</p>
                    </div>
                    <div>
                        <form className={classes.root} noValidate autoComplete="off">
                            <Input placeholder="First Name" inputProps={{ 'aria-label': 'description' }} />
                            <Input placeholder="Last Name" inputProps={{ 'aria-label': 'description' }} />
                            <Input placeholder="Email" inputProps={{ 'aria-label': 'description' }} />
                        </form>
                        <Button variant="contained" color="primary">Volunteer</Button>
                    </div>
                </div>
        )
    }
}

class index extends React.Component{
    render(){
        return(
            <div className='news'>
                <newsInfo/>
                <newsSign/>
            </div>
        )
    }
}

export default index;


