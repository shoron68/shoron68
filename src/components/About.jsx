import React from 'react'
import Container from './Container'
import { FaReact,FaCss3,FaFigma   } from "react-icons/fa";
import { PiFileJsDuotone } from "react-icons/pi";
import { RiTailwindCssFill,RiBootstrapLine  } from "react-icons/ri";
import profile2 from "../assets/profile2.jpg"




const About = () => {
  return (
    <div id='about' className='lg:py-[124px] lg:pt-0 pt-[120px]'>
        
        <Container>
            <div data-aos="fade-up" data-aos-delay="0" className="border-[1px] border-[#ffffff70] lg:py-[80px] py-[40px] rounded-2xl bg-[#ffffff11] lg:mx-0 mx-[30px]">
                    <div className="">
                        <h2 data-aos="fade-up" data-aos-delay="200" className=' text-[#fff] font-Poppins text-[26px] text-center'>About me</h2>
                    </div>
                    <div className="lg:flex  lg:mx-[100px] mx-[10px] items-center mt-[50px]">
                        <div data-aos="fade-up" data-aos-delay="200" className="h-[350px] w-[350px] lg:block hidden">
                            <img src={profile2} className='rounded-xl' alt="" />
                        </div>
                        <div className="lg:w-[700px] lg:ml-[200px]">
                            <h3 data-aos="fade-up" data-aos-delay="200" className='lg:text-[38px] text-[30px] font-Audiowide font-medium text-[#fff] lg:text-start text-center'>Musfiqur Rahman</h3>
                            <p data-aos="fade-up" data-aos-delay="300" className='lg:text-[16px] text-[14px] font-Poppins font-normal text-[#ffffffb4] py-[20px] lg:text-start text-center '>I’m a passionate front-end development graduate specializing in React and JavaScript, focused on building user-friendly, responsive interfaces. I aim to contribute to dynamic teams by applying my skills in React components, HTML5, CSS3, and modern JavaScript libraries. As a lifelong learner, I continuously seek opportunities to grow through collaboration and hands-on experience.</p>
                            <div data-aos="fade-up" data-aos-delay="300" className="flex justify-center lg:justify-normal">
                                <div className="h-[50px] w-[230px] border-[#80ed9977] rounded-xl border-[1px] flex items-center mt-[20px] ">
                                <div className="h-[15px] w-[15px] bg-[#c44900] rounded-full ml-[15px]"></div>
                                <p className='ml-[10px] text-[16px] font-Poppins font-normal text-[#fff] '>Front-End-Developer</p>
                            </div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="300" className="flex lg:justify-normal justify-center gap-x-4 mt-[30px]">
                                <PiFileJsDuotone className="text-[30px]  text-[#80ed99] " />
                                <FaReact className="text-[30px]   text-[#80ed99] " />
                                <RiTailwindCssFill className="text-[30px]   text-[#80ed99] " />
                                <FaCss3  className="text-[30px]  text-[#80ed99] " />
                                <FaFigma   className="text-[30px]   text-[#80ed99] " />
                                <RiBootstrapLine    className="text-[30px]  text-[#80ed99] " />
                            </div>
                        </div>
                    </div>
            </div>  
        </Container>
    </div>
  )
}

export default About