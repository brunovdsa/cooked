import axios from 'axios';

export const API_URL = 'https://api.spoonacular.com/';

export const API_KEY = 'd6975baa123a40de893534a79f73c14a';

export const API = axios.create({
  baseURL: API_URL,
});
