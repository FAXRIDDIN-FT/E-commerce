import Products from '@/components/products/Products';
import { Empty } from 'antd';
import React from 'react'
import { useSelector } from 'react-redux'

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value)
  console.log(wishlist);
  
  return (
    <div className='mt-[40px]'>
      {
        wishlist.length ?
        <Products data={wishlist}/>
        :
        <div className='mt-[100px]'>
            <Empty />;
        </div>
      }
    </div>
  )
}

export default Wishlist