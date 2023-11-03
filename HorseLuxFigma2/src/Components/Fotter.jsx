

import React from "react";

const Footer = () => {
  return (
    <div className="bg-black py-10">
      <div className="text-white ml-2 flex">
        <p>
          <span className="text-red-600">Design</span> Dk
        </p>

        <div className="gap-y-5 ml-48 font-serif flex gap-x-10">
          <div className="flex flex-col gap-y-3">
            <p>Visit Us</p>
            <p>Office 3214 Los Angeles</p>
            <p>Near Ring Road United States</p>
          </div>

          <div className="flex flex-col gap-y-3">
            <p>Get In Touch</p>
            <div className="flex-col">
              <p>Paris</p>
              <p>+02(263542345)</p>
            </div>

            <div className="flex-col">
              <p>UK</p>
              <p>+02(263542345)</p>
            </div>

            <div className="flex-col">
              <p>Paris</p>
              <p>+02(263542345)</p>
            </div>
          </div>

          <div className="flex flex-col gap-y-3">
            <p>Services</p>
            <p>Product Design</p>
            <p>Branding</p>
            <p>Motion Design</p>
            <p>Design Outstanding</p>
          </div>

          <div className="flex flex-col gap-y-3">
            <p>Follow Us</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Yahoo</p>
          </div>

          <div className="flex flex-col gap-y-3">
            <p>Join Us Via E-mail</p>
            <p>Please provide your E-mail</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="border rounded-md p-2"
            />
            <button className="bg-red-500 text-white p-2 rounded-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
