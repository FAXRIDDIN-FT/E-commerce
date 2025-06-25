import { useProduct } from "@/api/hooks/useProduct";
import Products from "@/components/products/Products";
import { Pagination } from "antd";
import React from "react";
import shop from "../../assets/hero2.png";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";

const Shop = () => {
  const navigate = useNavigate();
  const { getProduct } = useProduct();
  const [params, setParams] = useSearchParams();

  const page = Number(params.get("page")) || 1;
  const pageSize = Number(params.get("pageSize")) || 16;

  const { data, isLoading } = getProduct({
    limit: pageSize,
    skip: pageSize * (page - 1),
  });

  const handleChangePage = (page, newPageSize) => {
    if (newPageSize !== pageSize) {
      params.set("pageSize", newPageSize);
      params.set("page", "1");
    } else {
      params.set("page", page);
    }
    setParams(params);
  };

  return (
    <div>
      <div className=""
              style={{ backgroundImage: `url(${shop})` }}>

      <div className="container mx-auto">
        <div
          className="flex flex-col md:flex-row justify-center items-center text-center md:text-left h-auto md:h-[500px] bg-cover bg-center px-4"
  
          >
          <div className="bg-white/80 p-6 rounded-md">
            <h1 className="text-[32px] md:text-[40px] font-black mb-4">Shop</h1>
            <div className="flex items-center justify-center md:justify-start gap-2 text-[18px]">
              <Link to="/" className="text-gray-700 hover:text-black">
                Home
              </Link>
              <RightOutlined />
              <Link to="/shop" className="text-gray-700 hover:text-black">
                Shop
              </Link>
            </div>
          </div>
        </div>
          </div>
 </div>
        <div className="my-10">
          <Products
            data={data?.data?.products}
            loading={isLoading}
            count={16}
          />

          <div className="flex justify-center my-6">
            <Pagination
              current={page}
              onChange={handleChangePage}
              total={data?.data?.total}
              pageSize={pageSize}
              showSizeChanger
              pageSizeOptions={["8", "16", "24", "32"]}
            />
          </div>
        </div>
     
    </div>
  );
};

export default Shop;
  