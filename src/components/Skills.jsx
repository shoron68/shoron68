import { FaReact, FaCss3, FaFigma, FaRegFileCode } from "react-icons/fa";
import { PiFileJsDuotone } from "react-icons/pi";
import { RiTailwindCssFill, RiBootstrapLine } from "react-icons/ri";
import ProgressBar from "@ramonak/react-progress-bar";
import Container from './Container';
import { AiOutlineLayout } from "react-icons/ai";
import { useEffect, useState } from "react";

const Skills = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [count5, setCount5] = useState(0);
    const [count6, setCount6] = useState(0);
    const targets = [80, 85, 90, 80, 75, 85];

    useEffect(() => {
        const animateCount = (setCount, target, speed = 25) => {
            let current = 0;
            const interval = setInterval(() => {
                current += 1;
                if (current <= target) {
                    setCount(current);
                } else {
                    clearInterval(interval);
                }
            }, speed);
        };

        animateCount(setCount1, targets[0]);
        animateCount(setCount2, targets[1]);
        animateCount(setCount3, targets[2]);
        animateCount(setCount3, targets[3]);
        animateCount(setCount3, targets[4]);
        animateCount(setCount3, targets[5]);
        animateCount(setCount3, targets[6]);
    }, []);






    const skills = [
        { icon: <PiFileJsDuotone />, level: 70, label: 'Main programming languages', years: '1 years', },
        { icon: <FaReact />, level: 80, label: 'Main front-end js framework', years: '1 years', },
        { icon: <RiTailwindCssFill />, level: 85, label: 'Main CSS framework for UI/UX', years: '1 years', },
    ];


    return (
        <div className=" lg:py-[124px] py-[60px]">
            <Container>
                <div data-aos="fade-up" data-aos-delay="0" className="bg-[#1B1B1B] border-[1px] border-[#ffffff69] rounded-2xl lg:py-[60px] py-[30px] lg:mx-0 mx-[30px] ">
                    <h2 className="text-center text-white text-[24px] font-Poppins font-normal mb-10">My Skills</h2>


                    <div className="grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-8 lg:mx-[100px] lg:gap-y-10 gap-y-10 mx-[30px]">
                        <div >
                            <div data-aos="fade-right" data-aos-delay="200" className="flex items-center gap-3 w-full">
                                <div className="text-[#80ed99] text-[25px]">
                                    <PiFileJsDuotone />
                                </div>
                                <div className="w-full">
                                    <ProgressBar
                                        completed={targets[0]}
                                        height="10px"
                                        baseBgColor="#e5e7eb"
                                        bgColor="#80ed99"
                                        isLabelVisible={false}
                                        transitionDuration="2s"
                                        animateOnRender
                                        borderRadius="10px"
                                    />
                                </div>
                            </div>
                        </div>
                        <div >
                            <div data-aos="fade-right" data-aos-delay="200" className="flex items-center gap-3 w-full">
                                <div className="text-[#80ed99] text-[25px]">
                                    <RiTailwindCssFill />
                                </div>
                                <div className="w-full">
                                    <ProgressBar
                                        completed={targets[1]}
                                        height="10px"
                                        baseBgColor="#e5e7eb"
                                        bgColor="#80ed99"
                                        isLabelVisible={false}
                                        transitionDuration="2s"
                                        animateOnRender
                                        borderRadius="10px"
                                    />
                                </div>
                            </div>
                        </div>
                        <div >
                            <div data-aos="fade-right" data-aos-delay="200" className="flex items-center gap-3 w-full">
                                <div className="text-[#80ed99] text-[25px]">
                                    <FaCss3 />
                                </div>
                                <div className="w-full">
                                    <ProgressBar
                                        completed={targets[2]}
                                        height="10px"
                                        baseBgColor="#e5e7eb"
                                        bgColor="#80ed99"
                                        isLabelVisible={false}
                                        transitionDuration="2s"
                                        animateOnRender
                                        borderRadius="10px"
                                    />
                                </div>
                            </div>
                        </div>
                        <div >
                            <div data-aos="fade-right" data-aos-delay="200" className="flex items-center gap-3 w-full">
                                <div className="text-[#80ed99] text-[25px]">
                                    <FaReact />
                                </div>
                                <div className="w-full">
                                    <ProgressBar
                                        completed={targets[3]}
                                        height="10px"
                                        baseBgColor="#e5e7eb"
                                        bgColor="#80ed99"
                                        isLabelVisible={false}
                                        transitionDuration="2s"
                                        animateOnRender
                                        borderRadius="10px"
                                    />
                                </div>
                            </div>
                        </div>
                        <div >
                            <div data-aos="fade-right" data-aos-delay="200" className="flex items-center gap-3 w-full">
                                <div className="text-[#80ed99] text-[25px]">
                                    <FaFigma />
                                </div>
                                <div className="w-full">
                                    <ProgressBar
                                        completed={targets[4]}
                                        height="10px"
                                        baseBgColor="#e5e7eb"
                                        bgColor="#80ed99"
                                        isLabelVisible={false}
                                        transitionDuration="2s"
                                        animateOnRender
                                        borderRadius="10px"
                                    />
                                </div>
                            </div>
                        </div>
                        <div >
                            <div data-aos="fade-right" data-aos-delay="200" className="flex items-center gap-3 w-full">
                                <div className="text-[#80ed99] text-[25px]">
                                    <RiBootstrapLine />
                                </div>
                                <div className="w-full">
                                    <ProgressBar
                                        completed={targets[5]}
                                        height="10px"
                                        baseBgColor="#e5e7eb"
                                        bgColor="#80ed99"
                                        isLabelVisible={false}
                                        transitionDuration="2s"
                                        animateOnRender
                                        borderRadius="10px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:flex lg:gap-x-[100px] lg:gap-y-0 gap-y-10 justify-center  lg:mt-[100px] mt-[70px] ">
                        {skills.map((skill, index) => (
                            <div data-aos="zoom-in" key={index} className="text-center lg:py-0 py-[30px] ">
                                <div className="flex justify-center mb-2 text-[#80ed99] text-[30px]">{skill.icon}</div>
                                <p className="mb-1 text-[#fff] font-Poppins text-[16px] font-light ">{skill.label}</p>
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-[#fff] font-Poppins text-[16px] font-semibold">{skill.level}%</span>
                                </div>
                                <p className="mt-2 text-[#fff] font-Poppins text-[14px] font-light">
                                    {skill.years} of <span className="font-semibold text-white text-[16px]">experience</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="grid lg:grid-cols-3 grid-rows-1 gap-12 mt-[150px] lg:mx-0 mx-[30px]">
                    <div >
                        <div data-aos="zoom-in" className="p-[2px] rounded-xl bg-gradient-to-br from-[#38a3a5] to-[#80ed99] hover:scale-103 duration-300">
                            <div className="py-[20px] px-[20px] bg-[#212121] rounded-xl">
                                <div className="h-[50px] w-[50px] rounded-[5px] bg-[#fff] flex items-center justify-center">
                                    <FaReact className="h-[40px] w-[40px] text-[#38a3a5]" />
                                </div>
                                <div className="mt-[25px]">
                                    <h4 className="text-[16px] font-Poppins text-[#fff] font-light">Custom React JS Website</h4>
                                    <h4 className="text-[14px] mt-[20px] font-Poppins text-[#ffffffb2] font-light">
                                        I can build a custom React JS website with a modern, user-friendly UI/UX design and exceptional speed.
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div data-aos="zoom-in" className="p-[2px] rounded-xl bg-gradient-to-br from-[#38a3a5] to-[#80ed99] hover:scale-103 duration-300">
                            <div className="py-[20px] px-[20px] bg-[#212121] rounded-xl">
                                <div className="h-[50px] w-[50px] rounded-[5px] bg-[#fff] flex items-center justify-center">
                                    <FaRegFileCode eact className="h-[40px] w-[40px] text-[#38a3a5] " />
                                </div>
                                <div className="mt-[25px]">
                                    <h4 className="text-[16px] font-Poppins text-[#fff] font-light">Custom React JS Website</h4>
                                    <h4 className="text-[14px] mt-[20px] font-Poppins text-[#ffffffb2] font-light">I can build a custom React JS website with a modern, user-friendly UI/UX design and exceptional speed.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div data-aos="zoom-in" className="p-[2px] rounded-xl bg-gradient-to-br from-[#38a3a5] to-[#80ed99] hover:scale-103 duration-300">
                            <div className="py-[20px] px-[20px]  bg-[#212121] rounded-xl">
                                <div className="h-[50px] w-[50px] rounded-[5px] bg-[#fff] flex items-center justify-center">
                                    <AiOutlineLayout eact className="h-[40px] w-[40px] text-[#38a3a5] " />
                                </div>
                                <div className="mt-[25px]">
                                    <h4 className="text-[16px] font-Poppins text-[#fff] font-light">Custom React JS Website</h4>
                                    <h4 className="text-[14px] mt-[20px] font-Poppins text-[#ffffffb2] font-light">I can build a custom React JS website with a modern, user-friendly UI/UX design and exceptional speed.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </Container>
        </div>
    )
}

export default Skills