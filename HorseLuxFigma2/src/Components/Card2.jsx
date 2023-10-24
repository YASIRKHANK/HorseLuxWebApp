// import React from "react";
// import img1 from "../images/reading book.jpg";
// import img2 from "../images/conference.jpg";
// import img3 from "../images/table meeting.jpg";
// import img4 from "../images/designed.jpg";
// import img5 from "../images/game.jpg";

// import { FaArrowRight } from "react-icons/fa";
// import { AiOutlineLike } from "react-icons/ai";
// import { LuMessagesSquare } from "react-icons/lu";
// import { BiShareAlt } from "react-icons/bi";

// const Card1 = () => {
//   return (
//     <div className="mt-2 ml-3">
//       <p className="font-bold mb-5">NEWS</p>

//       {/* Parent container with flex class */}
//       <div className="flex gap-x-10">
//         {/* Container for the first three cards */}
//         <div className="flex-col space-y-4 ">
//           <div className="w-80 border rounded-md overflow-hidden flex">
//             <img src={img1} className='w-32' alt="Card Image" />
//             <div className="p-4">
//               <h2 className="font-medium mt-5">
//                 Our secerts formula to online workshop
//               </h2>
//               <p className="mt-4 flex items-center font-extrabold">
//                 Learn More <FaArrowRight className="ml-2" />
//               </p>
//             </div>
//           </div>
//           <div className="w-80 border rounded-md overflow-hidden flex">
//             <img src={img2} className="w-32" alt="Card Image" />
//             <div className="p-4">
//               <h2 className="font-medium">
//                Digital product innovation from warsaw with love
//               </h2>
//               <p className="mt-2 flex items-center font-extrabold">
//                 Learn More <FaArrowRight className="ml-2" />
//               </p>
//             </div>
//           </div>
//           <div className="w-80 border rounded-md overflow-hidden flex">
//             <img src={img3} className="w-32" alt="Card Image" />
//             <div className="p-4">
//               <h2 className="font-medium">
//                 People don't buy a product.They buy better version of themeselves
//               </h2>
//               <p className="mt-2 flex items-center font-extrabold">
//                 Learn More <FaArrowRight className="ml-2" />
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Container for the last two cards, on the left side */}
//         <div className="flex gap-x-20 mt-32">
//           {/* card 1st */}
//           <div className="w-80 border mb-20 rounded-md overflow-hidden ">
//             <img src={img4} alt="Card Image" className="p-2  h-56 w-full" />
//             <div className="p-4">
//               <h2 className=" font-extrabold">
//               Dark mood in ui designed for mobile apps:Beauty born in a darkness 
//               </h2>
//               <p>
//                 Dark mood as become one of the most rewuird html feacture among modern user,Both google and apple have accepted
//               </p>
//               <div className="flex items-center gap-x-4 mt-4">
//                 <p>24 December | 7 min read</p>
//                 <AiOutlineLike />
//                 <LuMessagesSquare />
//                 <BiShareAlt />
//               </div>
//             </div>
//           </div>

//           {/* card 2nd */}
//           <div className="w-80  border mb-20 rounded-md overflow-hidden ">
//             <img src={img5} alt="Card Image" className="p-2" />
//             <div className="p-4">
//               <h2 className="font-extrabold">
//                 Gamification in UX deigned: <br/>
//                 Designed fun experince for serious situaions

//               </h2>
//               <p>
//                 gamification hase become one of the modern era most wonderd and feactured Ux changed to the most visting site
//               </p>
//               <div className="flex items-center gap-x-4 mt-4">
//                 <p>24 December | 7 min read</p>
//                 <AiOutlineLike />
//                 <LuMessagesSquare />
//                 <BiShareAlt />
//               </div>
//             </div>     
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card1;


import React from "react";
import img1 from "../images/reading book.jpg";
import img2 from "../images/conference.jpg";
import img3 from "../images/table meeting.jpg";
import img4 from "../images/designed.jpg";
import img5 from "../images/game.jpg";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { LuMessagesSquare } from "react-icons/lu";
import { BiShareAlt } from "react-icons/bi";

const Card1 = () => {
  return (
    <div className="mt-2 ml-3">
      <p className="font-bold mb-5">NEWS</p>

      {/* Parent container with flex class */}
      <div className="flex gap-x-10">
        {/* Container for the first three cards */}
        <div className="flex-col space-y-4 ">
          <div className="w-80 border rounded-md overflow-hidden flex">
            <img src={img1} className="w-32" alt="Card Image" />
            <div className="p-4">
              <h2 className="font-medium mt-5">
                Our secrets formula for online workshops
              </h2>
              <p className="mt-4 flex items-center font-extrabold">
                Learn More <FaArrowRight className="ml-2" />
              </p>
            </div>
          </div>
          <div className="w-80 border rounded-md overflow-hidden flex">
            <img src={img2} className="w-32" alt="Card Image" />
            <div className="p-4">
              <h2 className="font-medium">
                Digital product innovation from Warsaw with love
              </h2>
              <p className="mt-2 flex items-center font-extrabold">
                Learn More <FaArrowRight className="ml-2" />
              </p>
            </div>
          </div>
          <div className="w-80 border rounded-md overflow-hidden flex">
            <img src={img3} className="w-32" alt="Card Image" />
            <div className="p-4">
              <h2 className="font-medium">
                People don't buy a product. They buy a better version of themselves.
              </h2>
              <p className="mt-2 flex items-center font-extrabold">
                Learn More <FaArrowRight className="ml-2" />
              </p>
            </div>
          </div>
        </div>

        {/* Container for the last two cards, on the left side */}
        <div className="flex gap-x-20 mt-32">
          {/* card 1st */}
          <div className="w-80 border mb-20 rounded-md overflow-hidden ">
            <img src={img4} alt="Card Image" className="p-2 h-56 w-full" />
            <div className="p-4">
              <h2 className="font-extrabold">
                Dark mood in UI design for mobile apps: Beauty born in darkness
              </h2>
              <p>
                Dark mode has become one of the most required HTML features among modern users. Both Google and Apple have accepted it.
              </p>
              <div className="flex items-center gap-x-4 mt-4">
                <p>24 December | 7 min read</p>
                <AiOutlineLike />
                <LuMessagesSquare />
                <BiShareAlt />
              </div>
            </div>
          </div>

          {/* card 2nd */}
          <div className="w-80 border mb-20 rounded-md overflow-hidden ">
            <img src={img5} alt="Card Image" className="p-2" />
            <div className="p-4">
              <h2 className="font-extrabold">
                Gamification in UX design: Designed fun experience for serious situations
              </h2>
              <p>
                Gamification has become one of the modern era's most wonderful and featured UX changes in the most visited sites.
              </p>
              <div className="flex items-center gap-x-4 mt-4">
                <p>24 December | 7 min read</p>
                <AiOutlineLike />
                <LuMessagesSquare />
                <BiShareAlt />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Numbers (1, 2, 3, ...) below the last two cards */}
      <div className="flex justify-center gap-x-4 mb-5 ">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>...</p>
        <button>Next</button>
      </div>    
    </div>
  );
};

export default Card1;
