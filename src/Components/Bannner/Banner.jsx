import React, { useRef } from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import './Banner.css'

const Banner = () => {
// ================Custome variable==================
    let sliderRef = useRef(null)
   
// ===============Slider function==============
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 70000,
        // responsive: [
        //     {
        //       breakpoint: 1024,
        //       settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 3,
        //         infinite: true,
        //         dots: true
        //       }
        //     },
        //     {
        //       breakpoint: 600,
        //       settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         initialSlide: 1,
        //         dots: true
        //       }
        //     },
        //     {
        //       breakpoint: 480,
        //       settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //       }
        //     }
        //   ]
    };
  return (
    <>
    <div className="w-full h-screen bg-black">

      <div className="container">
            <div className="slider-container">
                <Slider ref={slider => (sliderRef = slider)} {...settings} >
                    <div>
                    <div className=" flex md:gap-[30px] sm:gap-[20px] items-center justify-center">
                            <img className='joy_img lg:w-[340px] md:w-[413px] sm:w-[200px]' src="Image/MN.jpg" alt="" />
                            <div className="text">
                                <h2 className='sm:text-[24px] sm:w-[200px] md:w-[250px] md:text-[40px] lg:w-[300px] lg:text-[30px] font-Bricolage font-bold text-gray-200'>New Panigale V4 2025 unveiled</h2>
                                <p className='sm:w-[200px] sm:text-[14px]  lg:w-[350px] text-[24px] font-medium text-gray-600'>The new Panigale V4 inherits some of the technical solutions developed by the  professional riders.</p>
                            </div>
                            <img className='sm:w-[180px] md:w-[0px] sm:w-[200px] lg:w-[250px]' src="Image/DP.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className=" flex lg:gap-[40px] md:gap-[30px] sm:gap-[20px] justify-center items-center">
                            <img className='md:w-[513px] sm:w-[200px] lg:w-[410px]' src="Image/panegale.png" alt="" />
                            <div className="text">
                                <h2 className='sm:text-[24px] sm:w-[200px] md:w-[200px] md:text-[30px] lg:w-[250px] lg:text-[30px] font-Bricolage font-bold text-gray-200'>Wonder. Engineered.</h2>
                                <p className='sm:w-[200px] sm:text-[14px]  md:w-[200px] md:text-[18px] lg:w-[250px] lg:text-[24px] font-medium text-gray-600'>The new Panigale V4 inherits some of the technical solutions developed by the  professional riders.</p>
                            </div>
                            <img className=' md:w-[0px] sm:w-[200px] ' src="Image/Ducati.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className=" flex md:gap-[40px] sm:gap-[20px] justify-center items-center">
                            <img className='md:w-[0px] sm:w-[200px]' src="Image/HOn.png" alt="" />
                            <div className="text">
                                <h2 className='sm:text-[24px] sm:w-[200px] md:w-[250px] md:text-[24px] text-[40px] font-Bricolage font-bold text-gray-200'>
                                Master the art of speed</h2>
                                <p className='sm:w-[200px] sm:text-[14px] md:w-[300px] text-[24px] font-medium text-gray-600'>Our CBR1000RR brings MotoGP technology straight to your street. With its twin-spar aluminum chassis, premium suspension</p>
                            </div>
                            <img className='sm:w-[180px] md:w-[400px] sm:w-[200px]' src="Image/CBR.png" alt="" />
                        </div>
                    </div>
                    <div>
                    <div className=" flex md:gap-[40px] sm:gap-[20px] justify-center items-center">
                            <img className='md:w-[0px] sm:w-[200px]' src="Image/R1 v2.png" alt="" />
                            <div className="text">
                                <h2 className='sm:text-[24px] sm:w-[200px] md:w-[300px] text-[40px] font-Bricolage font-bold text-gray-200'>A Full History Of Precision And Power</h2>
                                <p className='sm:w-[200px] sm:text-[14px] md:w-[300px] text-[24px] font-medium text-gray-600'>Yamaha R1 motorSports is a complete sports bike with optimum safety features and bold visual appeal.</p>
                            </div>
                            <img className='sm:w-[180px] md:w-[300px] sm:w-[200px]' src="Image/R1M.png" alt="" />
                        </div>
                    </div>
                </Slider>
            </div>
      
       
      </div>
    </div>
    </>
  )
}

export default Banner
