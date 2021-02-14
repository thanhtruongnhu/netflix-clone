import axios from 'axios'; //library allows you to make requests to a server

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
});

export default instance;
