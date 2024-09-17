import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
});


// intercept every request and add Authorization header with the Bearer token
// if the token is not present in local storage, the request will be sent without the Authorization header
// and the authentication middleware will redirect the user to the login page
// if the response status is 401, remove the token from local storage so that the user will be logged out
axiosClient.interceptors.request.use((config) =>{
  const token = localStorage.getItem("ACCESS_TOKEN");
  config.headers.Authorization = `Bearer ${token}`
  return config;
})

// intercept every response and check if the status is 401
// if it is, remove the token from local storage and rethrow the error
axiosClient.interceptors.response.use((response) =>{
  return response;
}, (error) =>{
  const {response} = error;
  if(response.status === 401){
    localStorage.removeItem("ACCESS_TOKEN")
  }
  throw error;
})

export default axiosClient;
