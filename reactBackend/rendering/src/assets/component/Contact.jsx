import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-2">
          Contact Us
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Get in touch with us
        </p>

        <div className="space-y-5">

          <div className="p-4 bg-blue-50 rounded-lg">
            <h2 className="font-semibold text-blue-700">
              📧 Email
            </h2>
            <p className="text-gray-600">
              harish@example.com
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h2 className="font-semibold text-gray-700">
              📞 Phone
            </h2>
            <p className="text-gray-600">
              +91 98765 43210
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h2 className="font-semibold text-gray-700">
              📍 Address
            </h2>
            <p className="text-gray-600">
              Chennai, Tamil Nadu, India
            </p>
          </div>

        </div>

        <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Send Message
        </button>

      </div>

    </div>
  )
}

export default Contact