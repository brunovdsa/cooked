import axios from 'axios';

export const API_URL = 'https://api.spoonacular.com/';

export const API_KEY = 'fe1c16c2f10d441bb87b9e1ce6ebb677';

export const API = axios.create({
  baseURL: API_URL,
});
