import React from 'react'
import HealthCard from '../common/HealthCard'

const Features = () => {
  return (

<section className='min-h-screen flex flex-col justify-center items-center px-10 py-20'>

      {/* Heading */}
      <h1 className='text-5xl font-bold text-cyan-300 mb-16'>
        Health Monitoring
      </h1>

      {/* Cards */}
      <div className='flex flex-wrap justify-center gap-5'>

        <HealthCard
          title="BP Track"
          high="150/100"
          normal="120/80"
          low="90/60"
        />

        <HealthCard
          title="Sugar Track"
          high="180 mg/dL"
          normal="110 mg/dL"
          low="70 mg/dL"
        />

        <HealthCard
          title="Heart Rate"
          high="120 BPM"
          normal="72 BPM"
          low="50 BPM"
        />

        <HealthCard
          title="Oxygen Level"
          high="100%"
          normal="98%"
          low="90%"
        />

      </div>
    </section>
  )
}

export default Features