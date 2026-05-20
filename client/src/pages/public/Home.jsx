import React from 'react'
import Navbar from '../../component/layout/Navbar'
import Footer from '../../component/layout/Footer'
import ThreeDBackground from '../../component/3DBackground/ThreeDBackground'
import Features from '../../component/layout/Features'

const Home = () => {
  return (
    <div className='relative text-white min-h-screen'>
      <ThreeDBackground />
        <Navbar/>
         {/* Hero Section */}
  <div className='relative flex flex-col justify-center items-center h-screen text-center px-4'>

    <h1 className='text-7xl font-extrabold text-cyan-300 drop-shadow-lg mb-6'>
      MediTrack
    </h1>

    <p className='text-2xl text-gray-200 max-w-3xl leading-relaxed drop-shadow-md'>
      Smart Health Monitoring & Emergency Alert System
      powered by AI technology for real-time patient care.
    </p>

    <button className='mt-10 px-10 py-4 bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-semibold rounded-full shadow-2xl transition duration-300'>
      Get Started 
    </button>

  </div>
    <Features/>
  <div className='relative z-10'>
    <Footer/>
  </div>
</div>
  )
}

export default Home