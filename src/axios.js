import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://double-dbd52.firebaseio.com/'
})

export default instance;