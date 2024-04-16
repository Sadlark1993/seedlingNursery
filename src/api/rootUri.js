//next line gets the actual server ip as the API URI
//export default 'http://' + location.hostname + ':8080';

//next line stets the API URI from the environment variable.
export default 'http://' + process.env.REACT_APP_API_URI + ':8080';
