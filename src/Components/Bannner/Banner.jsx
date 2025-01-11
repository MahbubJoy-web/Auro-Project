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
        autoplaySpeed: 4000,
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
                    <div className=" flex gap-[50px] items-center">
                            <img className='joy_img w-[513px]' src="Image/MN.jpg" alt="" />
                            <div className="text">
                                <h2 className=' w-[350px] text-[40px] font-Bricolage font-bold text-gray-200'>New Panigale V4 2025 unveiled</h2>
                                <p className=' w-[500px] text-[24px] font-medium text-gray-600'>The new Panigale V4 inherits some of the technical solutions developed by the  professional riders.</p>
                            </div>
                            <img className='w-[400px]' src="Image/DP.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className=" flex gap-[50px] items-center">
                            <img className='w-[513px]' src="Image/panegale.png" alt="" />
                            <div className="text">
                                <h2 className=' w-[250px] text-[40px] font-Bricolage font-bold text-gray-200'>Wonder. Engineered.</h2>
                                <p className=' w-[500px] text-[24px] font-medium text-gray-600'>The new Panigale V4 inherits some of the technical solutions developed by the  professional riders.</p>
                            </div>
                            <img src="Image/Ducati.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className=" flex gap-[40px] items-center">
                            <img className='w-[513px]' src="Image/HOn.png" alt="" />
                            <div className="text">
                                <h2 className=' w-[250px] text-[40px] font-Bricolage font-bold text-gray-200'>
                                Master the art of speed</h2>
                                <p className=' w-[500px] text-[24px] font-medium text-gray-600'>Our CBR1000RR brings MotoGP technology straight to your street. With its twin-spar aluminum chassis, premium suspension</p>
                            </div>
                            <img src="Image/CBR.png" alt="" />
                        </div>
                    </div>
                    <div>
                    <div className=" flex gap-[40px] items-center">
                            <img className='w-[513px]' src="Image/R1 v2.png" alt="" />
                            <div className="text">
                                <h2 className=' w-[400px] text-[40px] font-Bricolage font-bold text-gray-200'>A Full History Of Precision And Power</h2>
                                <p className=' w-[500px] text-[24px] font-medium text-gray-600'>Yamaha R1 motorSports is a complete sports bike with optimum safety features and bold visual appeal.</p>
                            </div>
                            <img src="Image/R1M.png" alt="" />
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
