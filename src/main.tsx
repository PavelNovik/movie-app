import React from 'react'

import { MantineProvider } from '@mantine/core'
import ReactDOM from 'react-dom/client'

import './styles/index.scss'

import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>
)
