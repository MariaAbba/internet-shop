import React from 'react'
import Navbar from '../components/Navbar'
import chair from './../assets/chair.jpg'
import chair1 from './../assets/chair1.jpg'
import sofa from './../assets/sofa.png'
import user from './../assets/user.jpg'
import lamp from './../assets/lamp.jpg'
import furniture from './../assets/furniture.jpg'
import { HiStar } from 'react-icons/hi'
import { FaArrowRight } from 'react-icons/fa'
import { LuShoppingCart } from 'react-icons/lu'
import Footer from '../components/Footer'
import StarRating from '../components/StarRating'

const Home = () => {
  return (
    <div className="container mx-auto relative overflow-hidden bg-white">
      <Navbar />
      <div className="px-6">
        <div
          className="hidden lg:block absolute bg-primary rounded-full xl:h-[35rem] xl:w-[40rem] lg:w-[30rem] lg:h-[30rem] -top-24 -right-60"
          data-aos="fade-right"
          data-aos-duration="3000"
        ></div>
        <div className="lg:flex gap-x-8 items-center justify-between pt-24">
          <div className="lg:w-2/5" data-aos="fade-right">
            {/* <div> */}
            <h1 className="lg:text-6xl lg:leading-normal font-semibold">
              Good Living <br /> Better{' '}
              <span className="text-primary">Life</span>
            </h1>
            <p className="py-4 xl:text-xl ">
              Find your way to the good living with our furniture.
            </p>
            <div className="relative h-14 flex flex-col justify-center my-6">
              {/* <label
                htmlFor="search"
                className=" absolute -left-96"
              ></label> */}
              <input
                type="text"
                id="search"
                placeholder="Office chair"
                className="bg-light rounded-full pl-6 h-full w-full absolute border-none outline-none text-base"
              />
              <button
                className="bg-secondary text-white rounded-full px-8 text-sm absolute border-none right-2 h-[80%] hoverBtn
            "
              >
                Search
              </button>
            </div>
            <div className="flex justify-between my-12 ">
              <span className="text-center">
                <h6 className="text-3xl font-semibold">102</h6>
                <p className="text-gray">Crafters</p>
              </span>
              <span className="text-center">
                <h6 className="text-3xl font-semibold">419</h6>
                <p className="text-gray">Total Products</p>
              </span>
              <span className="text-center">
                <h6 className="text-3xl font-semibold">5k</h6>
                <p className="text-gray">Relations</p>
              </span>
            </div>
            <div>
              <div
                className="lg:w-1/2 relative z-10"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="3000"
              >
                <img src={chair1} alt="Chair" className="w-full" />
              </div>
            </div>
          </div>

          <div className="lg:flex items-center justify-between my-16 flex-col">
            <div
              className="lg:w-2/5"
              data-aos="fade-up-right"
              data-aos-duration="3000"
            >
              <img src={chair} alt="armchair" className="w-full" />
            </div>

            <div className="lg:w-1/2 lg:pt-0 pt-8" data-aos="fade-down">
              <div className="flex flex-wrap justify-between items-center">
                <span>
                  <p className="text-gray text-sm font-semibold pb-2">
                    NEW ARRIVAL
                  </p>
                  <p className="text-2xl font-semibold ">Scott Chair</p>
                  <div className="pb-4 flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <HiStar
                        key={index}
                        className="text-[#FFCC02] text-base last:text-gray"
                      />
                    ))}
                    <p className="text-sm text-red-200 font-semibold pl-2">
                      35k reviews
                    </p>
                  </div>
                </span>
                <p className="text-gray xl:text-xl lg:w-1/2 leading-normal">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusantium dolorum magni perferendis ea laborum animi.
                </p>
              </div>

              <p className="text-2xl font-bold">
                $413<span className="text-sm">00</span>
              </p>
              <div className="flex justify-between items-center my-8">
                <span className="flex gap-x-3 items-center">
                  <button className="bg-secondary text-white px-6 py-2 rounded-full border-none hoverBtn">
                    Buy
                  </button>
                  <LuShoppingCart className="text-secondary text-xl" />
                </span>
                <p className="text-secondary xl:text-lg font-semibold text-sm cursor-pointer">
                  See more
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex items-center justify-between relative">
          <div className="flex lg:flex-col flex-wrap justify-between ">
            <div>
              <p className="text-gray font-semibold pb-2">THIS WEEK</p>
              <p className="text-4xl font-bold leading-normal">
                Complete <br /> furniture set
              </p>
              <p className="text-sm pt-8 pb-4">Crafted by: </p>
              <span className="flex items-center gap-x-4">
                <img src={user} alt="" className="w-10 h-10 rounded-full" />
                <img src={user} alt="" className="w-10 h-10 rounded-full" />
                <img src={user} alt="" className="w-10 h-10 rounded-full" />
              </span>
            </div>

            <div
              className="mt-16
            "
            >
              <p className="text-2xl font-semibold">Lowie Chair</p>
              <div className="pb-4 flex items-center">
                {[...Array(5)].map((_, index) => (
                  <HiStar
                    key={index}
                    className="text-[#FFCC02] text-base last:text-gray"
                  />
                ))}

                <p className="text-sm text-red-200 font-semibold pl-2">
                  8.9k reviews
                </p>
              </div>
              <p className="text-[#a8a8b9] xl:text-xl leading-normal">
                Dimension: 60cm x 50 cm x 30 cm <br /> Comfy stainless-steel
              </p>
              <p className="text-2xl font-bold py-4">
                $90.<span className="text-sm">00</span>
              </p>
              <span className="flex gap-x-3 items-center">
                <button className="bg-secondary text-white px-6 py-2 rounded-full border-none hoverBtn">
                  Buy
                </button>
                <LuShoppingCart className="text-secondary text-xl" />
              </span>
              <p className="text-secondary xl:text-lg font-semibold text-sm pt-6 cursor-pointer">
                See collections
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 lg:py-60 py-10">
            <img
              src={sofa}
              alt=""
              data-aos="zoom-in"
              className="w-full relative z-10 lg:ml-20"
            />
          </div>
          <div className="hidden lg:block bg-[#e4d7d1] h-full w-1/2 absolute right-0 rounded-l-[100px] "></div>
        </div>

        <section
          className=" lg:mt-24
          mt-12
          flex
          flex-wrap
          items-start
          justify-between"
        >
          <div className="lg:w-3/5">
            <p className="text-4xl font-bold leading-normal">
              Feature <br /> For You
            </p>
            <div className="flex flex-wrap justify-between mt-16 gap-x-16">
              <span className="text-gray text-xl flex flex-col gap-y-4 font-medium ">
                <p>Modern Chair</p>
                <p className="flex items-center justify-between text-secondary opacity-70">
                  Lamp <FaArrowRight className="text-base" />
                </p>
                <p>Wardrobe</p>
                <p>Bed</p>
                Table
              </span>
              <span className="lg:w-1/2 lg:pt-0 pt-8">
                <p>Fig Lamp</p>
                <div className="pb-4 flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <HiStar
                      key={index}
                      className="text-[#FFCC02] text-base last:text-gray"
                    />
                  ))}

                  <p className="text-sm text-red-200 font-semibold pl-2">
                    4.2k reviews
                  </p>
                </div>
                <p className="text-gray leading-10 text-xl pt-4">
                  Wooden based lamp, 5V <br />
                  outputed and have a rounded texture in the neck.
                </p>
                <span className="flex justify-between">
                  <img
                    src={lamp}
                    alt=""
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="3000"
                    className="w-1/3 rotate"
                  />
                  <img
                    src={lamp}
                    alt=""
                    className="w-1/3"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="3000"
                  />
                </span>
                <p className="text-2xl font-bold py-4 ">
                  $41.<span className="text-sm">00</span>
                </p>
                <div className="flex justify-between items-center">
                  <span className="flex gap-x-3 items-center">
                    <button className="bg-secondary text-white px-6 py-2 rounded-full border-none hoverBtn">
                      Buy
                    </button>
                    <LuShoppingCart className="text-secondary text-xl" />
                  </span>
                  <p className="text-secondary xl:text-lg font-semibold text-sm pt-6 cursor-pointer">
                    See more
                  </p>
                </div>
              </span>
            </div>
          </div>
          <span className="lg:w-2/5 relative">
            <img src={lamp} alt="" className="w-full" />
            <div className="bg-gray rounded-2xl"></div>
          </span>
        </section>
        <section
          className="rounded-[50px] w-full my-16 lg:h-[50rem] bg-[url('./src/assets/furniture.jpg')] bg-no-repeat bg-cover bg-bottom flex flex-col justify-center sm:p-16 p-8 "
          data-aos="zoom-in"
        >
          <h2
            className="text-[#464969] md:text-5xl text-3xl leading-snug flex flex-col font-semibold"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            Subscribe and get <span className="text-secondary">10% OFF</span>
          </h2>
          <p
            className="text-[#464969] text-sm leading-10"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2500"
          >
            Get 10% discount for all products
          </p>
          <div
            className="relative h-14 flex flex-col justify-center my-6 lg:w1/3"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2500"
          >
            <input
              type="email"
              placeholder="Your email"
              className="bg-white rounded-full pl-6 h-full w-full absolute border-none outline-none text-base"
            />
            <button className="bg-secondary text-white rounded-full sm:px-8 px-4 text-sm absolute border-none right-2 h-[80%] hoverBtn">
              Subscribe
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Home
