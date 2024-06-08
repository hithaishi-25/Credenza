import React from 'react';

const Footer = () => {
    return (
        <footer className="footer mt-9 bg-blue-900 text-blue-100 px-4 py-10">
          <div className='flex flex-wrap justify-center text-center'>
              <ul className='flex flex-col md:flex-row gap-4 md:gap-5 text-center md:text-left w-full md:w-auto onhover:text-blue-100 '>
                <li className='hover:font-bold cursor-pointer'>Home</li>
                <li className='hover:font-bold cursor-pointer'>About us</li>
                <li className='hover:font-bold cursor-pointer'>Learning Science</li>
                <li className='hover:font-bold cursor-pointer'>Learning Vedic Maths</li>
                <li className='hover:font-bold cursor-pointer'>Learning Bespoke</li>
              </ul>
          </div>
          
          <div className='text-center mt-9'>© 2024 Credenza. All rights reserved.</div>
          <div className='text-center'>Contact Us: g.hithaishi3818@gmail.com@yourcompany.com</div>
        </footer>
    );
}

export default Footer;
