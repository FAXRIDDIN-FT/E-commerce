import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/logo.svg";
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserDeleteOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Drawer, Modal } from "antd";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <header>
      <nav className="container mx-auto items-center py-[20px] px-4">
        <div className="flex justify-between items-center">
          <div className="flex">
            <img src={logo} alt="logo" className="w-[120px]" />
          </div>

          <div className="hidden md:flex items-center gap-[75px]">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/shop"}>Shop</NavLink>
            <NavLink to={"/"}>About</NavLink>
            <NavLink to={"/"}>Contact</NavLink>
          </div>

          <div className="hidden md:flex items-center gap-[20px] text-2xl">
            <UserDeleteOutlined className="cursor-pointer" />
            <SearchOutlined
              className="cursor-pointer"
              onClick={() => setModalOpen(true)}
            />
            <NavLink to={"/wishlist"}>
              <HeartOutlined className="cursor-pointer" />
            </NavLink>
            <NavLink to={"/cart"}>
              {" "}
              <ShoppingCartOutlined className="cursor-pointer" />
            </NavLink>
          </div>

          <div className="md:hidden">
            <MenuOutlined
              className="text-2xl"
              onClick={() => setDrawerOpen(true)}
            />
          </div>
        </div>
      </nav>

      <Drawer
        placement="left"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        <div className="flex justify-center">
          <img src={logo} alt="logo" className="w-[120px]" />
        </div>
        <br />
        <div className="flex flex-col gap-5 text-lg">
          <NavLink to={"/"} onClick={() => setDrawerOpen(false)}>
            Home
          </NavLink>
          <NavLink to={"/shop"} onClick={() => setDrawerOpen(false)}>
            Shop
          </NavLink>
          <NavLink to={"/"} onClick={() => setDrawerOpen(false)}>
            About
          </NavLink>
          <NavLink to={"/"} onClick={() => setDrawerOpen(false)}>
            Contact
          </NavLink>
        </div>
      </Drawer>

      <Modal
        title="Qidiruv"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
      >
        <form className="flex flex-col gap-3">
          <input
            type="Qidiruv"
            placeholder="Qidiruv"
            className="border px-3 py-2 rounded"
          />

          <button
            type="submit"
            className="bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Qidirish
          </button>
        </form>
      </Modal>
    </header>
  );
};

export default React.memo(Header);
