import Axios from 'axios';
import Swal from 'sweetalert2';


// Headers required to make calls to the backend
const headers = {
  // Authorization: 'bearer <token>'
};

// Any default parameters can go in here.
const params = {};

// Aura server instance
const instance = Axios.create({
  baseURL: process.env.STAY_SMITTEN_SERVER_API,
  timeout: 20000,
  headers,
  params,
});

export default instance;

// ========================== Error Handling ==============================

export const alertErrorHandler = error => {
  if (error.response) {
    // Any valid / expected errors due to client error
    Swal.fire({
      type: 'error',
      text: `${error.response.status}: ${error.response.data.message}`,
    });
  } else if (error.request) {
    // The request was made but no response was received
    Swal.fire({
      type: 'error',
      text: `The request you made was not sent properly, our our server is not responding. Please try again later.`,
    });
  } else {
    // Something went very wrong
    Swal.fire({
      type: 'error',
      text: `Something is wrong with our system. Please try again later.`,
    });
  }
};
