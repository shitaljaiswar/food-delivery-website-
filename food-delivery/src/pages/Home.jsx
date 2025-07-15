// import React from 'react';
import Nav from '../components/Nav';
import Categories from '../category';
import Card from '../components/Card';
import Card2 from '../components/Card2';
import { food_items } from '../food';
import { useContext, useState } from 'react';
import { dataContext } from '../components/context/UserContext';
import { RxCrossCircled } from "react-icons/rx";
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';



function Home() {
  let { cate, setCate, input, showcart, setShowCart } = useContext(dataContext)
  function filter(category) {
    if (category === "All") {
      setCate(food_items)
    } else {
      let newList = food_items.filter(
        (item) => item.food_category.toLowerCase() === category.toLowerCase()
      );
      setCate(newList)
    }
  }

  let items = useSelector(state => state.cart)
  let subtotal = items.reduce((total, item) => total + item.qty * item.price, 0)
  let deliveryFee = 29;
  let taxes = subtotal * 0.5 / 100;
  let total = Math.floor(subtotal + deliveryFee + taxes)

  return (
    <div className='bg-slate-300 w-full min-h-screen'>
      <Nav />

      {/* Categories Section */}
      {!input ?
        <div className='flex flex-wrap justify-center items-center gap-9 p-7 w-full'>
          {Categories.map((item, index) => (
            <div
              key={index}
              className='size-24 bg-white flex flex-col items-start gap-2 p-5 justify-start font-semibold
             text-gray-600 rounded-md shadow-lg
              hover:bg-slate-300 cursor-pointer
               transition-all duration-200 ' onClick={() => filter(item.name)} >
              <div>{item.icon}</div>
              <div>{item.name}</div>
            </div>
          ))}
        </div> : null}

      {/* Food Cards Section */}
      <div className='flex flex-wrap justify-center gap-7 p-7'>
        {cate.length >1 ? (
          cate.map((item) => (
            <Card
              key={item.id}
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              id={item.id}
              type={item.food_type}
            />
          )) 
        ):( <div className='text-center font-bold text-2xl text-orange-500 pt-36'>No Dish Found</div>)}

      </div>
      <div className={`md:w-[40vw] w-[100%] h-full fixed top-0 right-0 bg-slate-100 shadow-xl p-6 transition-all overflow-auto ${showcart ? 'translate-x-0' : 'translate-x-full'}`}>
        <header className='w-[100%} flex justify-between items-center'>
          <span className='text-orange-500 text-xl font-semibold'>Order items</span>
          <RxCrossCircled className='text-orange-600 size-7 font-semibold cursor-pointer hover:text-orange-300' onClick={() => setShowCart(false)} />
        </header>

        {items.length > 0 ?
          <>
            <div className='w-full mt-7 flex flex-col gap-6'>
              {items.map((item) => (
                <Card2
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                  qty={item.qty}
                />
              ))}
            </div>
            <div className='w-full border-t-2 bodicrder-gray-950 mt-7 flex flex-col gap-1 p-6'>
              <div className='w-full flex justify-between items-center'>
                <span className='text-gray-900 font-semibold text-lg'>Subtotal</span>
                <span className='text-orange-600 font-bold text-lg'>Rs{subtotal}/-</span>
              </div>
              <div className='w-full flex justify-between items-center'>
                <span className='text-gray-900 font-semibold text-lg'>Delivery Fee</span>
                <span className='text-orange-600 font-bold text-lg'>Rs{deliveryFee}/-</span>
              </div>
              <div className='w-full flex justify-between items-center'>
                <span className='text-gray-900 font-semibold text-lg'>Taxes</span>
                <span className='text-orange-600 font-bold text-lg'>Rs{taxes}/-</span>
              </div>
            </div>
            <div className='w-full border-t border-gray-700 pt-2 flex justify-between items-center'>
              <span className='text-gray-900 font-semibold text-xl'>Total</span>
              <span className='text-orange-600 font-bold text-xl'>Rs{total}/-</span>
            </div>
            <button className='mt-5 w-full p-2 rounded-lg font-bold bg-orange-400 hover:bg-orange-500' onClick={()=>{toast.success("Order Place..")}}>Place Order</button>
          </> : <div className='text-center font-bold text-2xl text-orange-500 pt-5'> Empty</div>}

      </div>
    </div>
  );
}

export default Home;



