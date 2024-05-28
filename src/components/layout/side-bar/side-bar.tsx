import { Logo } from '@/assets/icons/Logo'
import { Tabs } from '@mantine/core'

import s from './side-bar.module.scss'

export const SideBar = () => {
  return (
    <>
      <div className={s.title}>
        <Logo />
        ArrowFlicks
      </div>
      <Tabs classNames={s} defaultValue={'movies'} orientation={'vertical'} variant={'pills'}>
        <Tabs.List grow>
          <Tabs.Tab value={'movies'}>Movies</Tabs.Tab>
          <Tabs.Tab value={'ratedMovies'}>Rated movies</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </>
  )
}
