
import Container from './Container'
import img1 from "../assets/ProjectPlaneicon-1.svg"
import img2 from "../assets/ProjectPlaneicon-2.svg"
import img3 from "../assets/ProjectPlaneicon-3.svg"

const MakeProjects = () => {
  return (
    <div className=''>

   <Container className="lg:py-[124px] py-[60px]">
    <div className="">
  <h2  data-aos="fade-up" data-aos-duration="300" className="lg:text-[80px] text-[50px] lg:text-start text-center font-Poppins font-semibold bg-gradient-to-br from-[#ade6e7] to-[#80ed99] bg-clip-text text-transparent">
    HOW I MAKE PROJECTS?
  </h2>
</div>

<div className="grid lg:grid-cols-3 grid-rows-1 gap-12 items-center lg:mt-[150px] mt-[80px] lg:mx-0 mx-[30px]">
          <div >
            <div data-aos="zoom-in" data-aos-duration="350"  className="p-[20px] border-[1px] border-[#ffffff70] bg-[#212121] rounded-xl hover:scale-103 duration-300">
              <h4 className='text-[20px] text-[#fff] font-Poppins font-medium'>Brainstorming & UI Design</h4>
              <p className='text-[16px] text-[#ffffffb6] font-Poppins font-normal py-[13px]'>Every project starts with brainstorming and planning. I create a visually appealing and user-friendly UI design to enhance effectiveness.</p>
              <img src={img1} alt="" />
            </div>
          </div>
    <div >
      <div  data-aos="zoom-in" data-aos-duration="200"  className="p-[20px] border-[1px] border-[#ffffff70] bg-[#212121] rounded-xl  hover:scale-103 duration-300">
              <h4 className='text-[20px] text-[#fff] font-Poppins font-medium'>Brainstorming & UI Design</h4>
              <p className='text-[16px] text-[#ffffffb6] font-Poppins font-normal py-[13px]'>Every project starts with brainstorming and planning. I create a visually appealing and user-friendly UI design to enhance effectiveness.</p>
              <img src={img2} alt="" />
            </div>
    </div>
    <div >
      <div  data-aos="zoom-in" data-aos-duration="350"  className="p-[20px] border-[1px] border-[#ffffff70] bg-[#212121] rounded-xl hover:scale-103 duration-300">
              <h4 className='text-[20px] text-[#fff] font-Poppins font-medium'>Brainstorming & UI Design</h4>
              <p className='text-[16px] text-[#ffffffb6] font-Poppins font-normal py-[13px]'>Every project starts with brainstorming and planning. I create a visually appealing and user-friendly UI design to enhance effectiveness.</p>
              <img src={img1} alt="" />
            </div>
    </div>
</div>
    
        <div  data-aos="fade-up" data-aos-duration="400" className="bg-gradient-to-br from-[#80ed99] to-[#38a3a5] py-[30px] px-[20px]  rounded-md mt-[150px] lg:mx-0 mx-[30px]">
          <div className="lg:flex justify-between items-center">
            <div className="">
              <h4 className='lg:text-[24px] text-[24px] lg:text-start text-center text-[#fff] font-Poppins font-semibold'>Want to work with me?</h4>

              <h3 className='lg:text-[24px] text-[20px] lg:text-start text-center text-[#fff] font-Poppins font-semibold'>Let's build something together</h3>
            </div>
            <div className="lg:mt-0 mt-[20px]">
                <p className='text-[16px] font-Poppins font-normal text-[#fff] lg:text-start text-center'>Get in touch</p>
                <div className="flex justify-center lg:justify-normal lg:mt-0 mt-[10px]">
                <a href="mailto:mr.shoron.7514@gmail.com" className="text-[14px] font-Poppins font-normal text-[#fff] bg-[#ffffff36] py-[5px] px-[10px] rounded-sm inline-block">
                  Contact
                </a>
                </div>
            </div>
          </div>


 </div>
   </Container>
    </div>
  )
}

export default MakeProjects