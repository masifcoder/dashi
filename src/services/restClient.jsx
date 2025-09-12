import axios from "axios";


const restClient = axios.create({
  baseURL: 'http://localhost:9001'
});


// Add a request interceptor
restClient.interceptors.request.use(function (config) {
  // Do something before request is sent    
    const token = localStorage.getItem('token');

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


export default restClient;