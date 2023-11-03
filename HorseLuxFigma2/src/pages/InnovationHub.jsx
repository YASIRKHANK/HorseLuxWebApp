import React from 'react';
import img from "../images/bulb.jpg";


const InnovationHub = () => {
  return (
    <div>
     
      <div className="text-center">         {/* first container */}      
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Innovation Hub</h1>
        <p className="text-gray-600 mb-8">
          Explore the cutting-edge ideas and innovations that drive us forward.
        </p>
      </div>
     
      <div className="flex  md:flex-row">       {/* 2nd container */}
        <div className="w-full md:w-1/2 p-4">
          <img
            src={img}
            alt="Innovation Hub"
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            At the Innovation Hub, we are dedicated to fostering creativity and
            pushing the boundaries of what's possible. Our mission is to create
            a space where ideas flourish and innovation thrives.
          </p>
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <p className="text-gray-700 mb-4">
            - State-of-the-art facilities for research and development
            <br />
            - Workshops and events to nurture new talent
            <br />
            - Collaboration with industry experts and visionaries
            <br />
            - Access to cutting-edge technology and resources
          </p>
        </div>
      </div>
    </div>
  );
};

export default InnovationHub;
