import React, { useContext, useEffect } from 'react'
import { MdOutlineFoodBank } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from './context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux'

function Nav() {
    let {input,setInput,cate,setCate,showcart,setShowCart}=useContext(dataContext)
    useEffect(()=>{
       let newList= food_items.filter((item)=>item.food_name.includes
       (input)||item.food_name.toLowerCase().includes(input))
       setCate(newList)
    },[input])

      let items=useSelector(state=>state.cart)

    return (
        <div className='w-full h-[60px] bg-orange-400 flex justify-between items-center px-3 shadow-xl md:px-5' >
            <div className='size-10 bg-cyan-50 flex justify-center items-center rounded-md md:size-12 '>
                <MdOutlineFoodBank className='size-7 text-orange-500'/>
 </div>
             <span className=' absolute left-14 font-bold text-2xl text-cyan-50 sm:text-3xl
              sm:left-20'>ForkFleet</span>

            <form className=' absolute right-14 w-[35%] h-[40px] rounded-md bg-cyan-50 
            flex items-center px-3 gap-4   sm:w-[50%] sm:right-24'
             onSubmit={(e)=>e.preventDefault()}>
                <IoIosSearch  className='size-12 text-orange-500'/>
                <input className=' w-[220%] h-[30px] '  type="text" placeholder='search items... ' 
                onChange={(e)=>setInput(e.target.value)} value={input}/>
            </form>
            <div className='size-10 mb-1 bg-cyan-50 flex justify-center items-center rounded-md 
             md:size-12'onClick={()=>{
                setShowCart(true)
             }}>
                <span className='absolute top-1 right-2 md:right-6 text-orange-500 font-semibold gap-1'>{items.length}</span>
                <LuShoppingBag  className='size-6 text-orange-500 ' />
            </div>
        </div>
    )
}

export default Nav

