import { baseApi } from '@/services/base-api'
import { GenreResponseType } from '@/services/genres/genres-types'

export const genresApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getMovieGenres: builder.query<GenreResponseType, void>({
      providesTags: ['Genres'],
      query: () => ({
        url: 'genre/movie/list',
      }),
    }),
  }),
})

export const { useGetMovieGenresQuery } = genresApi
