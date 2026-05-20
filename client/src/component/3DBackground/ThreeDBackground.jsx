import React from 'react'
import Spline from '@splinetool/react-spline'

const ThreeDBackground = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-screen -z-10'>
      
      <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"/>
       <div className='absolute inset-0 bg-black/50'/>
    </div>
  )
}

export default ThreeDBackground