import axios from 'axios';
import {BaseURL_ONE} from '@/constants/routes';

export const createUserProfile = async body => {
    return axios.post(`${BaseURL_ONE}/talent/profile`, body);
}