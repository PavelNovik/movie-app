import { Outlet } from 'react-router-dom'

import { SideBar } from '@/components/layout/side-bar/side-bar'

import s from './layout.module.scss'

export const Layout = () => {
  return (
    <div className={s.root}>
      <nav className={s.navbar}>
        <SideBar />
      </nav>

      <main className={s.main}>
        <div className={s.wrapper}>
          <Outlet />
        </div>
      </main>
    </div>
  )
}
