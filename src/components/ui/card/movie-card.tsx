import { StarNR } from '@/assets/icons/notRatedStar'
import { StarR } from '@/assets/icons/ratedStar'
import { GenreType } from '@/services/genres/genres-types'
import { MovieResponseType } from '@/services/movie-list/movie-list-types'
import { Card, Image } from '@mantine/core'

import s from './movie-card.module.scss'

type CardProps = {
  baseUrl: string
  genres: GenreType[]
  movie: MovieResponseType
  size: string
}

export const MovieCard = ({ baseUrl, genres, movie, size }: CardProps) => {
  const year = new Date(movie.release_date).getFullYear()
  const vote = movie.vote_average.toFixed(1)
  const voteCount =
    // eslint-disable-next-line no-nested-ternary
    movie.vote_count < 1000
      ? movie.vote_count
      : movie.vote_count > 1000 && movie.vote_count < 1000000
      ? (movie.vote_count / 1000).toFixed(1) + 'K'
      : (movie.vote_count / 1000000).toFixed(1) + 'M'

  return (
    <Card className={s.card} padding={'lg'} radius={'md'}>
      <div className={s.image}>
        <Image alt={movie.title} src={`${baseUrl}${size}${movie.poster_path}`} />
      </div>
      <div className={s.info}>
        <div className={s.header}>
          <h2 className={s.title}>{movie.title}</h2>

          <p>{year}</p>
          <div className={s.vote}>
            <StarR />
            <span>{vote}</span>
            <span className={s.vote_count}>({voteCount})</span>
          </div>
        </div>
        <div className={s.genres}>
          <span>Genres&nbsp;</span>
          {movie.genre_ids.map((genre, index, arr) => {
            if (index > 1) {
              return
            }
            // if (genres) {
            const gN = genres?.find(g => g.id === genre)

            return index === 0 && arr.length > 1 ? ' ' + gN?.name + ',' : ' ' + gN?.name
            // }
          })}
        </div>
      </div>
      <div>
        {' '}
        <StarNR />
      </div>
    </Card>
  )
}
