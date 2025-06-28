import { Breadcrumb } from 'antd';
import React from 'react';
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/features/cart';

const Ditail = ({ product }) => {
    const dispatch = useDispatch();
  const {
    title,
    price,
    thumbnail,
    description,
    category,
    rating,
    stock,
    images
  } = product || {};



  return (
    <div className="container mx-auto px-4 md:px-10 py-10">
            <Breadcrumb
        items={[
          {
            href: '/',
            title: <HomeOutlined />,
          },
          {
            href: '/shop',
            title: (
              <>
                <UserOutlined />
                <span>shop</span>
              </>
            ),
          },
          {
            title: title || 'Product',
          },
        ]}
      />
      <div className="grid grid-cols-1 py-[20px] md:grid-cols-2 gap-10 items-start bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className='flex j'>
        <div className="w-full">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-[350px] md:h-[500px] object-cover rounded-t-2xl md:rounded-l-2xl"
            />
          
          <div className="flex  gap-4 mt-4 px-4 ">
            {images?.slice(0, 4).map((img, idx) => (
              <img
              key={idx}
              src={img}
              alt={`img-${idx}`}
              className="w-20 h-20 object-cover rounded-lg border"
              />
            ))}
          </div>
        </div>
            </div>

        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
            <p className="text-lg text-gray-600">{description}</p>
          </div>

          <p className="text-2xl font-semibold text-black">Price: ${price}</p>

          <div className="flex items-center gap-4">
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
              ⭐ {rating}/5
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {stock > 0 ? 'In Stock' : 'Out of Stock'}
            </span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              Category: {category}
            </span>
          </div>

          <button  onClick={() => dispatch(addToCart(product))} className="mt-6 bg-[#c89d38] text-white  px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ditail;
