import ParticlesBackground from './ParticlesBackground';
import Container from './Container';
import Typewriter from 'typewriter-effect';
import { FaStar } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Hero = ({showContent }) => {
    const items = [
    'Modern UI/UX',
    'Front-end web dev',
    'Dynamic user interface',
    'Fast and optimized',
    'User friendly',
  ];
    useEffect(() => {
  if (showContent) {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      once: true,
    });

    setTimeout(() => {
      AOS.refreshHard();
    }, 100);
  }
}, [showContent]);
  return (
    <div className=' lg:py-[120px] py-[60px]'> 
        <ParticlesBackground  />
        <Container>
            <div className="lg:flex justify-between items-center lg:mx-0 mx-[30px]">
                <div className="">
                <div className="relative">
                    <div className="">
                        <span data-aos="fade-up" data-aos-delay="0" className='text-[#fff] font-Fira-Code lg:text-[18px] text-[16px] '><Typewriter options={{strings: [' console.log ("Hello")'], autoStart: true, loop: true,}}/></span>
                        <h1 data-aos="fade-up" data-aos-delay="600" className='lg:text-[60px] text-[26px] font-Audiowide text-[#fff] z-10 uppercase '>I <span className='text-[#80ed99]'>AM</span> <br/> Musfiqur Rahman</h1>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600"  className="absolute lg:bottom-0 lg:right-0 right-[20px] h-[10px] lg:w-[306px] w-[131px]  bg-gradient-to-br from-[#38a3a5] to-[#80ed99]"></div>
                    
                </div>
                <div  data-aos="fade-up" data-aos-delay="1200" className="flex justify-center lg:justify-normal">
                    <div className="mt-[30px] relative">
                    <div className="h-[40px] w-[215px] items-center flex rounded-2xl  bg-gradient-to-br from-[#38a3a5] to-[#80ed99]">
                        <p className='text-[14px] font-Poppins ml-[40px] mt-[2px] uppercase'>Front-end Developer</p>
                    </div>
                    <div className="h-[12px] w-[12px] rounded-full bg-[#c7f9cc] absolute top-[14px] left-[15px]" ></div>
                </div>
                </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="1400" className="flex justify-center lg:justify-normal lg:mt-0 mt-[50px]">
                    <div className="relative">
                    <div className="lg:h-[500px] lg:w-[450px] h-[300px] w-[250px] rounded-2xl bg-[#80ed99]"></div>
                    <div className="lg:h-[500px] lg:w-[450px] h-[300px] w-[250px] absolute bottom-0 right-0 blur-[60px] bg-[#80ed9950] rounded-2xl"></div>
                </div>
                </div>
            </div>
        <div data-aos="fade-up" data-aos-delay="0" className="lg:mx-0 mx-[30px]">

              <div className="bg-[#FEF9E1] rounded-lg lg:py-5 py-3 overflow-hidden w-full mt-[60px] ">
                  <div className="flex w-max animate-marquee">
                      {[...Array(2)].map((_, idx) => (
                          <div className="flex" key={idx}>
                              {items.map((text, i) => (
                                  <div
                                      key={i}
                                      className="flex items-center flex-grow-0 flex-shrink-0 min-w-min"
                                  >
                                      <FaStar className="text-main-bg lg:text-[25px] text-[18px] lg:mx-[30px] mx-[15px]" />
                                      <h3 className="font-Poppins text-main-bg  lg:text-[25px] text-[18px] font-medium">
                                          {text}
                                      </h3>
                                  </div>
                              ))}
                          </div>
                      ))}
                  </div>
              </div>
        </div>

    <div data-aos="fade-up" data-aos-delay="0" className="flex justify-center  lg:pt-10 pt-10">
                       <div className="">
                         <div className="h-[50px] w-[35px] border-[3px] border-[#ffffff5b] rounded-[30px] flex justify-center">
                            <div className="h-[8px] w-[4px] rounded-2xl bg-[#fff] animate-cursor"></div>
                        </div>
                       </div>
                    </div>
        </Container>
    </div>
  )
}

export default Hero