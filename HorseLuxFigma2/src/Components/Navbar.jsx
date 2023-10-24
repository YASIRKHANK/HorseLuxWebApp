// // import React from 'react'

// // const Navbar = () => {
// //   return (
// //     <div className='bg-gray-400 flex gap-x-10 py-16'>
// //     <p className='text-red-600 ml-20 font-bold'>All</p>
// //         <div className='flex gap-x-10 font-bold '>
// //       <p>Branding</p>
// //       <p>Development</p>
// //       <p>Fireart Life</p>
// //       <p>Illustration</p>
// //       <p>innovation Hub</p>
// //       <p>Motion Design</p>
// //       <p>UI/UX design</p>
// //         </div>
      
// //     </div>
// //   )
// // }

// // export default Navbar

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-400 py-10">
      <ul className="flex gap-x-16">
        <li>
          <Link to="/all" className=" text-red-600 font-bold px-4 py-2 rounded-md  ml-16">All</Link>
        </li>

        <li>
          <Link to="/branding" className="font-bold">Branding</Link>
        </li>

        <li>
          <Link to="/Development" className="font-bold">Development</Link>
        </li>

         <li>
          <Link to="/Services" className="font-bold">Services</Link>
        </li>

         <li>
          <Link to="/Illustration" className="font-bold">Illustration</Link>
        </li> 

        <li>
          <Link to="/InnovationHub" className="font-bold">Innovation Hub</Link>
        </li> 

        <li>
          <Link to="/MotionDesign" className="font-bold">Motion Design</Link>
        </li>
        <li>
          <Link to="/UiDesign" className="font-bold">Ui/Ux Design</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;



