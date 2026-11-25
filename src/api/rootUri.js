//next line gets the actual server ip as the API URI
//export default 'http://' + location.hostname + ':8080';

//REACT_APP_API_BASE is set by the production build (nginx proxies /api to the backend).
//Otherwise the API URI comes from the REACT_APP_API_URI environment variable.
export default process.env.REACT_APP_API_BASE ||
  'http://' + process.env.REACT_APP_API_URI + ':8080';
