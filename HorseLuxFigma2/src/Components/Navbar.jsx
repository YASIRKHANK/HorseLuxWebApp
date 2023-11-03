
// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav className="bg-gray-400 py-10">
//       <ul className="flex gap-x-16">
//         <li>
//           <Link to="/all" className=" text-red-600 font-bold px-4 py-2 rounded-md  ml-16">All</Link>
//         </li>

//         <li>
//           <Link to="/branding" className="font-bold">Branding</Link>
//         </li>

//         <li>
//           <Link to="/Development" className="font-bold">Development</Link>
//         </li>

//          <li>
//           <Link to="/Services" className="font-bold">Services</Link>
//         </li>

//          <li>
//           <Link to="/Illustration" className="font-bold">Illustration</Link>
//         </li> 

//         <li>
//           <Link to="/InnovationHub" className="font-bold">Innovation Hub</Link>
//         </li> 

//         <li>
//           <Link to="/MotionDesign" className="font-bold">Motion Design</Link>
//         </li>
//         <li>
//           <Link to="/UiDesign" className="font-bold">Ui/Ux Design</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;



import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-400 py-10">
      <ul className="flex gap-x-16">
        <li>
          <a href="/all" target="_blank" rel="noopener noreferrer" className="text-red-600 font-bold px-4 py-2 rounded-md ml-16">All</a>
        </li>

        <li>
          <a href="/branding" target="_blank" rel="noopener noreferrer" className="font-bold">Branding</a>
        </li>

        <li>
          <a href="/Development" target="_blank" rel="noopener noreferrer" className="font-bold">Development</a>
        </li>

         <li>
          <a href="/Services" target="_blank" rel="noopener noreferrer" className="font-bold">Services</a>
        </li>

         <li>
          <a href="/Illustration" target="_blank" rel="noopener noreferrer" className="font-bold">Illustration</a>
        </li> 

        <li>
          <a href="/InnovationHub" target="_blank" rel="noopener noreferrer" className="font-bold">Innovation Hub</a>
        </li> 

        <li>
          <a href="/MotionDesign" target="_blank" rel="noopener noreferrer" className="font-bold">Motion Design</a>
        </li>
        <li>
          <a href="/UiDesign" target="_blank" rel="noopener noreferrer" className="font-bold">Ui/Ux Design</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
