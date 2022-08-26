import axios from 'axios';
import Amplify from '../services/Amplify';

const instance = axios.create({
  baseURL: 'http://localhost:8080/',
});

instance.interceptors.request.use((config) => {
  const newConfig = { ...config };
  newConfig.headers = {
    ...newConfig.headers,
    Authorization: Amplify.userAccessToken.getValue(),
  };

  return newConfig;
});

export default instance;
