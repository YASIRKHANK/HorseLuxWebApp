import React from 'react';
import img from "../images/uidesigned.jpg";

const UIUXDesignPage = () => {
  return (
    <div className="bg-gradient-to-r from-[#4A90E2] via-[#64B2CC] to-[#51B7AE] min-h-screen flex flex-col justify-between">
      <header className="bg-sky-900 text-white py-8 text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#4A90E2] via-[#64B2CC] to-[#51B7AE] text-transparent bg-clip-text mb-4">Explore UI/UX Design</h1>
        <p className="text-lg">Crafting User-Centered Experiences</p>
      </header>
      <div className="container mx-auto py-8 flex space-x-5">
        <img
          src={img}
          alt="UI/UX Design Sample"
          className="mb-8 ml-2 rounded-lg" style={{ height: "400px", width: '450px' }}
        />
        <div className='flex-col'>
          <h2 className="text-3xl font-bold mb-2">What is UI/UX Design?</h2>
          <p className="text-lg mb-4">
            UI/UX design stands for User Interface and User Experience design. It's all about creating interfaces that are user-friendly, visually appealing, and provide a seamless experience to users. It combines elements of graphic design, psychology, and technology to design intuitive and engaging digital products.
          </p>
          <h2 className="text-3xl font-bold mb-2">Key Principles of UI/UX Design</h2>
          <ul className="list-disc pl-4 text-lg">
            <li>Usability: Designs should be easy to use and navigate.</li>
            <li>Consistency: Maintain a consistent design throughout the product.</li>
            <li>Clarity: Ensure content and actions are clear to users.</li>
            <li>Accessibility: Design for all users, including those with disabilities.</li>
            <li>Feedback: Provide feedback to user actions for a better experience.</li>
          </ul>
          <h2 className="text-3xl font-bold mt-4">Importance of UI/UX Design</h2>
          <p className="text-lg">
            A great UI/UX design can significantly impact the success of a digital product. It leads to higher user satisfaction, increased conversions, and brand loyalty. It's about creating not just functional, but enjoyable and memorable experiences for users.
          </p>
        </div>
      </div>
      <footer className="bg-sky-900 text-white py-4 text-center">
        <p className="text-sm">&copy; 2023 UI/UX Design Showcase</p>
      </footer>
    </div>
  );
};

export default UIUXDesignPage;
