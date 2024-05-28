import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    // 'API-KEY': 'e6f3d1a314462861901d887b33f56a35',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmYzZDFhMzE0NDYyODYxOTAxZDg4N2IzM2Y1NmEzNSIsInN1YiI6IjY2NTM4NTAzNDA2OTNiMDUwNDNiYjMwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.140CFVzE_YrdccXHBTANgi6K_P9XNKv-4-lhjYqBBZA',
    accept: 'application/json',
  },
  // withCredentials: true,
})

export const movieApi = {
  getMovieByPopular() {
    return instance.get('/movie/popular')
  },
}
