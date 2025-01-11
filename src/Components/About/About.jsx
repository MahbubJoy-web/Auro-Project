import React from 'react'

const About = () => {
  return (
    <>
      <div className="joy_About bg-black w-full h-[800px]">
        <div className="container">
            <div className="head-text">
                <h2 className='mb-[50px] text-[48px] text-center text-gray-500 font-Poppins font-bold'>About Us</h2>
            </div>
            <div className="about_row w-full flex justify-between items-center">
                <div className="about_img">
                    <img src="Image/About.png" alt="about-pic" />
                </div>
                <div className="about_text sm:ml-[30px]">
                    <h2 className='text-white font-black, text-[26px] md:text-[36px] font-Bricolage'>Bike Rental</h2>
                    <p className='w-full md:w-[600px] text-[16px] md:text-[20px] text-gray-400 font-Poppins font-regular'>We launch Bike Rental service in all over BD.<br/>
                    16 December 2020 with 16 bikes for tourists, delivery man and commercial people to make the journey hassle-free, easy-going, delightful, and low-cost services.</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default About
