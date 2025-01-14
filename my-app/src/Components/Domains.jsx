import React from 'react'
import Butterfly from '../assets/Images/Butterfly.jpg'
import Book from '../assets/Images/Book.jpg'
import Science from '../assets/Images/Science.jpg'
function Domains() {
  return (
  <>

    <div className='felx flex-col m-15 mt-5'>
      <div className="grid grid-cols-1   
        md:grid-cols-2 mt-10 px-10 md:px-15 lg:px-32 gap-8
        ">
        <img 
          src={Butterfly} 
          alt="Your Image" 
          className="object-contain rounded-2xl w-full h-full "
        />
        <div className='ml-4'>
          <h2 className='text-blue-900 font-bold text-[30px] mt-5' >Learning Science</h2>
          <p className='mt-5'>Our approach involves delving into every science concept, 
          meticulously craftign audio visual presentations that bring the subject matter to life.
          We are dedicatedd to t ransforming complex ideas into info engaging 
          visual experiences, ensuring that learners grasp the essence of each
          concept effortlessly</p>
          <div className='mt-5 text-blue-500 hover:text-blue-900'>
            <a href="#" >Read More</a>
          </div>
          
        </div>
      </div>
    </div>


    <div className='felx flex-col m-15'>
      <div className="grid grid-cols-1   
        md:grid-cols-2 mt-10 px-10 md:px-15 lg:px-32 gap-8
        ">
        <img 
          src={Book} 
          alt="Your Image" 
          className="object-contain rounded-2xl w-full h-full  "
        />
        <div className='ml-4'>
          <h2 className='text-blue-900 font-bold text-[30px] mt-3' >Vedic Math</h2>
          <p className='mt-5'>Our approach involves delving into every science concept, 
          meticulously craftign audio visual presentations that bring the subject matter to life.
          We are dedicatedd to t ransforming complex ideas into info engaging 
          visual experiences, ensuring that learners grasp the essence of each
          concept effortlessly</p>
          <div className='mt-5 text-blue-500 hover:text-blue-900'>
            <a href="#" >Read More</a>
          </div>
        </div>
      </div>
    </div>
    
    <div className='felx flex-col m-15'>
      <div className="grid grid-cols-1   
        md:grid-cols-2 mt-10 px-10 md:px-15 lg:px-32 gap-8
        ">
        <img 
          src={Science} 
          alt="Your Image" 
          className="object-contain
          rounded-2xl w-full h-full "
        />
        <div className='ml-4'>
          <h2 className='text-blue-900 font-bold text-[30px] mt-5' >Bespoke</h2>
          <p className='mt-5'>Our approach involves delving into every science concept, 
          meticulously craftign audio visual presentations that bring the subject matter to life.
          We are dedicatedd to t ransforming complex ideas into info engaging 
          visual experiences, ensuring that learners grasp the essence of each
          concept effortlessly</p>
          <div className='mt-5 text-blue-500 hover:text-blue-900'>
            <a href="#" >Read More</a>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Domains;
