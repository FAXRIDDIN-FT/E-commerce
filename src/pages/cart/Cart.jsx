import {
  decrementCart,
  incrementCart,
  removeCart,
} from "@/redux/features/cart";
import { DeleteOutlined } from "@ant-design/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  return (
    <div className="p-4 md:p-10 container mx-auto">
      <h2 className="text-2xl font-bold mb-6">   Your Cart</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-6">
          {cart?.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cart.map((product) => (
              <div
                className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_auto_auto_auto] items-center gap-4 p-4 border rounded-xl shadow-sm bg-white"
                key={product.id}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-20 h-20 object-contain rounded-md"
                  />
                  <div>
                    <p className="font-semibold text-lg">{product.title}</p>
                    <p className="text-sm text-gray-500">${product.price}</p>
                  </div>
                </div>

                <div className="text-center hidden md:block">
                  <p className="text-md">${product.price}</p>
                </div>

                <div className="flex items-center gap-3 justify-center">
                  <button
                    className="px-3 py-1 bg-gray-200 text-lg rounded disabled:opacity-50"
                    disabled={product.quantity <= 1}
                    onClick={() => dispatch(decrementCart(product))}
                  >
                    −
                  </button>
                  <span className="font-semibold">{product.quantity}</span>
                  <button
                    className="px-3 py-1 bg-gray-200 text-lg rounded"
                    onClick={() => dispatch(incrementCart(product))}
                  >
                    +
                  </button>
                </div>

                <div className="text-center font-semibold">
                  ${Math.floor(product.price * product.quantity)}
                </div>

                <div className="text-center">
                  <button
                    onClick={() => dispatch(removeCart(product))}
                    className="text-red-500 hover:text-red-600"
                  >
                    <DeleteOutlined />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border rounded-xl shadow-md bg-white p-6 h-fit">
          <h3 className="text-xl font-semibold text-center mb-4">
            Cart Totals
          </h3>
          <div className="space-y-2 text-center text-lg">
            <p className="text-[13px]">
              <span className="font-medium ">Subtotal: Rs. </span> 
              {Math.floor(
                cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
              )}
            </p>
            <p className="font-bold text-xl text-[#c89d38]">
              Total: Rs.
              {Math.floor(
                cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
              )}
            </p>
            <button className="mt-4 w-full bg-[#c89d38] hover:bg-[#b5892f] text-white py-2 rounded-md">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
