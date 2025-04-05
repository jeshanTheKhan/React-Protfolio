import React from "react";
import img1 from '../Image/ce203ad8-16ee-4b33-87d4-bb417785b1a5-1.png'

const hero = () => {
  return (
    <>
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse gap-5 px-5 lg:px-0 ">
        <img
          src={img1}
          className="rounded-lg shadow-2xl w-full px-3 md:w-[600px] h-auto md:h-[600px] "
          alt="Md. Jeshan Khan"
        />
        <div className="px-3 pl-3  md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">Md. Jeshan Khan</h1>
          <h2 className="text-xl md:text-2xl py-3 font-bold text-[#179800]">Full Stack Developer</h2>
          <p className="py-3 text-base md:text-lg">
            Hello! My name is Jeshan. I'm a professional Full Stack Web Developer. I can handle both Back-End and Front-End work for your commercial or business website, which will be beneficial for your business.
          </p>
          <button className="btn btn-primary">Contact</button>
        </div>
      </div>
    </div>
  </>
  
  );
};

export default hero;
