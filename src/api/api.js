import axios from 'axios';

const API_KEY = 'bf710738886697596fa6467aad04ed86';
const BASE_URL = 'https://api.themoviedb.org/3';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const fetchPopularMovies = () =>
  axiosInstance.get(`/movie/popular?api_key=${API_KEY}`);

export const fetchMovieById = (id) =>
  axiosInstance.get(`/movie/${id}?api_key=${API_KEY}`);

export const searchMovies = (query) =>
  axiosInstance.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
