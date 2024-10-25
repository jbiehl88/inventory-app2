

let apiURL;

if (process.env.NODE_ENV === 'development') {
  apiURL =  'http://localhost:3000/api';
} else {
  apiURL = `${REACT_APP_API_SERVER}:3000/api`
}

export default apiURL;
