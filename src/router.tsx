import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Layout } from '@/components/layout/layout'
import { MoviesPage } from '@/pages/movies-page'

const Cont = () => {
  return <MoviesPage />
}

const publicRoutes: RouteObject[] = [
  {
    element: <Cont />,
    path: '/',
  },
]

const router = createBrowserRouter([{ children: [...publicRoutes], element: <Layout /> }])

export const Router = () => {
  return <RouterProvider router={router} />
}
