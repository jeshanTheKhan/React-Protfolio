import React from 'react';
import img1 from '../Image/Services/smm.jpg'
import img2 from '../Image/Services/data.jpg'
import img3 from '../Image/Services/ads.jpg'
import img4 from '../Image/Services/images.png'
import img5 from '../Image/Services/react.png'
import img6 from '../Image/Services/download.png'

const service = () => {
    return (
      <>
  <div className='bg-gray-800 py-10'>
  <h1 className='mx-10 md:mx-30 py-5 text-2xl text-[#179800] '>Services</h1>
  <div className="mx-10 md:mx-30 mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
    
    <div className="card bg-base-100 w-full shadow-sm border">
      <figure>
        <img
          src={img1}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Social Media Manager</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </div>
    
    <div className="card bg-base-100 w-full shadow-sm border">
      <figure>
        <img
          src={img2}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Data Entry</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </div>

    <div className="card bg-base-100 w-full shadow-sm border">
      <figure>
        <img
          src={img3}
          alt="Shoes" className='h-38 w-50'/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">Ad's Run</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </div>

    <div className="card bg-base-100 w-full shadow-sm border">
      <figure>
        <img
          src={img4}
          alt="Shoes" className='h-40'/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">Font-End(Normal)</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </div>
    <div className="card bg-base-100 w-full shadow-sm border">
      <figure>
        <img
          src={img5}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Font-End(React)</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </div>
    <div className="card bg-base-100 w-full shadow-sm border">
      <figure>
        <img
          src={img6}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Back-End(Laravel)</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </div>

  </div>
  </div>
</>

    );
};

export default service;