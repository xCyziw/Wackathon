import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import API from "../../utils/API";
import './style.css';
export default class DropOff extends Component {

  state = {
    firstName: "",
    lastName: "",
    furniture: "",
    image: "",
    location: "",
    imageUploadPromise: ""
  }

  uploadFile = e => {
    const files = Array.from(e.target.files)
    this.setState({ uploading: true })

    const formData = new FormData()

    files.forEach((file, i) => {
      formData.append(i, file)
    })

    const request = API.imageUpload(formData)

    this.setState({
      imageUploadPromise: request
    });
  }

  useStyles = (theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  classes = this.useStyles;
  render() {
    return (
      <>
        <div className='location-container'>
          <section className='locations'>
            <h1>Drop off locations</h1>
          </section>

          <section className='address'>

            <section>
              <h4>Seattle Children's Hospital</h4>
              <p>
                4800 Sandpoint Way NE
              <br></br>
                Seattle WA, 98105
              </p>
            </section>

            <section>
              <h4>Seattle Children's Hospital</h4>
              <p>
                4800 Sandpoint Way NE
              <br></br>
                Seattle WA, 98105
              </p>
            </section>

            <section>
              <h4>Seattle Children's Hospital</h4>
              <p>
                4800 Sandpoint Way NE
              <br></br>
                Seattle WA, 98105
              </p>
            </section>

          </section>

          <section className='address1'>

            <section className='address'>
              <h4>Seattle Children's Hospital</h4>
              <p>
                4800 Sandpoint Way NE
              <br></br>
                Seattle WA, 98105
            </p>
            </section>

            <section className='address'>
              <h4>Seattle Children's Hospital</h4>
              <p>
                4800 Sandpoint Way NE
              <br></br>
                Seattle WA, 98105
            </p>
            </section>

            <section className='address'>
              <h4>Seattle Children's Hospital</h4>
              <p>
                4800 Sandpoint Way NE
              <br></br>
                Seattle WA, 98105
            </p>
            </section>

          </section>

        </div>

        <div className="container1">
          <section className="info">
            <h1>Drop Off Furniture Information</h1>
            <p>Lorem ipsum dolor sit amet,</p>
          </section>

          <form className={this.classes.root} noValidate autoComplete="off">
            <section className="firstName">
              <label>
                First Name
            </label><br></br>
              <Input placeholder="First Name" inputProps={{ 'aria-label': 'description' }} />
            </section>

            <section className='lastName'>
              <label>
                Last Name
            </label><br></br>
              <Input placeholder="Last Name" inputProps={{ 'aria-label': 'description' }} />
            </section>

            <section className='furniture'>
              <label>Furniture type</label>
              <br></br>
              <Input placeholder="Furniture type" inputProps={{ 'aria-label': 'description' }} />
            </section>

            <section className='picture'>
              <label>Picture</label><br></br>
              <input className="btn" type='file' id='images' placeholder='images' multiple onChange={this.uploadFile} />
            </section>

            <section className='drop'>
              <label>Drop off Location</label><br></br>
              <Input placeholder="Drop Off Location" inputProps={{ 'aria-label': 'description' }} />
            </section>
          </form>
          
        </div>
      </>
    )
  }
}
