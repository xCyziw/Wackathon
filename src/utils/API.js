import axios from 'axios';

export default {

  volunteerSignup: function(query){
        return axios.post("https://uplift-backend.herokuapp.com/api/volunteer/signup/" + query);
    // return axios.post("http://localhost:3000/api/volunteer/signup/" + query);
  },

  //route that needs to test
  imageUpload: function(query){
    return axios.post("https://uplift-backend.herokuapp.com/api/image/image-upload/" + query);
    // return axios.post("http://localhost:3000/api/image/image-upload" + query);
  },

  newsletterSignup: function(query){
    return axios.post("https://uplift-backend.herokuapp.com/api/letter/newsletter/" + query);
    // return axios.post("http://localhost:3000/api/letter/newsletter/" + query);
  },

  dropoffFurniture: function(query){
    return axios.post("https://uplift-backend.herokuapp.com/api/drop/furniture/" + query);
    // return axios.post("http://localhost:3000/api/drop/furniture/" + query);
  }
}