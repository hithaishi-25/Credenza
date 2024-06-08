
import React from 'react'
// import Space from '../assets/Images/Space.jpg'
import Man from '../assets/Images/Man.jpg'
function Pictures() {
  return (

    <>
      <div className="flex justify-center mt-8 mb-8">
        <div className="flex flex-col items-center p-4">
          <div className="flex justify-center w-full md:w-auto">
            <img 
              src={Man} 
              className="w-full h-auto md:w-96 rounded-2xl object-cover shadow-lg transition-transform transform hover:scale-105"
              alt="not available" 
            />  
          </div>
          <div>
            <p className="text-center text-m text-blue-900 mt-6">
              Our visual approach fosters critical thinking, creativity, and a true passion for learning.
            </p>
          </div>
        </div>
      </div>


    
    </>
  )
}
export default Pictures