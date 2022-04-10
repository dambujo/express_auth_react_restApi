import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/autha';

const getPublicContent = () => {
  return axios.get(API_URL + 'all');
};

const getUserBoard = () => {
  return axios.get(API_URL + 'user', { headers: authHeader() });
};
const getModeratorBoard = () => {
  return axios.get(API_URL + 'mod', { headers: authHeader() });
};
const getAdminrBoard = () => {
  return axios.get(API_URL + 'admin', { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminrBoard,
};
