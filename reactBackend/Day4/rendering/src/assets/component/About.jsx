import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          HARISH
        </h1>

        <p className="text-gray-600 text-lg">
          Welcome to my About page
        </p>

        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>

    </div>
  )
}

export default About