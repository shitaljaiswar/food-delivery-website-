
import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DecreamentQty, IncreamentQty, RemoveItem } from '../redux/cartSlice';

function Card2({ name, id, price, image, qty }) {
    let dispatch=useDispatch()
  return (
    <div className='w-full h-[130px] p-2 shadow-lg flex justify-between items-center'>
      {/* Left Section */}
      <div className='w-[60%] h-full rounded-lg flex gap-5 items-center'>
        <div className='w-[45%] h-full overflow-hidden rounded-lg'>
          <img src={image} alt={name} className='w-full h-full object-cover' />
        </div>

        <div className='flex flex-col gap-3 justify-between'>
          <div className='text-lg text-gray-700 font-semibold'>{name}</div>
          <div className='bg-slate-400 w-24 h-10 flex rounded-lg overflow-hidden border-2 border-orange-600 md:w-28'>
            <button className='bg-slate-300 w-8 h-full text-xl font-bold hover:bg-orange-400 md:w-9' onClick={()=>{qty>1?dispatch(DecreamentQty(id)):1}} >-</button>
            <span className='text-orange-500 bg-slate-200 w-12 h-full text-xl font-bold flex justify-center items-center'>   {qty || 1} </span>
            <button className='bg-slate-300 w-8 h-full text-xl font-bold hover:bg-orange-400 md:w-9' onClick={()=>{dispatch(IncreamentQty(id))}} >+</button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className='flex flex-col justify-between items-end h-full'>
        <span className='text-lg font-bold text-orange-500'>Rs {price}/-</span>
        <RiDeleteBin6Line className='size-6 mb-4 text-red-700 hover:text-red-500 cursor-pointer' onClick={()=>dispatch(RemoveItem(id))} />
      </div>
    </div>
  );
}

export default Card2;
