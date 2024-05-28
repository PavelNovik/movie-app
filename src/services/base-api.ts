import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
    headers: {
      // 'API-KEY': 'e6f3d1a314462861901d887b33f56a35',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmYzZDFhMzE0NDYyODYxOTAxZDg4N2IzM2Y1NmEzNSIsInN1YiI6IjY2NTM4NTAzNDA2OTNiMDUwNDNiYjMwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.140CFVzE_YrdccXHBTANgi6K_P9XNKv-4-lhjYqBBZA',
      accept: 'application/json',
    },
  }),
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['MovieList', 'Configuration', 'Genres'],
})
