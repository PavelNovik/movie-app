export type MovieListResponseType = {
  page: number
  results: MovieResponseType[]
  total_pages: number
  total_results: number
}

export type MovieDates = {
  dates: {
    maximum: string
    minimum: string
  }
}

export type MovieResponseType = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type MovieWithDatesResponseType = MovieDates & MovieResponseType

export type GetMoviesRequest = {
  page?: number
  primary_release_year?: number
  'vote_average.gte'?: number
  'vote_average.lte'?: number
  with_genres?: string
}
