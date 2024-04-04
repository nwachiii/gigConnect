import axios from 'axios';
import {BaseURL_ONE} from '@/constants/routes';

// POST REQUESTS
export const CreateNewAccount = (body) => {
	return axios.post(`${BaseURL_ONE}/auth/signup`, body);
};
export const logInRequest = (body) => {
	// const token = typeof window !== 'undefined' && localStorage.getItem('devToken') !== 'undefined' && JSON.parse(localStorage.getItem('devToken'));

	// const BEARER_TOKEN = {
	// 	headers: {Authorization: `Bearer ${token}`},
	// };
	return axios.post(`${BaseURL_ONE}/auth/login`, body);
};
