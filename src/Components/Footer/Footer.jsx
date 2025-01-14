import React from 'react'
import { SiGooglemaps } from "react-icons/si";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { Link } from 'react-router-dom';
import { BsInstagram } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
     <div className="w-full bg-black">
        <div className="container">
            <div className="footer_row pt-6 pb-9 pr-6 bg-[#1D1616] rounded-t-[20px] w-full flex flex-wrap justify-between text-white">
                <div className="l_text pl-14 text-white ">
                    <h2 className=' text-[32px] font-Poppins font-semibold'>Car Rental</h2>
                    <p className='mt-2 text-md font-[600] w-[400px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit cum omnis nemo quae.</p>
                    <div className="mt-4 mb-2 flex gap-2 items-center">
                    <SiGooglemaps className='w-5 h-5'/>  
                    <h3 className='text-lg'>Mirpur-10.Dhaka</h3>
                    </div>
                    <div className="flex gap-2 items-center">
                    <MdOutlinePhonelinkRing className='w-5 h-5'/>
                    <a href="tel" className='text-lg'>01963405564</a>
                    </div>
                    <div className="ml-7 mt-8 social flex gap-3 h-">
                    <BsInstagram className='w-[40px] h-[40px]'/>
                    <FaSquareFacebook className='w-[40px] h-[40px]'/>
                    <FaLinkedin className='w-[40px] h-[40px]'/>
                    </div>
                </div>
                <div className="M_text pt-9">
                    <h2 className='mb-8 text-2xl font-semibold border-b-2'>Feature</h2>
                    <div className="text-lg text-center flex flex-col gap-3">
                        <p>Ride</p>
                        <p>Rent</p>
                        <p>Drive</p>
                        <p>Delivery</p>
                        <p>Persel</p>
                    </div>
                </div>
                <div className="M-Txt pt-9">
                    <h2 className='mb-8 text-2xl font-semibold text-center border-b-2'>Contract</h2>
                    <div className="text-lg text-center flex flex-col gap-4">
                        <p>HelpLine</p>
                        <p>Contract NearPoint</p>
                        <p>Terms Of Use</p>
                        <h2>© 2025 Apilo Technologies Inc.</h2>  
                    </div>
                   
                </div>
                <div className="R-text pt-9">
                    <h2 className='mb-8 text-2xl font-semibold border-b-2'>Available On </h2>
                    <img src="Image/Document.png" alt="" className=' w-[150px]'/>
                    <img src="Image/Document (1).png" alt="" className='mt-3 w-[150px]'/>
                </div>
            </div>
                
        </div>    
    </div> 
    </>
  )
}

export default Footer
