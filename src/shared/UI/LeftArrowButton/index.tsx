import React from 'react'
import { ILeftArrowButtonProps } from './interface'
import LeftArrow from './LeftArrow'
import { Button } from '@mui/material'

const LeftArrowButton: React.FC<ILeftArrowButtonProps> = ({ size, color, onClick }) => {
  return (
    <Button onClick={() => onClick()}>
      <LeftArrow size={size} color={color}/>
    </Button>
  )
}

export default LeftArrowButton
