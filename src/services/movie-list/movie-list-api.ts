import { baseApi } from '@/services/base-api'
import {
  GetMoviesRequest,
  MovieListResponseType,
  MovieWithDatesResponseType,
} from '@/services/movie-list/movie-list-types'

export const movieListApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getMovies: builder.query<MovieListResponseType, GetMoviesRequest | void>({
      providesTags: ['Movies'],
      query: args => ({
        params: args ?? undefined,
        url: 'discover/movie',
      }),
    }),
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
  useGetMoviesQuery,
  useGetNowPlayingMoviesListQuery,
  useGetPopularMoviesListQuery,
  useGetTopRatedMoviesListQuery,
  useGetUpcomingMoviesListQuery,
} = movieListApi
