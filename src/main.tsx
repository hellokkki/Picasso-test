import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import { router } from './app/router/index.tsx'
import { store } from './app/store/index.tsx'
import { PikassoTheme } from './app/theme/index.ts'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={PikassoTheme}>
     <RouterProvider router={router}/>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
