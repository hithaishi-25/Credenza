import React from 'react'
import logo from '../assets/Images/Logo.png'
function Header() {
  return (
    <>
    <div className='flex flex-wrap justify-between items-center'>
      {/* <img src={logo} className='w-[220px]' alt="not available" /> */}
      <div className="w-full md:w-auto flex justify-center md:justify-start mb-4 md:mb-0">
        <img src={logo} className="w-[150px] md:w-[220px]" alt="not available" />
      </div>
      <ul className='flex flex-col md:flex-row gap-4 md:gap-5 text-center md:text-left w-full md:w-auto'>
        <li className='hover:font-bold cursor-pointer'>Home</li>
        <li className='hover:font-bold cursor-pointer'>About us</li>
        <li className='hover:font-bold cursor-pointer'>Learning Science</li>
        <li className='hover:font-bold cursor-pointer'>Learning Vedic Maths</li>
        <li className='hover:font-bold cursor-pointer'>Learning Bespoke</li>
      </ul>
      <div className="w-full md:w-auto flex justify-center md:justify-end mt-4 md:mt-0">
        <button className="bg-blue-700 hover:bg-blue-900 text-white font-semibold rounded-md py-2 px-4 shadow-lg">
          Contact Us
        </button>
      </div>
      {/* <button className='bg-blue-700 hover:bg-blue-900 text-white font-semibold rounded-md py-2 px-4 shadow-lg' >Contact Us</button> */}
     
    </div>
    </>
  )
}

export default Header;