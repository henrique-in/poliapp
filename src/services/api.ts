import axios from 'axios';
import {API_URL, API_FRASES} from '@env';

export const api = axios.create({
  baseURL: API_URL,
});

export const apiFrases = axios.create({
  baseURL: API_FRASES,
});
