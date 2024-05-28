import { MovieCard } from '@/components/ui/card/movie-card'
import { Conatiner } from '@/components/ui/container/conatiner'
import { useGetConfigurationQuery } from '@/services/configuration/configuration-api'
import { useGetMovieGenresQuery } from '@/services/genres/genre-api'
import { GenreType } from '@/services/genres/genres-types'
import { useGetPopularMoviesListQuery } from '@/services/movie-list/movie-list-api'

export const MoviesPage = () => {
  const { data } = useGetPopularMoviesListQuery()
  const { data: configuration } = useGetConfigurationQuery()
  const { data: genres } = useGetMovieGenresQuery()

  console.log(configuration)

  console.log(data)
  console.log(genres)

  return (
    <Conatiner>
      {data?.results.map(movie => (
        <MovieCard
          baseUrl={configuration?.images.base_url as string}
          genres={genres?.genres as GenreType[]}
          key={movie.id}
          movie={movie}
          size={configuration?.images.poster_sizes[0] as string}
        />
      ))}
    </Conatiner>
  )
}
