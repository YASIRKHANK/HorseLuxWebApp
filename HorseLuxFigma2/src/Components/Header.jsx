


import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillDribbbleCircle, AiOutlineTwitter,AiOutlineArrowRight } from "react-icons/ai";

const Header = () => {
  return (
    <div className="bg-black py-10">
      <div className="text-white ml-2 flex">
        <p>
          <span className="text-red-600">Design</span> Dk
        </p>

        <div className="flex gap-x-10 ml-48 font-serif">
          <p>Case</p>
          <p>Services</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Blogs</p>
          <p>Contacts</p>
        </div>

        
      <div className="flex mt-2 ml-32 gap-x-3">
        <BiLogoFacebook className="text-white" />
        <AiFillDribbbleCircle className="text-white" />
        <AiOutlineTwitter className="text-white" />
      </div>

      <div className=" bg-red-500 py-1 px-3 ">
        <button>Let's Talk</button>
      </div>
      </div>

      <div className="text-white mt-16 ml-80">
        <h1 style={{fontSize:"60px"}}>Welcome To Our Blog </h1>
        <p className="mt-2">
             Stay update with the newest designed and development stories and case studies<br/>
            and insight designed by Dk designed team
        </p>
        <p className="mt-5 ml-52 flex gap-x-2">Learn more <AiOutlineArrowRight className="mt-2 " /></p>
      </div>
     
    </div>
  );
};

export default Header;
