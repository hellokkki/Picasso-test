import { Typography } from '@mui/material'
import React from 'react'

function Errorpage(): React.ReactElement {
  return (
    <main style={{ height: '100dvh',
                   display: 'flex',
                   justifyContent: 'center',
                   alignItems: 'center' }}>
      <Typography variant='h3'>
         sorry, there is some error
      </Typography>
    </main>
  )
}

export default Errorpage
