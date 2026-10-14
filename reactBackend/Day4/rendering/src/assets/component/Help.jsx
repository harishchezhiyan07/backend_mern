import React from 'react'

const Help = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Help Center
        </h1>

        <p className="text-center text-gray-600 mb-8">
          How can we help you?
        </p>

        <div className="space-y-4">

          <div className="p-4 bg-blue-50 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-700">
              📚 Need Help?
            </h2>
            <p className="text-gray-600 mt-1">
              Find answers to your questions and learn more about our website.
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700">
              📞 Contact Us
            </h2>
            <p className="text-gray-600 mt-1">
              If you have any problems, please contact our support team.
            </p>
          </div>

        </div>

        <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Contact Support
        </button>

      </div>

    </div>
  )
}

export default Help