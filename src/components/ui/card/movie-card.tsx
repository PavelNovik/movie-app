import { GenreType } from '@/services/genres/genres-types'
import { MovieResponseType } from '@/services/movie-list/movie-list-types'
import { Card, Image } from '@mantine/core'

import s from './movie-card.module.scss'

import ratedStar from './../../../assets/img/rated star.svg'

type CardProps = {
  baseUrl: string
  genres: GenreType[]
  movie: MovieResponseType
  size: string
}

export const MovieCard = ({ baseUrl, genres, movie, size }: CardProps) => {
  const year = new Date(movie.release_date).getFullYear()
  const vote = movie.vote_average.toFixed(1)

  return (
    <Card className={s.card} padding={'lg'} radius={'md'}>
      <div>
        <Image
          alt={movie.title}
          className={s.image}
          src={`${baseUrl}${size}${movie.poster_path}`}
        />
      </div>

      <div>
        <h2 className={s.title}>{movie.title}</h2>
        <p>{year}</p>
        <div>
          <img src={ratedStar} />
          {vote}
        </div>
        <div>
          Genres:
          {movie.genre_ids.map(genre => {
            const gN = genres.find(g => g.id === genre)

            return gN?.name
          })}
        </div>
      </div>
    </Card>
  )
}
