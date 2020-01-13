
/* eslint-disable */
import axios from 'axios';
import storage from './storage';

const request = axios.create({
  // process.env.NODE_ENV === 'dev' 来判断环境
  baseURL: '',
  timeout: 10000
});

/*
request.interceptors.request.use(
  config => {
    const token = storage.get('token');
    config.headers.Authorization = token;

    return config;
  },
  error => {
    console.log(error);
    return Promise.reject();
  }
);

request.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data;
    } else {
      Promise.reject();
    }
  },
  error => {
    if(error.response.status == 401){
      alert("登录已失效，请重新登录");
      window.location.href = '#/login'
    }
    console.log(error);
    return Promise.reject();
  }
);
*/

export default request;
