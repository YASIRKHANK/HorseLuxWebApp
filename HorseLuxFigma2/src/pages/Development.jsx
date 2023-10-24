import React from 'react';
import img from "../images/handlaptop.jpg";

const Development = () => {
  return (
    <div className='bg-gray-300'>
      <p className="font-serif p-10 ml-44 text-4xl font-bold">Scope of Web Design and Development Services</p>
      <div className="flex gap-x-24">
        <img src={img}  style={{width:'500px'}} alt="Development" />
        {/* first container */}
        <div className='flec-col space-y-10 '>
        <div >
          <p className="font-serif text-2xl font-bold">1.Research</p>
          <hr className="w-36 my-2 border-b-2 border-black" />
          <ul className="list-disc pl-4 font-serif">
            <li>Understand Business</li>
            <li>Business Goals</li>
            <li>Customer and their expectations/behavior</li>
            <li>Add text Holder</li>
          </ul>
        </div>

        {/* About design */}
        <div>
          <p className="font-serif text-2xl font-bold">2.Design</p>
          <hr className="w-36 my-2 border-b-2 border-black" />
          <ul className="list-disc pl-4 font-serif">
            <li>Creaet a gernal appearance the Home page,sub page, the blog templet and and additional templet needed</li>
            <li>Add text Holder</li>
            <li>Knwoledege about website</li>
          </ul>
        </div>

        {/* About development */}
        <div>
          <p className="font-serif text-2xl font-bold">3.Development</p>
          <hr className="w- m-48y-2 border-b-2 border-black" />
          <ul className="list-disc pl-4 font-serif">
            <li>Start Creating and coding for primary and secondary website site pages using html css & javascript</li>
            <li>Develop Front end</li>
            <li>React website</li>
          </ul>
        </div>
        </div>

  {/* 2nd container */}
  <div className='flec-col space-y-10'>
        <div >
          <p className="font-serif text-2xl font-bold">1.WordPress integration</p>
          <hr className="w-36 my-2 border-b-2 border-black" />
          <ul className="list-disc pl-4 font-serif">
            <li>Integrate the new Design with wordpress theme then the Q/A department will test the site across different browser</li>
            <li>Get knowledge about wordpress</li>
            <li>Design wordPress theme's</li>
          </ul>
        </div>

        {/* About user testing */}
        <div>
          <p className="font-serif text-2xl font-bold">2.User Testing</p>
          <hr className="w-36 my-2 border-b-2 border-black" />
          <ul className="list-disc pl-4 font-serif">
            <li>You will learn anout user testing</li>
            <li>After the completion of wwebsite you will test with user</li>
            <li>Get knowledge about user testing</li>
          </ul>
        </div>

        {/* About support */}
        <div>
          <p className="font-serif text-2xl font-bold">3.Support Retainer</p>
          <hr className="w-36 my-2 border-b-2 border-black" />
          <ul className="list-disc pl-4 font-serif">
            <li>Support development team</li>
            <li>cpome to coding</li>
            <li>React website</li>
          </ul>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Development;
