import React from 'react';
import { LuVegan } from "react-icons/lu";
import { GiChickenLeg } from "react-icons/gi";
import {useDispatch} from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';


function Card({ name, price, id, type, image }) {
    let dispatch=useDispatch()
    return (
        <div className='w-56 h-80 bg-white p-3 rounded-lg flex flex-col gap-2 shadow-2xl shadow-gray-500 overflow-hidden hover:border-2 border-orange-500'>
            <div className='w-full h-[60%]'>
                <img src={image} alt={name} className='w-full h-full object-cover rounded-md ' />
            </div>
            <div className='text-xl font-semibold'>{name}</div>
            <div className='w-full flex justify-between items-center'>
                <div className='text-lg font-bold text-orange-500'>Rs {price}/-</div>
                <div className='flex items-center gap-2 font-semibold'>
                    {type === "veg" ? <LuVegan className='text-green-800' /> : <GiChickenLeg className='text-red-700'/>}
                    <span>{type}</span>
                </div>
            </div>
            <button className='w-full p-2 rounded-lg font-bold bg-orange-400 hover:bg-orange-500 'onClick={()=>{dispatch(AddItem({id:id, name:name, price:price, image:image, qty:1}));
             toast.success("item added")}

        }> Add to dish </button>
        </div>
    );
}

export default Card;
