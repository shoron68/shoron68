import React, { useState } from 'react'
import Container from './Container'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


const Nav = () => {
    let [show,setShow] = useState(false)
  return (
    <div className='py-[30px] relative'>
        <Container>
            <div className="flex justify-between items-center lg:mx-0 mx-[30px]">
                <div >
                    <h2 className=" text-[24px] font-Audiowide font-normal text-[#fff] ">Musfiqur</h2>
                </div>
                <div className="lg:block hidden">
                    <ul className='flex gap-x-[20px]  '>
                        <li><a href="#" className='text-[16px] font-Poppins font-normal text-[#fff] hover:text-[#80ed99] duration-300 ' >Home</a></li>
                        <li><a href="#" className='text-[16px] font-Poppins font-normal text-[#fff] hover:text-[#80ed99] duration-300 ' >About</a></li>
                        <li><a href="#" className='text-[16px] font-Poppins font-normal text-[#fff] hover:text-[#80ed99] duration-300 ' >Skills</a></li>
                        <li><a href="#" className='text-[16px] font-Poppins font-normal text-[#fff] hover:text-[#80ed99] duration-300 py-[8px] px-[20px] rounded-[] bg-[#ffffff3f]  rounded-lg' >Hire Me</a></li>
                    </ul>
                </div>
                <div className="flex items-center gap-x-4 lg:hidden">
                        <div className=" ">
                            <button onClick={() => setShow(true)}>
                                <FaBars className="text-[28px] text-[#fff]" />
                            </button>
                        </div>
                    </div> 
            </div>
        </Container>
         <div className={`fixed top-0 right-0 w-[300px] h-[100dvh] bg-[#212121] z-50 shadow-lg transform transition-transform duration-300 ${show ? 'translate-x-0' : 'translate-x-full'}`}>

                <div className="flex justify-end  mt-[33px] mr-[10px] ">
                <button onClick={() => setShow(false)}>
                <RxCross2 className="text-[28px] text-[#fff] mr-[28px]" />
                </button>
                </div>
                <div className=" pl-[20px]">
                 <ul className=''>
                        <li><a href="#" className='text-[16px] font-Poppins font-normal text-[#fff] hover:text-[#80ed99] duration-300 ' >Home</a></li>
                        <li className='py-[20px]'><a href="#" className='text-[16px] font-Poppins font-normal text-[#fff] hover:text-[#80ed99] duration-300  ' >About</a></li>
                        <li><a href="#" className='text-[16px] font-Poppins font-normal text-[#fff] hover:text-[#80ed99] duration-300 ' >Skills</a></li>
                        <li className='py-[20px]'><a href="#" className='text-[16px] font-Poppins font-normal text-[#fff] hover:text-[#80ed99] duration-300 py-[8px] px-[20px] rounded-[] bg-[#ffffff3f]  rounded-lg' >Hire Me</a></li>
                    </ul>
                </div>
                
            </div>
    </div>
  )
}

export default Nav