import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import API from "../../utils/API";
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
      <div>
        <h1>Drop Off Furniture Information</h1>
        <p>Lorem ipsum</p>
        <form className={this.classes.root} noValidate autoComplete="off">
          <Input placeholder="First Name" inputProps={{ 'aria-label': 'description' }} />
          <Input placeholder="Last Name" inputProps={{ 'aria-label': 'description' }} />
          <Input placeholder="Furniture type" inputProps={{ 'aria-label': 'description' }} />
          <input type='file' id='images' placeholder='images' multiple onChange={this.uploadFile} />
          <Input placeholder="Drop Off Location" inputProps={{ 'aria-label': 'description' }} />
        </form>
      </div>
    )
  }
}
