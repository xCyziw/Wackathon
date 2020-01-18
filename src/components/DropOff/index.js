import React, { Component } from 'react'
import API from "../../utils/API"
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
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
