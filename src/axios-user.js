import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/http://159.89.195.61:9080/'
});

export default instance;