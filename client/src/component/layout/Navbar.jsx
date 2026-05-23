import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import Authpage from '../../pages/public/Authpage'
import Sidebar from './Sidebar'
import {FaBars } from 'react-icons/fa'


const Navbar = () => {

  const navigate = useNavigate()

  const [showLogin, setShowLogin] = useState(false)

  const [Open, setOpen] = useState(false)
  return (

  <>

    {/* Navbar */}
    <div className='fixed top-0 w-full flex justify-center z-30 px-4 py-3'>

      {/* Main Navbar */}
      <div className='w-full max-w-7xl flex items-center justify-between'>

        {/* LEFT SIDE */}
        <div className='bg-black/20 hover:bg-white/10 backdrop-blur-md px-6 md:px-10 py-4 rounded-xl flex items-center gap-6 md:gap-10 text-white shadow-lg border border-white/10'>

          {/* Logo */}
          <h1
            onClick={() => navigate('/')}
            className='cursor-pointer hover:text-cyan-300 transition font-semibold text-lg'
          >
            MediTrack
          </h1>
          {/* Desktop Menu */}
          <div className='hidden md:flex items-center gap-8'>

            <h1
              onClick={() => navigate('/about')}
              className='cursor-pointer hover:text-cyan-300 transition'
            >
              About
            </h1>

            <h1
              onClick={() => navigate('/contact')}
              className='cursor-pointer hover:text-cyan-300 transition'
            >
              Contact
            </h1>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className='flex items-center gap-4'>

          {/* Desktop Search */}
          <div className='hidden md:flex items-center bg-white/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md'>

            <input
              type="text"
              placeholder="Search..."
              className='bg-transparent outline-none text-white placeholder-gray-300 w-40'
            />

            <button className='ml-2 text-cyan-300'>
              <FiSearch size={20} />
            </button>

          </div>

          {/* Desktop Sign In */}
          <button
            onClick={() => setShowLogin(true)}
            className='hidden md:block text-white border border-white px-5 py-2 rounded-xl hover:bg-cyan-500 hover:border-cyan-500 transition duration-300'
          >
            Sign In
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white text-2xl bg-black/30 p-3 rounded-xl backdrop-blur-md border border-white/10"
            onClick={() =>{
              setOpen(true)
              setShowLogin(false)
            }}
          >
            <FaBars />
          </button>

        </div>

      </div>

    </div>

    {/* Popup Login */}
    {showLogin && (
      <Authpage closeModal={() => setShowLogin(false)} />
    )}

    {/* Sidebar */}
    <Sidebar open={Open} 
            setOpen={setOpen}
            setShowLogin={setShowLogin} />

  </>
)}
export default Navbar