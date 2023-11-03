
import React from 'react';
import img from "../images/city.jpg";

const MotionDesignPage = () => {
  return (
    <div className="bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] min-h-screen flex flex-col justify-between">
      <header className="bg-teal-300 text-white py-8 text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] text-transparent bg-clip-text mb-4">Explore Motion Design</h1>
        <p className="text-lg text-black font-serif">Captivating the World Through Animation</p>
      </header>
      <div className="container mx-auto py-8 flex space-x-5">
        <img
          src={img}
          alt="Motion Design Sample"
          className="mb-8 ml-2 rounded-lg" style={{ height: "400px", width: '450px' }}
        />
        <div className='flex-col'>
          <h2 className="text-3xl font-bold mb-2">What is Motion Design?</h2>
          <p className="text-lg mb-4">
            Motion design is a captivating field that combines graphic design and animation to create visually engaging content. It's all about bringing graphics, text, and images to life through movement and transitions.
          </p>
          <h2 className="text-3xl font-bold mb-2">Applications of Motion Design</h2>
          <p className="text-lg mb-4">
            Whether it's in advertising, video games, user interfaces, or film, motion design plays a pivotal role in captivating audiences and conveying messages in a dynamic way.
          </p>
          <h2 className="text-3xl font-bold mb-2">Explore the World of Animation</h2>
          <p className="text-lg">
            This page is a glimpse into the world of motion design, showcasing its power to transform static visuals into lively, interactive, and captivating experiences.
          </p>
        </div>
      </div>
      <footer className="bg-teal-300 text-white py-4 text-center">
        <p className="text-sm text-black">&copy; 2023 Motion Design Showcase</p>
      </footer>
    </div>
  );
};

export default MotionDesignPage;

