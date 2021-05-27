/* @ts-ignore */

import Axios from '/axios';

export const weatherApi = Axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    timeout: 8000
  })