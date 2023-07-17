import React from 'react'
import { BallBgCanvas } from './canvas'

const BallBg = () => {
  return (
    <div className='fixed top-2 bottom-0 left-0 right-0 -z-2'>
      <BallBgCanvas />
    </div>
  )
}

export default BallBg