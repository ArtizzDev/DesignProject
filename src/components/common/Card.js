import React from 'react';

const Card = ({ children, img, name, price, ...props }) => {
  return (
    <div {...props} className="relative w-[200px] h-[300px] overflow-hidden rounded-2xl shadow-lg group">
      <img
        src={img}
        alt=""
        className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-200"
      />
      <div className="w-11/12 h-[60px] bg-slate-50 absolute bottom-0 left-0  items-center mx-[9px] mb-4 rounded-2xl rounded-tr-2xl shadow-md flex flex-col">
      <div className=" text-black">{name}</div>
        <div className='flex gap-5 mt-2'>
        <div className=" text-black">{children}</div>
          <div className=" text-orange-400 font-semibold">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
