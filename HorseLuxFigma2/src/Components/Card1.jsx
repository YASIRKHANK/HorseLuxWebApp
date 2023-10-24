import React from "react";
import img1 from "../images/car.jpg";
import img2 from "../images/code.jpg";
import img3 from "../images/headphone.jpg";
import img4 from "../images/handlaptop.jpg";
import img5 from "../images/laptoptable.jpg";

import { FaArrowRight } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { LuMessagesSquare } from "react-icons/lu";
import { BiShareAlt } from "react-icons/bi";

const Card1 = () => {
  return (
    <div className="mt-2 ml-3">
      <p className="font-bold mb-5">Recent Posts</p>

      {/* Parent container with flex class */}
      <div className="flex gap-x-10">
        {/* Container for the first three cards */}
        <div className="flex-col space-y-4 ">
          <div className="w-80 border rounded-md overflow-hidden flex">
            <img src={img1} className="w-32 h-40" alt="Card Image" />
            <div className="p-4">
              <h2 className="font-medium">
                Mobile App Design Trends 2023 Comprehensive Collection
              </h2>
              <p className="mt-2 flex items-center font-extrabold">
                Learn More <FaArrowRight className="ml-2" />
              </p>
            </div>
          </div>
          <div className="w-80 border rounded-md overflow-hidden flex">
            <img src={img2} className="w-32 h-40" alt="Card Image" />
            <div className="p-4">
              <h2 className="font-medium">
                15 best animation website techniques for your web design
              </h2>
              <p className="mt-2 flex items-center font-extrabold">
                Learn More <FaArrowRight className="ml-2" />
              </p>
            </div>
          </div>
          <div className="w-80 border rounded-md overflow-hidden flex">
            <img src={img3} className="w-32 h-40" alt="Card Image" />
            <div className="p-4">
              <h2 className="font-medium">
                How to combine design thinking & business thinking in a product
              </h2>
              <p className="mt-2 flex items-center font-extrabold">
                Learn More <FaArrowRight className="ml-2" />
              </p>
            </div>
          </div>
        </div>

        {/* Container for the last two cards, on the left side */}
        <div className="flex gap-x-20">
          {/* card 1st */}
          <div className="w-80 border mb-20 rounded-md overflow-hidden ">
            <img src={img4} alt="Card Image" className="p-2" />
            <div className="p-4">
              <h2 className=" font-extrabold">
                New year detion:
                <br />
                Top UI/UX designed treand rushing to us in 2023
              </h2>
              <p>
                Are you looking to bulid a software product and searching for
                reliable patner to help you implemt it
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
          <div className="w-80  border mb-20 rounded-md overflow-hidden ">
            <img src={img5} alt="Card Image" className="p-2" />
            <div className="p-4">
              <h2 className="font-extrabold">
                Top 5 Ui/Ux agenices in 2020-2024[user experience designed
                agencies]
              </h2>
              <p>
                that's undefinable that a stand out user interface and
                conveinent user experience help sell product
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
    </div>
  );
};

export default Card1;
