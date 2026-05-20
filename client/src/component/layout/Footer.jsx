import React from 'react'

const Footer = () => {
  return (

    <footer className='text-white py-12 px-10 mt-20'>

      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>

        {/* About Section */}
        <div>

          <h1 className='text-2xl font-bold text-cyan-300 mb-4'>
            Meditrack
          </h1>

          <p className='text-gray-300 leading-relaxed'>
            Smart healthcare monitoring platform that provides
            real-time patient tracking, emergency alerts,
            health analytics, and AI-powered monitoring solutions.
          </p>

        </div>

        {/* Features Section */}
        <div>

          <h1 className='text-2xl font-bold text-cyan-300 mb-4'>
            Features
          </h1>

          <ul className='space-y-3 text-gray-300'>

            <li>✔ Real-Time Health Monitoring</li>

            <li>✔ Heart Rate Tracking</li>

            <li>✔ Oxygen Level Monitoring</li>

            <li>✔ Temperature Detection</li>

            <li>✔ Emergency Alert System</li>

            <li>✔ Patient Health Dashboard</li>

            <li>✔ AI-Based Health Analysis</li>

            <li>✔ Secure Medical Data Storage</li>

          </ul>

        </div>

        {/* Contact Section */}
        <div>

          <h1 className='text-2xl font-bold text-cyan-300 mb-4'>
            Contact
          </h1>

          <div className='space-y-3 text-gray-300'>

            <p>📍 Kolkata, India</p>

            <p>📧 vitalwatchai@gmail.com</p>

            <p>📞 +91 9876543210</p>

            <p>🌐 www.vitalwatchai.com</p>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className='border-t border-white/20 mt-10 pt-5 text-center text-gray-400'>

        © 2026 VitalWatch AI. All Rights Reserved.

      </div>

    </footer>

  )
}

export default Footer