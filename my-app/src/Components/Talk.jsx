// rfce
import React from 'react'

function Talk() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
      <input
          type="email"
          className="w-full max-w-md h-12 px-4 mb-4 border border-blue-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter your email id"
        />
        <button
          className="bg-blue-700 hover:bg-blue-900 text-white px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out "
        >Let's talk
        </button>
    </div>

  )
}
export default Talk;
