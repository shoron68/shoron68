import React from 'react'
import Container from './Container'
import { FaGithub,FaLinkedin,FaFacebook   } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' pt-[124px]'>
        <Container>
            <div className="py-[20px] bg-[#212121] rounded-xl lg:mx-0 mx-[30px]">
                <div className="flex justify-between items-center lg:mx-[30px] mx-[10px] ">
                <div className="">
                    <h4 className='text-[#fff] font-Poppins font-normal text-[14px]'>©2025 Musfiqur Rahman. All Rights Reserved.</h4>
                </div>
                <div className="">
                    <div className="flex gap-x-3">
                        <a href="https://github.com/shoron68" target='blank'><FaGithub className='text-[24px] text-[#fff] hover:text-[#80ed99] duration-300'/></a>
                        <a href="https://www.linkedin.com/in/musfiqur-rahman02/" target='blank' ><FaLinkedin className='text-[24px] text-[#fff] hover:text-[#80ed99] duration-300'/></a>
                        <a href="https://www.facebook.com/musfiqurrahman.shoron.507" target='blank'><FaFacebook className='text-[24px] text-[#fff] hover:text-[#80ed99] duration-300'/></a>
                    </div>
                </div>
            </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer