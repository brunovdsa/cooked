import axios from 'axios';

export const apiKey = 'fe1c16c2f10d441bb87b9e1ce6ebb677';

export const api = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
});
