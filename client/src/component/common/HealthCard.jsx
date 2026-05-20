import React from 'react'

const HealthCard = ({ title, high, normal, low }) => {
  return (

    <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 w-72 text-white shadow-2xl hover:scale-105 transition duration-300'>

      {/* Header */}
      <div className='flex justify-between items-center mb-6'>

        <h1 className='text-2xl font-bold text-cyan-300'>
          {title}
        </h1>

        <button className='text-2xl'>
          ⋮
        </button>

      </div>
      {/* Display Interface */}
<div className='bg-black/30 border border-cyan-400/20 rounded-2xl p-5 mb-6'>

  <h2 className='text-gray-300 text-sm mb-2'>
    Current Status
  </h2>

  <div className='flex justify-between items-center'>

    <h1 className='text-4xl font-bold text-cyan-300'>
      128/82
    </h1>

    <div className='bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm font-semibold'>
      NORMAL
    </div>
  </div>
</div>

      {/* Health Status */}
      <div className='space-y-4 text-lg'>

        <div className='flex items-center gap-3'>
          <input type="checkbox" />
          <p className='text-red-400'>
            High : {high}
          </p>
        </div>

        <div className='flex items-center gap-3'>
          <input type="checkbox" />
          <p className='text-green-400'>
            Normal : {normal}
          </p>
        </div>

        <div className='flex items-center gap-3'>
          <input type="checkbox" />
          <p className='text-yellow-300'>
            Low : {low}
          </p>
        </div>

      </div>

    </div>

  )
}

export default HealthCard