import React from 'react'
import Bacteria from'../assets/Images/Bacteria.jpg'
// import Atoms from'../assets/Images/Atoms.jpg'
import Earth from'../assets/Images/Earth.jpg'
import Pollination from'../assets/Images/Pollination.jpg'

function Catalogue() {
  return (
    <>
      <div className="justify-center mt-20">
        <div className="text-center">
          <p style={{ display: 'inline', background: '#ade8f4' }} 
            className="text-3xl font-bold rounded-full text-blue-400 p-2">
            Library
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-6 mb-8">
        <div className="flex flex-col items-center p-4">
          <div className="w-full text-center md:text-middle md:w-auto">
            <h1 className="text-2xl md:text-4xl text-blue-900 font-bold">
              Our Sample Catalogue
            </h1>
            <p className=" text-center text-sm text-blue-400 mt-2">
              Our visual approach fosters critical thinking, creativity and a true passion for learning.
            </p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4
      mt-10 px-10 md:px-5 lg:px-32' >
       
        <img src={Bacteria} className='w-full rounded-3xl object-cover'/>
        
        <img src={Earth} className='w-full rounded-3xl object-cover' />
        <img src={Pollination} className='w-full rounded-3xl object-cover' />
      </div>
      
    </>
  )
}

export default Catalogue