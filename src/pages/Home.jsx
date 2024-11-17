import React from 'react'
import Navbar from '../components/Navbar'
import chair from './../assets/chair.jpg'
import chair1 from './../assets/chair1.jpg'
import user from './../assets/user.jpg'
import { HiStar } from 'react-icons/hi'
import { MdOutlineShoppingCart } from 'react-icons/md'

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
                className="position: absolute -left-96"
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

          <div className="lg:flex items-center justify-between my-16">
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
                  <MdOutlineShoppingCart className="text-secondary text-xl" />
                </span>
                <p className="text-secondary xl:text-lg font-semibold text-sm cursor-pointer">
                  See more
                </p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div>
                <p>THIS WEEK</p>
                <p>
                  Complete <br /> furniture set
                </p>
                <p>Crafted by: </p>
                <span>
                  <img src={user} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

