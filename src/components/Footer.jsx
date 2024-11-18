import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="container mx-auto px-6 py-8 bg-white rounded-b-[50px]">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <div className="lg:w-[60%] flex items-center text-2xl gap-8">
          <FaInstagram aria-label="Instagram" />
          <FaGoogle aria-label="Google" />
          <FaXTwitter aria-label="Twitter" />
          <FaFacebook />
        </div>
        <div className="flex justify-between gap-8 md:w-1/3 w-full">
          <div className="flex flex-col gap-8">
            <h6 className="text-xl font-semibold">Shop</h6>
            <a
              href="#"
              className="no-underline text-black hover:text-secondary"
            >
              Chair
            </a>
            <a
              href="#"
              className="no-underline text-black hover:text-secondary"
            >
              Table
            </a>
            <a
              href="#"
              className="no-underline text-black hover:text-secondary"
            >
              Bed
            </a>
          </div>
          <div className="flex flex-col gap-8">
            <h6 className="text-xl font-semibold">Help</h6>
            <a
              href="#"
              className="no-underline text-black hover:text-secondary"
            >
              Contact
            </a>
            <a
              href="#"
              className="no-underline text-black hover:text-secondary"
            >
              Payment
            </a>
            <a
              href="#"
              className="no-underline text-black hover:text-secondary"
            >
              FAQ
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap  gap-4 items-center justify-between mt-16">
        <p>&copy; 2024 Cobalten. All Right Reserved</p>
        <div className="flex justify-between lg:w-1/3 w-full ">
          <a href="#" className="no-underline text-black hover:text-secondary">
            Privacy Policy
          </a>
          <a href="#" className="no-underline text-black hover:text-secondary">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
