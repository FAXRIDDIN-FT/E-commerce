import { useProduct } from '@/api/hooks/useProduct'
import Sorting from '@/components/ sorting/ Sorting'
import Hero from '@/components/hero/hero'
import Products from '@/components/products/Products'
import React from 'react'

const Home = () => {
  const {getProduct} = useProduct()
  const {data, isLoading} = getProduct({limit: 8})
  
  return (
    <div>
      <Hero/>
      <br />
      <br />
      <Sorting/>
      <br />
      <br />
      <br />
      <Products data={data?.data?.products} loading={isLoading} count={8}/>
      <div className='mx-auto flex justify-center mt-[20px] w-[200px] bg-[#B88E2F] text-[#fff] p-[10px] '>
        <button>Show more</button>
      </div>
    </div>
  )
}

export default Home