
import React from 'react'
import Scene from '../assets/Images/Scene.jpg'
import Man from '../assets/Images/Man.jpg'
function Pictures() {
  return (

    <>
      <div className="flex justify-center mt-8 mb-8">
  <div className="flex flex-col items-center p-4">
    <div className="justify-center w-full h-full md:w-auto">
      <img 
        src={Scene} 
        className="w-full md:w-full max-w-2xl rounded-2xl object-cover shadow-lg transition-transform transform hover:scale-105"
        alt="not available" 
      />  
    </div>
    <div>
      <p className="text-center text-2xl fill-indigo-950 font-serif text-blue-900 mt-6">
        Our visual approach fosters critical thinking, creativity, and a true passion for learning.
      </p>
    </div>
  </div>
</div>



    
    </>
  )
}
export default Pictures