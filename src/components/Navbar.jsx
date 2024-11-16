import React, { useState } from 'react'
import { HiShoppingCart } from 'react-icons/hi'
import { FaUser } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { IoMdMenu } from 'react-icons/io'

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false)

  const showDropdown = () => {
    setDropdown(!dropdown)
  }

  return (
    <nav className="w-full h-24 flex flex-col justify-center items-center lg:bg-transparent bg-white lg:relative fixed z-20">
      <div className="container mx-auto lg:px-6">
        <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              <h2 className="font-semibold text-3xl">Cobalten</h2>
            </div>
          </div>
          <ul className="flex-1 flex justify-center items-center xl:gap-12 gap-x-4 max-lg:hidden">
            <a
              href="#"
              className="leading-normal no-underline text-black font-bold text-lg hover:text-secondary"
            >
              Blog
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-black font-bold text-lg hover:text-secondary"
            >
              Shop
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-black font-bold text-lg hover:text-secondary"
            >
              Contacts
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-black font-bold text-lg hover:text-secondary"
            >
              Products
            </a>
          </ul>
          <div className="flex max-lg:hidden gap-x-4">
            <button className="bg-secondary rounded-[10px] p-2 border-none text-white cursor-pointer hover:bg-white hover:text-secondary">
              <HiShoppingCart size={18} />
            </button>
            <button className="bg-secondary rounded-[10px] p-2 border-none text-white cursor-pointer hover:bg-white hover:text-secondary">
              <FaUser size={18} />
            </button>
          </div>
          {dropdown ? (
            <div
              onClick={() => showDropdown()}
              className="lg:hidden text-[22px] cursor-pointer text-black"
            >
              <IoMdClose />
            </div>
          ) : (
            <div
              onClick={showDropdown}
              className="lg:hidden text-[22px] cursor-pointer text-black"
            >
              <IoMdMenu />
            </div>
          )}
        </div>
        {dropdown ? (
          <div
            onClick={showDropdown}
            className="lg:hidden w-full h-[100vh] fixed top-24 bg-white ease-in-out duration-100"
          >
            <div className="w-full h-[320px] flex flex-col items-baseline pt-8 gap-4">
              <ul className="text-center p-0 flex flex-col justify-center w-full gap-y-8">
                <a
                  href="#"
                  className="leading-normal no-underline text-black font-bold text-lg hover:text-primary"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="leading-normal no-underline text-black font-bold text-lg hover:text-primary"
                >
                  Shop
                </a>
                <a
                  href="#"
                  className="leading-normal no-underline text-black font-bold text-lg hover:text-primary"
                >
                  Contacts
                </a>
                <a
                  href="#"
                  className="leading-normal no-underline text-black font-bold text-lg hover:text-primary"
                >
                  Products
                </a>
              </ul>
              <div className="flex flex-col justify-center items-center w-full gap-y-8 mt-4">
                <button className="bg-secondary rounded-[10px] p-2 border-none text-white cursor-pointer hover:bg-white ">
                  <HiShoppingCart size={18} />
                </button>
                <button className="bg-secondary rounded-[10px] p-2 border-none text-white cursor-pointer hover:bg-white hover:text-secondary">
                  <FaUser size={18} />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  )
}

export default Navbar
