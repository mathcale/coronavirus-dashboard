import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://covid19.mathdro.id/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

export const apiAlternate = axios.create({
  baseURL: 'http://coronavirus-tracker-api.herokuapp.com/v2',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
})
