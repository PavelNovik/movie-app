import { ArrowDown } from '@/assets/icons/arrowDown'
import { Find } from '@/assets/icons/find'
import { MovieCard } from '@/components/ui/card/movie-card'
import { Conatiner } from '@/components/ui/container/conatiner'
import { useGetConfigurationQuery } from '@/services/configuration/configuration-api'
import { useGetMovieGenresQuery } from '@/services/genres/genre-api'
import { GenreType } from '@/services/genres/genres-types'
import { useGetPopularMoviesListQuery } from '@/services/movie-list/movie-list-api'
import { Button, Loader, Select, Text } from '@mantine/core'

import s from './movies-page.module.scss'

export const MoviesPage = () => {
  const { data, isLoading } = useGetPopularMoviesListQuery()
  const { data: configuration } = useGetConfigurationQuery()
  const { data: genres } = useGetMovieGenresQuery()

  console.log(configuration)

  console.log(data)
  console.log(genres)

  return (
    <div>
      {isLoading && <Loader />}
      <h2>Movies</h2>
      <Conatiner className={s.filter__container}>
        <Select
          checkIconPosition={'right'}
          className={s.filter__select}
          classNames={{ wrapper: s.wrapper }}
          data={['React', 'Angular', 'Vue', 'Svelte']}
          label={'Genres'}
          placeholder={'Select genre'}
          rightSection={<ArrowDown />}
        />{' '}
        <Select
          checkIconPosition={'right'}
          className={s.filter__select}
          classNames={{ wrapper: s.wrapper }}
          data={['React', 'Angular', 'Vue', 'Svelte']}
          label={'Release year'}
          placeholder={'Select release year'}
          rightSection={<ArrowDown />}
        />
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <Select
            checkIconPosition={'right'}
            className={s.filter__select_rating}
            data={['React', 'Angular', 'Vue', 'Svelte']}
            label={'Ratings'}
            placeholder={'From'}
          />
          <Select
            checkIconPosition={'right'}
            className={s.filter__select_rating}
            data={['React', 'Angular', 'Vue', 'Svelte']}
            label={' '}
            placeholder={'To'}
          />
        </div>
        <Button color={'gray'} variant={'transparent'}>
          Reset filters
        </Button>
      </Conatiner>
      <Conatiner className={s.sort__container}>
        <Select
          checkIconPosition={'right'}
          className={s.filter__select}
          data={['React', 'Angular', 'Vue', 'Svelte']}
          label={'Sort by'}
          placeholder={'Select sorting'}
          rightSection={<ArrowDown />}
        />
      </Conatiner>
      <Conatiner className={s.card__container}>
        {data &&
          data.results.map(movie => (
            <MovieCard
              baseUrl={configuration?.images.base_url as string}
              genres={genres?.genres as GenreType[]}
              key={movie.id}
              movie={movie}
              size={configuration?.images.poster_sizes[0] as string}
            />
          ))}
        {!isLoading && !data && (
          <Conatiner>
            <Find />
            <Text>We don&apos;t have such movies, look for another one</Text>
          </Conatiner>
        )}
      </Conatiner>
    </div>
  )
}
