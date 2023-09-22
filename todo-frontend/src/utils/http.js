import axios from 'axios';
import { SERVER_BASE_URL } from './config';

const instance = axios.create({
    baseURL: SERVER_BASE_URL
});

export default instance;
