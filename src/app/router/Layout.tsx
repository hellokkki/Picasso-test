import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Typography } from '@mui/material'
import Homepage from '../../pages/homepage'

function Layout(): React.ReactElement {
  return (
    <div style={{height: '100dvh', display: 'flex', flexDirection: 'column'}}>
    <header>
        <Typography>
            LOREM IPSUM DOLOR SIT AMET
        </Typography>
        <Typography>
            test work for <span />
            <Link
            to='https://picasso-diagnostic.ru/'
            >Picasso</Link>
        </Typography>
    </header>
    <main>
      <Homepage />
      <Outlet />
    </main>
    </div>
  )
}

export default Layout
