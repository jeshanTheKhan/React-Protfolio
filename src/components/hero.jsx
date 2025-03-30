import React from "react";
import img1 from '../Image/ce203ad8-16ee-4b33-87d4-bb417785b1a5-1.png'

const hero = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-50">
          <img
            src={img1}
            className="rounded-lg shadow-2xl md:w-[600px] md:h-[600px]" 
          />
          <div>
            <h1 className="text-5xl font-bold">Md.Jeshan Khan</h1>
            <h1 className="text-2xl py-5 font-bold text-[#179800]">Full Stack Developer </h1>
            <p className="py-3">
              Hello!My name is Jeshan.I'm Professional Full StackWeb
              Developer.I can do Back End and Front-End work for your Commercial or Business
              Web Side.That will be helpful for your business.
            </p>
            <button className="btn btn-primary">Contract</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default hero;
