import React from 'react'
import Container from './Container'
import image from "../assets/portimg.png"
import image2 from "../assets/hotel.png"
import { FaGithub } from "react-icons/fa";


const Portfolio = () => {
  return (
    <div id='portfolio' className=' lg:py-[124px] py-[60px] lg:pt-0 pt-[120px]'>
      <Container>
        <div className="">
          <h4 data-aos="fade-up" data-aos-delay="0" className='text-[28px] font-Poppins font-normal text-[#fff] text-center'>My Portfolio</h4>
          <p data-aos="fade-up" data-aos-delay="200" className='text-[16px] font-Poppins font-normal text-[#ffffffaf] text-center mt-[5px]'>Watch my featured projects</p>
        </div>

        <div className="grid lg:grid-cols-3 grid-rows-1 gap-12 mt-[100px] items-center lg:mx-0 mx-[30px]">
          <div data-aos="fade-right" data-aos-delay="200" className="lg:col-span-2">
            <img src={image} className='rounded-xl' alt="" />
          </div>
          <div data-aos="fade-right" data-aos-delay="0" className="lg:col-start-3">
            <div className="">
              <h2 className="text-[28px] text-center lg:text-start font-Poppins font-semibold bg-gradient-to-br from-[#ade6e7] to-[#80ed99] bg-clip-text text-transparent uppercase">
                HEKTO Ecommarce Web-site
              </h2>
              <p className='text-[14px] text-center lg:text-start font-Poppins font-light text-[#ffffffa4] tracking-[1px] leading-[130%] mt-[20px]'>I built the eCommerce website using React.js, Tailwind CSS, and JavaScript, focusing entirely on the user interface and experience. The platform includes essential features like dynamic product listings, interactive shopping carts, responsive design, and smooth navigation — all crafted to deliver a seamless shopping experience. I emphasized clean UI, accessibility, and performance, ensuring the design looks great on all devices. Tailwind CSS helped maintain consistent styling and fast development, while React’s component-based structure made the interface scalable and maintainable. This project demonstrates my ability to create modern, responsive, and visually engaging eCommerce frontends.</p>
              <div className="mt-[30px] lg:justify-normal flex justify-center ">
                <div className="flex gap-x-[20px]">
                  <a href="https://ecommerce-project-psi-two.vercel.app/" target='blank' className='text-[14px] font-Poppins font-normal text-[#fff] py-[10px] px-[15px]  bg-[#212121] hover:text-[#80ed99] duration-300 rounded-[5px]'> View Project</a>
                  <a href="https://github.com/shoron68/Ecommerce-project" target='blank' className=' font-Poppins font-normal text-[#fff] py-[10px] px-[15px]  bg-[#212121] hover:text-[#80ed99] duration-300 rounded-[5px] text-[20px]'><FaGithub /></a>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-12 items-center lg:mt-[100px] mt-[60px] lg:mx-0 mx-[30px]">
          <div className='order-2 lg:order-1' >
            <div data-aos="fade-right" data-aos-delay="0" className="">
              <h2 className="text-[28px] font-Poppins text-center lg:text-start font-semibold bg-gradient-to-br from-[#ade6e7] to-[#80ed99] bg-clip-text text-transparent uppercase">
                Hotel Service
              </h2>
              <p className='text-[14px] text-center lg:text-start font-Poppins font-light text-[#ffffffa4] tracking-[1px] leading-[130%] mt-[20px]'>I developed a responsive hotel website using React.js and Tailwind CSS, focused on delivering a clean and user-friendly interface. The site includes key features like room listings, image galleries, a date picker, and smooth navigation. Using React, I built reusable components for sections like rooms, reviews, and FAQs. Tailwind CSS helped streamline styling and maintain consistency across the design. The result is a modern, mobile-friendly frontend that offers a seamless browsing experience for hotel guests.</p>
              <div className="mt-[30px] lg:justify-normal flex justify-center ">
                <div className="flex gap-x-[20px] lg:order-0 order-1">
                  <a href="https://design-2-beta.vercel.app/" target='blank' className='text-[14px] font-Poppins font-normal text-[#fff] py-[10px] px-[15px]  bg-[#212121] hover:text-[#80ed99] duration-300 rounded-[5px]'> View Project</a>
                  <a href="https://github.com/shoron68/Design-2" target='blank' className=' font-Poppins font-normal text-[#fff] py-[10px] px-[15px]  bg-[#212121] hover:text-[#80ed99] duration-300 rounded-[5px] text-[20px]'><FaGithub /></a>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-delay="200" className="lg:col-span-2 order-1 lg:order-2 lg:mb-0 mb-[30px]">
            <img src={image2} className='rounded-xl' alt="" />
          </div>
        </div>


      </Container>
    </div>
  )
}

export default Portfolio