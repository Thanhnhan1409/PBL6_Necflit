import axiosApiInstance from '../plugins/api'
import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_API_URL

export const popularMoviesApi = async (page: number = 1) => {
    return await axiosApiInstance.get(`/tmdb-movies/polular?page=${page}`)
}

export const trendingMoviesApi = async (page: number = 1) => {
    return await axiosApiInstance.get(`/tmdb-movies/trending?page=${page}`)
}

export const tvPopularMoviesApi = async (page: number = 1) => {
    return await axiosApiInstance.get(`/tmdb-movies/tv/polular?page=${page}`)
}

export const tvTrendingMoviesApi = async (page: number = 1) => {
    return await axiosApiInstance.get(`/tmdb-movies/tv/trending?page=${page}`)
}

export const detailMovieApi = async (id: number) => {
    return await axiosApiInstance.get(`/tmdb-movies/?movie_id=${id}`)
}
