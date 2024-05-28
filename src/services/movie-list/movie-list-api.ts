import { baseApi } from '@/services/base-api'
import {
  MovieListResponseType,
  MovieWithDatesResponseType,
} from '@/services/movie-list/movie-list-types'

export const movieListApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getNowPlayingMoviesList: builder.query<MovieWithDatesResponseType, void>({
      providesTags: ['MovieList'],
      query: () => ({
        url: 'movie/now_playing',
      }),
    }),
    getPopularMoviesList: builder.query<MovieListResponseType, void>({
      providesTags: ['MovieList'],
      query: () => ({
        url: 'movie/popular',
      }),
    }),
    getTopRatedMoviesList: builder.query<MovieListResponseType, void>({
      providesTags: ['MovieList'],
      query: () => ({
        url: 'movie/top_rated',
      }),
    }),
    getUpcomingMoviesList: builder.query<MovieWithDatesResponseType, void>({
      providesTags: ['MovieList'],
      query: () => ({
        url: 'movie/upcoming',
      }),
    }),
  }),
})

export const {
  useGetNowPlayingMoviesListQuery,
  useGetPopularMoviesListQuery,
  useGetTopRatedMoviesListQuery,
  useGetUpcomingMoviesListQuery,
} = movieListApi
